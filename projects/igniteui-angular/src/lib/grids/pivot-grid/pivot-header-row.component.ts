import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Inject,
    Renderer2
} from '@angular/core';
import { first } from 'rxjs/operators';
import { IBaseChipEventArgs, IgxChipComponent } from '../../chips/chip.component';
import { GridColumnDataType } from '../../data-operations/data-util';
import { SortingDirection } from '../../data-operations/sorting-strategy';
import { ISelectionEventArgs } from '../../drop-down/drop-down.common';
import { IgxDropDownComponent } from '../../drop-down/drop-down.component';
import { AbsoluteScrollStrategy, AutoPositionStrategy, OverlaySettings, PositionSettings, VerticalAlignment } from '../../services/public_api';
import { IGX_GRID_BASE, PivotGridType } from '../common/grid.interface';
import { IgxGridHeaderRowComponent } from '../headers/grid-header-row.component';
import { DropPosition } from '../moving/moving.service';
import { IgxPivotAggregate, IgxPivotDateAggregate, IgxPivotNumericAggregate, IgxPivotTimeAggregate } from './pivot-grid-aggregate';
import { IPivotAggregator, IPivotDimension, IPivotValue, PivotDimensionType } from './pivot-grid.interface';

/**
 *
 * For all intents & purposes treat this component as what a <thead> usually is in the default <table> element.
 *
 * This container holds the pivot grid header elements and their behavior/interactions.
 *
 * @hidden @internal
 */
@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'igx-pivot-header-row',
    templateUrl: './pivot-header-row.component.html'
})
export class IgxPivotHeaderRowComponent extends IgxGridHeaderRowComponent {
    public aggregateList: IPivotAggregator[] = [];

    public value: IPivotValue;
    private _dropPos = DropPosition.AfterDropTarget;
    private _dropLeftIndicatorClass = 'igx-pivot-grid__drop-indicator--left';
    private _dropRightIndicatorClass = 'igx-pivot-grid__drop-indicator--right';
    private valueData: Map<string, IPivotAggregator[]>;
    private _subMenuPositionSettings: PositionSettings = {
        verticalStartPoint: VerticalAlignment.Bottom,
        closeAnimation: undefined
    };
    private _subMenuOverlaySettings: OverlaySettings = {
        closeOnOutsideClick: true,
        modal: false,
        positionStrategy: new AutoPositionStrategy(this._subMenuPositionSettings),
        scrollStrategy: new AbsoluteScrollStrategy()
    };

    constructor(
        @Inject(IGX_GRID_BASE) public grid: PivotGridType,
        protected ref: ElementRef<HTMLElement>,
        protected cdr: ChangeDetectorRef,
        protected renderer: Renderer2,
    ) {
        super(ref, cdr);
    }

    public getAggregateList(val: IPivotValue): IPivotAggregator[] {
        if (!val.aggregateList) {
            let defaultAggr = this.getAggregatorsForValue(val);
            const isDefault = defaultAggr.find(x => x.key === val.aggregate.key);
            // resolve custom aggregations
            if (!isDefault && this.grid.data[0][val.member] !== undefined) {
                // if field exists, then we can apply default aggregations and add the custom one.
                defaultAggr.unshift(val.aggregate);
            } else if (!isDefault) {
                // otherwise this is a custom aggregation that is not compatible
                // with the defaults, since it operates on field that is not in the data
                // leave only the custom one.
                defaultAggr = [val.aggregate];
            }
            val.aggregateList = defaultAggr;
        }
        return val.aggregateList;
    }

    public rowRemoved(event: IBaseChipEventArgs) {
        const row = this.grid.pivotConfiguration.rows.find(x => x.memberName === event.owner.id);
        row.enabled = false;
        this.grid.pipeTrigger++;
        this.grid.filteringService.clearFilter(row.memberName);
    }

    public columnRemoved(event: IBaseChipEventArgs) {
        const col = this.grid.pivotConfiguration.columns.find(x => x.memberName === event.owner.id);
        col.enabled = false;
        this.grid.setupColumns();
        this.grid.filteringService.clearFilter(col.memberName);
        this.grid.pipeTrigger++;
    }

    public valueRemoved(event: IBaseChipEventArgs) {
        const value = this.grid.pivotConfiguration.values.find(x => x.member === event.owner.id);
        value.enabled = false;
        this.grid.setupColumns();
        this.grid.pipeTrigger++;
    }

    public filterRemoved(event: IBaseChipEventArgs) {
        const filter = this.grid.pivotConfiguration.filters.find(x => x.memberName === event.owner.id);
        filter.enabled = false;
        this.grid.filteringService.clearFilter(filter.memberName);
        this.grid.pipeTrigger++;
    }

    public onFilteringIconPointerDown(event) {
        event.stopPropagation();
        event.preventDefault();
    }

    public onFilteringIconClick(event, dimension) {
        event.stopPropagation();
        event.preventDefault();
        let dim = dimension;
        let col;
        while(dim) {
            col = this.grid.dimensionDataColumns.find(x => x.field === dim.memberName || x.field === dim.member);
            if (col) {
                break;
            } else {
                dim = dim.childLevel;
            }
        }
        this.grid.filteringService.toggleFilterDropdown(event.target, col);
    }

    public onSummaryClick(eventArgs, value: IPivotValue, dropdown: IgxDropDownComponent, chip: IgxChipComponent) {
        this._subMenuOverlaySettings.target = eventArgs.currentTarget;
        if (dropdown.collapsed) {
            this.updateDropDown(value, dropdown, chip);
        } else {
            // close for previous chip
            dropdown.close();
            dropdown.closed.pipe(first()).subscribe(() => {
                this.updateDropDown(value, dropdown, chip);
            });
        }
    }

    public onAggregationChange(event: ISelectionEventArgs) {
        if (!this.isSelected(event.newSelection.value)) {
            this.value.aggregate = event.newSelection.value;
            this.grid.pipeTrigger++;
        }
    }

    public isSelected(val: IPivotAggregator) {
        return this.value.aggregate.key === val.key;
    }

    public onChipSort(event, dimension: IPivotDimension, dimensionType: PivotDimensionType) {
        if (!dimension.sortDirection) {
            dimension.sortDirection = SortingDirection.None;
        }
        dimension.sortDirection = dimension.sortDirection + 1 > SortingDirection.Desc ?
             SortingDirection.None : dimension.sortDirection + 1;
        // apply same sort direction to children.
        let dim = dimension;
        while(dim.childLevel) {
            dim.childLevel.sortDirection = dimension.sortDirection;
            dim = dim.childLevel;
        }
        this.grid.pipeTrigger++;
        if (dimensionType === PivotDimensionType.Column) {
            this.grid.setupColumns();
        }
    }

    public onDimDragOver(event, dimension?: PivotDimensionType) {
        const typeMismatch = dimension !== undefined ? this.grid.pivotConfiguration.values.find(x => x.member === event.dragChip.id) :
            !this.grid.pivotConfiguration.values.find(x => x.member === event.dragChip.id);
        if (typeMismatch) {
            // cannot drag between dimensions and value
            return;
        }
        // if we are in the left half of the chip, drop on the left
        // else drop on the right of the chip
        const clientRect = event.owner.nativeElement.getBoundingClientRect();
        const pos = clientRect.width / 2;

        this._dropPos = event.originalEvent.offsetX > pos ? DropPosition.AfterDropTarget : DropPosition.BeforeDropTarget;
        if (this._dropPos === DropPosition.AfterDropTarget) {
            event.owner.nativeElement.style.borderRight = '1px solid red';
            event.owner.nativeElement.style.borderLeft = '';
            this.renderer.removeClass(event.owner.nativeElement, this._dropLeftIndicatorClass);
            this.renderer.addClass(event.owner.nativeElement, this._dropRightIndicatorClass);
        } else {
            event.owner.nativeElement.style.borderRight = '';
            event.owner.nativeElement.style.borderLeft = '1px solid red';
            this.renderer.addClass(event.owner.nativeElement, this._dropLeftIndicatorClass);
            this.renderer.removeClass(event.owner.nativeElement, this._dropRightIndicatorClass);
        }
    }

    public onDimDragLeave(event) {
        this.renderer.removeClass(event.owner.nativeElement, this._dropLeftIndicatorClass);
        this.renderer.removeClass(event.owner.nativeElement, this._dropRightIndicatorClass);
        event.owner.nativeElement.style.borderLeft = '';
        event.owner.nativeElement.style.borderRight = '';
        this._dropPos = DropPosition.AfterDropTarget;
    }

    public onAreaDragEnter(event, area, dimension?: PivotDimensionType) {
        const dragId = event.detail.owner.element.nativeElement.parentElement.id;
        const typeMismatch = dimension !== undefined ? this.grid.pivotConfiguration.values.find(x => x.member === dragId) :
            !this.grid.pivotConfiguration.values.find(x => x.member === dragId);
        if (typeMismatch) {
            // cannot drag between dimensions and value
            return;
        }
        const lastElem = area.chipsList.last?.nativeElement;
        if (lastElem) {
            const targetElem = event.detail.originalEvent.target;
            const targetOwner = event.detail.owner.element.nativeElement.parentElement;
            if (targetOwner !== lastElem && targetElem.getBoundingClientRect().x >= lastElem.getBoundingClientRect().x) {
                this.renderer.addClass(area.chipsList.last.nativeElement, this._dropRightIndicatorClass);
                // TODO- remove once classes are added.
                area.chipsList.last.nativeElement.style.borderRight = '1px solid red';
            }
        }
    }
    public onAreaDragLeave(event, area) {
        area.chipsList.toArray().forEach(element => {
            this.renderer.removeClass(element.nativeElement, this._dropRightIndicatorClass);
            element.nativeElement.style.borderRight = '';
        });
    }

    public onValueDrop(event, area) {
        //values can only be reordered
        const currentDim = this.grid.pivotConfiguration.values;
        const dragId = event.dragChip?.id || event.dragData?.chip.id;
        const chipsArray = area.chipsList.toArray();
        const chipIndex = chipsArray.indexOf(event.owner) !== -1 ? chipsArray.indexOf(event.owner) : chipsArray.length;
        const newDim = currentDim.find(x => x.member === dragId);
        if (newDim) {
            const dragChipIndex = chipsArray.indexOf(event.dragChip || event.dragData.chip);
            currentDim.splice(dragChipIndex, 1);
            currentDim.splice(dragChipIndex > chipIndex ? chipIndex : chipIndex - 1, 0, newDim);
            this.grid.setupColumns();
        }
    }

    public onDimDrop(event, area, dimension: PivotDimensionType) {
        const dragId = event.dragChip?.id || event.dragData?.chip.id;
        const currentDim = this.getDimensionsByType(dimension);
        const chipsArray = area.chipsList.toArray();
        const chip = chipsArray.find(x => x.id === dragId);
        const isNewChip = chip === undefined;
        //const chipIndex = chipsArray.indexOf(event.owner) !== -1 ? chipsArray.indexOf(event.owner) : chipsArray.length;
        const chipIndex = currentDim.findIndex(x => x.memberName === event.owner.id) !== -1 ?
            currentDim.findIndex(x => x.memberName === event.owner.id) : currentDim.length;
        const targetIndex = this._dropPos === DropPosition.AfterDropTarget ? chipIndex + 1 : chipIndex;
        if (isNewChip) {
            const allDims = this.grid.pivotConfiguration.rows
                .concat(this.grid.pivotConfiguration.columns)
                .concat(this.grid.pivotConfiguration.filters);
            // chip moved from external collection
            const dims = allDims.filter(x => x && x.memberName === dragId);
            if (dims.length === 0) {
                // you have dragged something that is not a dimension
                return;
            }
            dims.forEach(element => {
                element.enabled = false;
            });

            const currentDimChild = currentDim.find(x => x && x.memberName === dragId);
            if (currentDimChild) {
                currentDimChild.enabled = true;
                const dragChipIndex = currentDim.indexOf(currentDimChild);
                currentDim.splice(dragChipIndex, 1);
                currentDim.splice(dragChipIndex > chipIndex ? targetIndex : targetIndex - 1, 0, currentDimChild);
            } else {
                const newDim = Object.assign({}, dims[0]);
                newDim.enabled = true;
                currentDim.splice(chipIndex, 0, newDim);
            }
            const isDraggedFromColumn = !!this.grid.pivotConfiguration.columns?.find(x => x && x.memberName === dragId);
            if (isDraggedFromColumn) {
                // columns have changed.
                this.grid.setupColumns();
            }
        } else {
            // chip from same collection, reordered.
            const newDim = currentDim.find(x => x.memberName === dragId);
            //const dragChipIndex = chipsArray.indexOf(event.dragChip || event.dragData.chip);
            const dragChipIndex = currentDim.findIndex(x => x.memberName === dragId);
            currentDim.splice(dragChipIndex, 1);
            currentDim.splice(dragChipIndex > chipIndex ? targetIndex : targetIndex - 1, 0, newDim);
        }
        if (dimension === PivotDimensionType.Column) {
            // if columns have changed need to regenerate columns.
            this.grid.setupColumns();
        }
        this.grid.pipeTrigger++;
    }

    protected getDimensionsByType(dimension: PivotDimensionType) {
        switch (dimension) {
            case PivotDimensionType.Row:
                if (!this.grid.pivotConfiguration.rows) {
                    this.grid.pivotConfiguration.rows = [];
                }
                return this.grid.pivotConfiguration.rows;
            case PivotDimensionType.Column:
                if (!this.grid.pivotConfiguration.columns) {
                    this.grid.pivotConfiguration.columns = [];
                }
                return this.grid.pivotConfiguration.columns;
            case PivotDimensionType.Filter:
                if (!this.grid.pivotConfiguration.filters) {
                    this.grid.pivotConfiguration.filters = [];
                }
                return this.grid.pivotConfiguration.filters;
            default:
                return null;
        }
    }

    protected getAggregatorsForValue(value: IPivotValue): IPivotAggregator[] {
        const dataType = value.dataType || this.grid.resolveDataTypes(this.grid.data[0][value.member]);
        switch (dataType) {
            case GridColumnDataType.Number:
            case GridColumnDataType.Currency:
                return IgxPivotNumericAggregate.aggregators();
            case GridColumnDataType.Date:
            case GridColumnDataType.DateTime:
                return IgxPivotDateAggregate.aggregators();
            case GridColumnDataType.Time:
                return IgxPivotTimeAggregate.aggregators();
            default:
                return IgxPivotAggregate.aggregators();
        }
    }

    protected updateDropDown(value: IPivotValue, dropdown: IgxDropDownComponent, chip: IgxChipComponent) {
        this.value = value;
        dropdown.width = chip.nativeElement.clientWidth + 'px';
        this.aggregateList = this.getAggregateList(value);
        dropdown.open(this._subMenuOverlaySettings);
    }
}