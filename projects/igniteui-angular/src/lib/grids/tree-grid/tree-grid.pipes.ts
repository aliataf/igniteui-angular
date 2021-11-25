import { Inject, Pipe, PipeTransform } from '@angular/core';
import { cloneArray, cloneHierarchicalArray } from '../../core/utils';
import { DataUtil } from '../../data-operations/data-util';
import { ITreeGridRecord } from './tree-grid.interfaces';
import { GridType, IGX_GRID_BASE } from '../common/grid.interface';
import { GridPagingMode } from '../common/enums';
import { TransactionType } from '../../services/public_api';
import { IgxAddRow } from '../common/crud.service';
import { ISortingExpression } from '../../data-operations/sorting-strategy';
import { IGridSortingStrategy } from '../common/strategy';

/**
 * @hidden
 */
@Pipe({ name: 'treeGridHierarchizing' })
export class IgxTreeGridHierarchizingPipe implements PipeTransform {

    constructor(@Inject(IGX_GRID_BASE) private grid: GridType) { }

    public transform(collection: any[], primaryKey: string, foreignKey: string, childDataKey: string, _: number): ITreeGridRecord[] {
        let hierarchicalRecords: ITreeGridRecord[] = [];
        const treeGridRecordsMap = new Map<any, ITreeGridRecord>();
        const flatData: any[] = [];

        if (primaryKey && foreignKey) {
            hierarchicalRecords = this.hierarchizeFlatData(collection, primaryKey, foreignKey, treeGridRecordsMap, flatData);
        } else if (childDataKey) {
            hierarchicalRecords = this.hierarchizeRecursive(collection, primaryKey, childDataKey, undefined,
                flatData, 0, treeGridRecordsMap);
        }

        this.grid.flatData = this.grid.transactions.enabled ?
            flatData.filter(rec => {
                const state = this.grid.transactions.getState(this.getRowID(primaryKey, rec));
                return !state || state.type !== TransactionType.ADD;
            }) : flatData;
        this.grid.records = treeGridRecordsMap;
        this.grid.rootRecords = hierarchicalRecords;
        return hierarchicalRecords;
    }

    private getRowID(primaryKey: any, rowData: any) {
        return primaryKey ? rowData[primaryKey] : rowData;
    }

    private hierarchizeFlatData(collection: any[], primaryKey: string, foreignKey: string,
        map: Map<any, ITreeGridRecord>, flatData: any[]):
        ITreeGridRecord[] {
        const result: ITreeGridRecord[] = [];
        const missingParentRecords: ITreeGridRecord[] = [];
        collection.forEach(row => {
            const record: ITreeGridRecord = {
                key: this.getRowID(primaryKey, row),
                data: row,
                children: []
            };
            const parent = map.get(row[foreignKey]);
            if (parent) {
                record.parent = parent;
                parent.children.push(record);
            } else {
                missingParentRecords.push(record);
            }

            map.set(row[primaryKey], record);
        });

        missingParentRecords.forEach(record => {
            const parent = map.get(record.data[foreignKey]);
            if (parent) {
                record.parent = parent;
                parent.children.push(record);
            } else {
                result.push(record);
            }
        });

        this.setIndentationLevels(result, 0, flatData);

        return result;
    }

    private setIndentationLevels(collection: ITreeGridRecord[], indentationLevel: number, flatData: any[]) {
        for (const record of collection) {
            record.level = indentationLevel;
            record.expanded = this.grid.gridAPI.get_row_expansion_state(record);
            flatData.push(record.data);

            if (record.children && record.children.length > 0) {
                this.setIndentationLevels(record.children, indentationLevel + 1, flatData);
            }
        }
    }

    private hierarchizeRecursive(collection: any[], primaryKey: string, childDataKey: string,
        parent: ITreeGridRecord, flatData: any[], indentationLevel: number, map: Map<any, ITreeGridRecord>): ITreeGridRecord[] {
        const result: ITreeGridRecord[] = [];

        for (const item of collection) {
            const record: ITreeGridRecord = {
                key: this.getRowID(primaryKey, item),
                data: item,
                parent,
                level: indentationLevel
            };
            record.expanded = this.grid.gridAPI.get_row_expansion_state(record);
            flatData.push(item);
            map.set(record.key, record);
            record.children = item[childDataKey] ?
                this.hierarchizeRecursive(item[childDataKey], primaryKey, childDataKey, record, flatData, indentationLevel + 1, map) :
                undefined;
            result.push(record);
        }

        return result;
    }
}

/**
 * @hidden
 */
@Pipe({ name: 'treeGridFlattening' })
export class IgxTreeGridFlatteningPipe implements PipeTransform {

    constructor(@Inject(IGX_GRID_BASE) private grid: GridType) { }

    public transform(collection: ITreeGridRecord[],
        expandedLevels: number, expandedStates: Map<any, boolean>, _: number): any[] {

        const data: ITreeGridRecord[] = [];

        this.grid.processedRootRecords = collection;
        this.grid.processedRecords = new Map<any, ITreeGridRecord>();

        this.getFlatDataRecursive(collection, data, expandedLevels, expandedStates, true);

        this.grid.processedExpandedFlatData = data.map(r => r.data);

        return data;
    }

    private getFlatDataRecursive(collection: ITreeGridRecord[], data: ITreeGridRecord[],
        expandedLevels: number, expandedStates: Map<any, boolean>, parentExpanded: boolean) {
        if (!collection || !collection.length) {
            return;
        }

        for (const hierarchicalRecord of collection) {
            if (parentExpanded) {
                data.push(hierarchicalRecord);
            }

            hierarchicalRecord.expanded = this.grid.gridAPI.get_row_expansion_state(hierarchicalRecord);

            this.updateNonProcessedRecordExpansion(this.grid, hierarchicalRecord);

            this.grid.processedRecords.set(hierarchicalRecord.key, hierarchicalRecord);

            this.getFlatDataRecursive(hierarchicalRecord.children, data, expandedLevels,
                expandedStates, parentExpanded && hierarchicalRecord.expanded);
        }
    }

    private updateNonProcessedRecordExpansion(grid: GridType, record: ITreeGridRecord) {
        const rec = grid.records.get(record.key);
        rec.expanded = record.expanded;
    }
}

/** @hidden */
@Pipe({ name: 'treeGridSorting' })
export class IgxTreeGridSortingPipe implements PipeTransform {

    constructor(@Inject(IGX_GRID_BASE) private grid: GridType) { }

    public transform(
        hierarchicalData: ITreeGridRecord[],
        expressions: ISortingExpression[],
        sorting: IGridSortingStrategy,
        _: number,
        pinned?: boolean): ITreeGridRecord[] {

        let result: ITreeGridRecord[];
        if (!expressions.length) {
            result = hierarchicalData;
        } else {
            result = DataUtil.treeGridSort(hierarchicalData, expressions, sorting, null, this.grid);
        }

        const filteredSortedData = [];
        this.flattenTreeGridRecords(result, filteredSortedData);
        this.grid.setFilteredSortedData(filteredSortedData, pinned);

        return result;
    }

    private flattenTreeGridRecords(records: ITreeGridRecord[], flatData: any[]) {
        if (records && records.length) {
            for (const record of records) {
                flatData.push(record.data);
                this.flattenTreeGridRecords(record.children, flatData);
            }
        }
    }
}

/** @hidden */
@Pipe({ name: 'treeGridPaging' })
export class IgxTreeGridPagingPipe implements PipeTransform {

    constructor(@Inject(IGX_GRID_BASE) private grid: GridType) { }

    public transform(collection: ITreeGridRecord[], page = 0, perPage = 15, _: number): ITreeGridRecord[] {
        if (!this.grid.paginator || this.grid.pagingMode !== GridPagingMode.Local) {
            return collection;
        }

        const len = this.grid._totalRecords >= 0 ? this.grid._totalRecords : collection.length;
        const totalPages = Math.ceil(len / perPage);

        const state = {
            index: (totalPages > 0 && page >= totalPages) ? totalPages - 1 : page,
            recordsPerPage: perPage
        };

        const result: ITreeGridRecord[] = DataUtil.page(cloneArray(collection), state, len);
        this.grid.pagingState = state;
        this.grid.paginator.page = state.index;

        return result;
    }
}
/** @hidden */
@Pipe({ name: 'treeGridTransaction' })
export class IgxTreeGridTransactionPipe implements PipeTransform {


    constructor(@Inject(IGX_GRID_BASE) private grid: GridType) { }

    public transform(collection: any[], _: number): any[] {

        if (this.grid.transactions.enabled) {
            const aggregatedChanges = this.grid.transactions.getAggregatedChanges(true);
            if (aggregatedChanges.length > 0) {
                const primaryKey = this.grid.primaryKey;
                if (!primaryKey) {
                    return collection;
                }

                const foreignKey = this.grid.foreignKey;
                const childDataKey = this.grid.childDataKey;

                if (foreignKey) {
                    const flatDataClone = cloneArray(collection);
                    return DataUtil.mergeTransactions(
                        flatDataClone,
                        aggregatedChanges,
                        this.grid.primaryKey);
                } else if (childDataKey) {
                    const hierarchicalDataClone = cloneHierarchicalArray(collection, childDataKey);
                    return DataUtil.mergeHierarchicalTransactions(
                        hierarchicalDataClone,
                        aggregatedChanges,
                        childDataKey,
                        this.grid.primaryKey);
                }
            }
        }
        return collection;
    }
}

/**
 * This pipe maps the original record to ITreeGridRecord format used in TreeGrid.
 */
@Pipe({ name: 'treeGridNormalizeRecord' })
export class IgxTreeGridNormalizeRecordsPipe implements PipeTransform {

    constructor(@Inject(IGX_GRID_BASE) private grid: GridType) { }

    public transform(_: any[], __: number): any[] {
        const primaryKey = this.grid.primaryKey;
        // using flattened data because origin data may be hierarchical.
        const flatData = this.grid.flatData;
        const res = flatData.map(rec =>
        ({
            rowID: this.grid.primaryKey ? rec[primaryKey] : rec,
            data: rec,
            level: 0,
            children: []
        }));
        return res;
    }
}

@Pipe({ name: 'treeGridAddRow' })
export class IgxTreeGridAddRowPipe implements PipeTransform {

    constructor(@Inject(IGX_GRID_BASE) private grid: GridType) { }

    public transform(collection: any, isPinned = false, _pipeTrigger: number) {
        if (!this.grid.rowEditable || !this.grid.crudService.row || this.grid.crudService.row.getClassName() !== IgxAddRow.name ||
            !this.grid.gridAPI.crudService.addRowParent || isPinned !== this.grid.gridAPI.crudService.addRowParent.isPinned) {
            return collection;
        }
        const copy = collection.slice(0);
        const rec = (this.grid.crudService.row as IgxAddRow).recordRef;
        copy.splice(this.grid.crudService.row.index, 0, rec);
        this.grid.records.set(rec.key, rec);
        return copy;
    }
}
