import { fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxPivotGridModule } from 'igniteui-angular';
import { configureTestSuite } from '../../test-utils/configure-suite';
import { GridFunctions } from '../../test-utils/grid-functions.spec';
import { IgxPivotGridTestBaseComponent, IgxTotalSaleAggregate } from '../../test-utils/pivot-grid-samples.spec';
import { UIInteractions } from '../../test-utils/ui-interactions.spec';
const CSS_CLASS_DROP_DOWN_BASE = 'igx-drop-down';
const CSS_CLASS_LIST = 'igx-drop-down__list';
const CSS_CLASS_ITEM = 'igx-drop-down__item';

describe('Basic IgxPivotGrid #pivotGrid', () => {
    let fixture;
    configureTestSuite((() => {
        TestBed.configureTestingModule({
            declarations: [
                IgxPivotGridTestBaseComponent
            ],
            imports: [
                NoopAnimationsModule, IgxPivotGridModule]
        });
    }));

    beforeEach(fakeAsync(() => {
        fixture = TestBed.createComponent(IgxPivotGridTestBaseComponent);
        fixture.detectChanges();
    }));

    it('should apply formatter and dataType from measures', () => {
        fixture.detectChanges();
        const pivotGrid = fixture.componentInstance.pivotGrid;
        const actualFormatterValue = pivotGrid.rowList.first.cells.first.title;
        expect(actualFormatterValue).toEqual('774$');
        const actualDataTypeValue = pivotGrid.rowList.first.cells.last.title;
        expect(actualDataTypeValue).toEqual('$71.89');
    });

    it('should apply css class to cells from measures', () => {
        fixture.detectChanges();
        const pivotGrid = fixture.componentInstance.pivotGrid;
        const cells = pivotGrid.rowList.first.cells;
        expect(cells.first.nativeElement.classList).toContain('test');
        expect(cells.last.nativeElement.classList).not.toContain('test');
    });

    it('should remove row dimensions from chip', () => {
        const pivotGrid = fixture.componentInstance.pivotGrid;
        pivotGrid.pivotConfiguration.rows.push({
            memberName: 'SellerName',
            enabled: true
        });
        pivotGrid.pipeTrigger++;
        fixture.detectChanges();
        expect(pivotGrid.rowDimensions.length).toBe(2);
        expect(pivotGrid.rowList.first.data['SellerName']).not.toBeUndefined();

        const headerRow = fixture.nativeElement.querySelector('igx-pivot-header-row');
        const rowChip = headerRow.querySelector('igx-chip[id="SellerName"]');
        const removeIcon = rowChip.querySelectorAll('igx-icon')[3];
        removeIcon.click();
        fixture.detectChanges();
        expect(pivotGrid.pivotConfiguration.rows[1].enabled).toBeFalse();
        expect(pivotGrid.rowDimensions.length).toBe(1);
        expect(pivotGrid.rowList.first.data['SellerName']).toBeUndefined();

    });

    it('should remove column dimensions from chip', () => {
        const pivotGrid = fixture.componentInstance.pivotGrid;
        expect(pivotGrid.columns.length).toBe(9);
        pivotGrid.pivotConfiguration.columns.push({
            memberName: 'SellerName',
            enabled: true
        });
        pivotGrid.pipeTrigger++;
        pivotGrid.setupColumns();
        fixture.detectChanges();
        expect(pivotGrid.columnDimensions.length).toBe(2);
        expect(pivotGrid.columns.length).not.toBe(9);

        const headerRow = fixture.nativeElement.querySelector('igx-pivot-header-row');
        const rowChip = headerRow.querySelector('igx-chip[id="SellerName"]');
        const removeIcon = rowChip.querySelectorAll('igx-icon')[3];
        removeIcon.click();
        fixture.detectChanges();
        expect(pivotGrid.pivotConfiguration.columns[1].enabled).toBeFalse();
        expect(pivotGrid.columnDimensions.length).toBe(1);
        expect(pivotGrid.columns.length).toBe(9);
    });

    it('should remove value from chip', () => {
        const pivotGrid = fixture.componentInstance.pivotGrid;
        expect(pivotGrid.columns.length).toBe(9);
        expect(pivotGrid.values.length).toBe(2);

        const headerRow = fixture.nativeElement.querySelector('igx-pivot-header-row');
        const rowChip = headerRow.querySelector('igx-chip[id="UnitsSold"]');
        const removeIcon = rowChip.querySelectorAll('igx-icon')[3];
        removeIcon.click();
        fixture.detectChanges();
        expect(pivotGrid.pivotConfiguration.values[0].enabled).toBeFalse();
        expect(pivotGrid.values.length).toBe(1);
        expect(pivotGrid.columns.length).not.toBe(9);
    });

    describe('IgxPivotGrid Features #pivotGrid', () => {
        it('should show excel style filtering via dimension chip.', () => {
            const excelMenu = GridFunctions.getExcelStyleFilteringComponent(fixture, 'igx-pivot-grid');
            const headerRow = fixture.nativeElement.querySelector('igx-pivot-header-row');
            const rowChip = headerRow.querySelector('igx-chip[id="All"]');
            const filterIcon = rowChip.querySelectorAll('igx-icon')[2];

            expect(excelMenu.parentElement.parentElement.attributes.hidden).not.toBeUndefined();
            filterIcon.click();
            fixture.detectChanges();
            const esfSearch = GridFunctions.getExcelFilteringSearchComponent(fixture, excelMenu, 'igx-pivot-grid');
            const checkBoxes = esfSearch.querySelectorAll('igx-checkbox');
            // should show and should display correct checkboxes.
            expect(excelMenu.parentElement.parentElement.attributes.hidden).toBeUndefined();
            expect((checkBoxes[0].querySelector('.igx-checkbox__label') as HTMLElement).innerText).toEqual('Select All');
            expect((checkBoxes[1].querySelector('.igx-checkbox__label') as HTMLElement).innerText).toEqual('Accessories');
            expect((checkBoxes[2].querySelector('.igx-checkbox__label') as HTMLElement).innerText).toEqual('Bikes');
            expect((checkBoxes[3].querySelector('.igx-checkbox__label') as HTMLElement).innerText).toEqual('Clothing');
            expect((checkBoxes[4].querySelector('.igx-checkbox__label') as HTMLElement).innerText).toEqual('Components');
        });

        it('should filter rows via excel style filtering dimension chip.', () => {
            const pivotGrid = fixture.componentInstance.pivotGrid;
            const headerRow = fixture.nativeElement.querySelector('igx-pivot-header-row');
            const rowChip = headerRow.querySelector('igx-chip[id="All"]');
            const filterIcon = rowChip.querySelectorAll('igx-icon')[2];
            filterIcon.click();
            fixture.detectChanges();

            const excelMenu = GridFunctions.getExcelStyleFilteringComponent(fixture, 'igx-pivot-grid');
            const checkboxes: any[] = Array.from(GridFunctions.getExcelStyleFilteringCheckboxes(fixture, excelMenu, 'igx-pivot-grid'));

            // uncheck Accessories
            checkboxes[1].click();
            fixture.detectChanges();

            // uncheck Bikes
            checkboxes[2].click();
            fixture.detectChanges();

            // Click 'apply' button to apply filter.
            GridFunctions.clickApplyExcelStyleFiltering(fixture, excelMenu, 'igx-pivot-grid');
            fixture.detectChanges();

            // check rows
            const rows = pivotGrid.rowList.toArray();
            expect(rows.length).toBe(3);
            const expectedHeaders = ['All', 'Clothing', 'Components'];
            const rowDimensionHeaders = rows.map(x => x.rowDimension).flat().map(x => x.header);
            expect(rowDimensionHeaders).toEqual(expectedHeaders);
        });

        it('should filter columns via excel style filtering dimension chip.', () => {
            const pivotGrid = fixture.componentInstance.pivotGrid;
            const headerRow = fixture.nativeElement.querySelector('igx-pivot-header-row');
            const rowChip = headerRow.querySelector('igx-chip[id="Country"]');
            const filterIcon = rowChip.querySelectorAll('igx-icon')[2];
            filterIcon.click();
            fixture.detectChanges();
            const excelMenu = GridFunctions.getExcelStyleFilteringComponent(fixture, 'igx-pivot-grid');
            const checkboxes: any[] = Array.from(GridFunctions.getExcelStyleFilteringCheckboxes(fixture, excelMenu, 'igx-pivot-grid'));

            // uncheck Bulgaria
            checkboxes[1].click();
            fixture.detectChanges();

            // uncheck Uruguay
            checkboxes[2].click();
            fixture.detectChanges();


            // Click 'apply' button to apply filter.
            GridFunctions.clickApplyExcelStyleFiltering(fixture, excelMenu, 'igx-pivot-grid');
            fixture.detectChanges();

            // check columns
            const colHeaders = pivotGrid.columns.filter(x => x.level === 0).map(x => x.header);
            const expected = ['USA'];
            expect(colHeaders).toEqual(expected);
        });

        it('should apply sorting for dimension via row chip', () => {
            fixture.detectChanges();
            const pivotGrid = fixture.componentInstance.pivotGrid;
            const headerRow = fixture.nativeElement.querySelector('igx-pivot-header-row');
            const rowChip = headerRow.querySelector('igx-chip[id="All"]');
            rowChip.click();
            fixture.detectChanges();
            let rows = pivotGrid.rowList.toArray();
            let expectedOrder = ['All', 'Accessories', 'Bikes', 'Clothing', 'Components'];
            let rowDimensionHeaders = rows.map(x => x.rowDimension).flat().map(x => x.header);
            expect(rowDimensionHeaders).toEqual(expectedOrder);

            rowChip.click();
            fixture.detectChanges();
            rows = pivotGrid.rowList.toArray();
            expectedOrder = ['All', 'Components', 'Clothing', 'Bikes', 'Accessories'];
            rowDimensionHeaders = rows.map(x => x.rowDimension).flat().map(x => x.header);
            expect(rowDimensionHeaders).toEqual(expectedOrder);
        });

        it('should apply sorting for dimension via column chip', () => {
            const pivotGrid = fixture.componentInstance.pivotGrid;
            const headerRow = fixture.nativeElement.querySelector('igx-pivot-header-row');
            const colChip = headerRow.querySelector('igx-chip[id="Country"]');

            // sort
            colChip.click();
            fixture.detectChanges();

            let colHeaders = pivotGrid.columns.filter(x => x.level === 0).map(x => x.header);
            let expected = ['Bulgaria', 'USA', 'Uruguay'];
            expect(colHeaders).toEqual(expected);

            // sort
            colChip.click();
            fixture.detectChanges();

            colHeaders = pivotGrid.columns.filter(x => x.level === 0).map(x => x.header);
            expected = ['Uruguay', 'USA', 'Bulgaria'];
            expect(colHeaders).toEqual(expected);
        });

        it('should sort on column for single row dimension.', () => {
            const pivotGrid = fixture.componentInstance.pivotGrid;
            const headerCell = GridFunctions.getColumnHeader('USA-UnitsSold', fixture);

            // sort asc
            GridFunctions.clickHeaderSortIcon(headerCell);
            fixture.detectChanges();
            expect(pivotGrid.sortingExpressions.length).toBe(1);
            let expectedOrder = [829, undefined, 240, 293, 296];
            let columnValues = pivotGrid.dataView.map(x => x['USA-UnitsSold']);
            expect(columnValues).toEqual(expectedOrder);

            // sort desc
            GridFunctions.clickHeaderSortIcon(headerCell);
            fixture.detectChanges();
            expect(pivotGrid.sortingExpressions.length).toBe(1);
            expectedOrder = [829, 296, 293, 240, undefined];
            columnValues = pivotGrid.dataView.map(x => x['USA-UnitsSold']);
            expect(columnValues).toEqual(expectedOrder);

            // remove sort
            GridFunctions.clickHeaderSortIcon(headerCell);
            fixture.detectChanges();
            expect(pivotGrid.sortingExpressions.length).toBe(0);
            expectedOrder = [829, 293, undefined, 296, 240];
            columnValues = pivotGrid.dataView.map(x => x['USA-UnitsSold']);
            expect(columnValues).toEqual(expectedOrder);
        });

        // xit-ing because of https://github.com/IgniteUI/igniteui-angular/issues/10546
        xit('should sort on column for all sibling dimensions.', () => {
            const pivotGrid = fixture.componentInstance.pivotGrid;
            pivotGrid.height = '1500px';
            pivotGrid.pivotConfiguration.rows = [
                {
                    memberName: 'ProductCategory',
                    enabled: true
                },
                {
                    memberName: 'SellerName',
                    enabled: true
                }
            ];
            // add a bit more data to sort.
            pivotGrid.data = [
                {
                    ProductCategory: 'Clothing', UnitPrice: 12.81, SellerName: 'Stanley',
                    Country: 'Bulgaria', Date: '01/01/2021', UnitsSold: 282
                },
                {
                    ProductCategory: 'Clothing', UnitPrice: 49.57, SellerName: 'Elisa',
                    Country: 'USA', Date: '01/05/2019', UnitsSold: 296
                },
                {
                    ProductCategory: 'Bikes', UnitPrice: 3.56, SellerName: 'Lydia',
                    Country: 'Uruguay', Date: '01/06/2020', UnitsSold: 68
                },
                {
                    ProductCategory: 'Accessories', UnitPrice: 85.58, SellerName: 'David',
                    Country: 'USA', Date: '04/07/2021', UnitsSold: 293
                },
                {
                    ProductCategory: 'Components', UnitPrice: 18.13, SellerName: 'John',
                    Country: 'USA', Date: '12/08/2021', UnitsSold: 240
                },
                {
                    ProductCategory: 'Clothing', UnitPrice: 68.33, SellerName: 'Larry',
                    Country: 'Uruguay', Date: '05/12/2020', UnitsSold: 456
                },
                {
                    ProductCategory: 'Clothing', UnitPrice: 16.05, SellerName: 'Walter',
                    Country: 'Bulgaria', Date: '02/19/2020', UnitsSold: 492
                },
                {
                    ProductCategory: 'Clothing', UnitPrice: 16.05, SellerName: 'Elisa',
                    Country: 'Bulgaria', Date: '02/19/2020', UnitsSold: 267
                },
                {
                    ProductCategory: 'Clothing', UnitPrice: 16.05, SellerName: 'Larry',
                    Country: 'Bulgaria', Date: '02/19/2020', UnitsSold: 100
                }
            ];
            pivotGrid.pipeTrigger++;
            fixture.detectChanges();
            const headerCell = GridFunctions.getColumnHeader('Bulgaria-UnitsSold', fixture);
            // sort asc
            GridFunctions.clickHeaderSortIcon(headerCell);
            fixture.detectChanges();
            expect(pivotGrid.sortingExpressions.length).toBe(1);
            let expectedOrder = [undefined, undefined, undefined, 100, 267, 282, 492];
            let columnValues = pivotGrid.dataView.map(x => x['Bulgaria-UnitsSold']);
            expect(columnValues).toEqual(expectedOrder);

            // sort desc
            GridFunctions.clickHeaderSortIcon(headerCell);
            fixture.detectChanges();
            expect(pivotGrid.sortingExpressions.length).toBe(1);
            expectedOrder = [492, 282, 267, 100, undefined, undefined, undefined];
            columnValues = pivotGrid.dataView.map(x => x['Bulgaria-UnitsSold']);
            expect(columnValues).toEqual(expectedOrder);
        });

        it('should allow changing default aggregation via value chip drop-down.', () => {
            fixture.detectChanges();
            const pivotGrid = fixture.componentInstance.pivotGrid;
            const headerRow = fixture.nativeElement.querySelector('igx-pivot-header-row');
            const valueChip = headerRow.querySelector('igx-chip[id="UnitsSold"]');
            let content = valueChip.querySelector('.igx-chip__content');
            expect(content.textContent.trim()).toBe('SUM(UnitsSold)');

            const aggregatesIcon = valueChip.querySelectorAll('igx-icon')[1];
            aggregatesIcon.click();
            fixture.detectChanges();
            const items = fixture.debugElement.queryAll(By.css(`.${CSS_CLASS_ITEM}`));
            expect(items.length).toBe(5);
            // select count
            items[0].triggerEventHandler('click', UIInteractions.getMouseEvent('click'));
            fixture.detectChanges();

            // check chip and row
            content = valueChip.querySelector('.igx-chip__content');
            expect(content.textContent.trim()).toBe('COUNT(UnitsSold)');
            expect(pivotGrid.gridAPI.get_cell_by_index(0, 'Bulgaria-UnitsSold').value).toBe(2);
            expect(pivotGrid.gridAPI.get_cell_by_index(0, 'USA-UnitsSold').value).toBe(3);
            expect(pivotGrid.gridAPI.get_cell_by_index(0, 'Uruguay-UnitsSold').value).toBe(2);

        });
        it('should allow showing custom aggregations via pivot configuration.', () => {
            const pivotGrid = fixture.componentInstance.pivotGrid;
            pivotGrid.pivotConfiguration.values = [];
            pivotGrid.pivotConfiguration.values.push({
                member: 'AmountOfSale',
                displayName: 'Amount of Sale',
                aggregate: {
                    key: 'SUM',
                    aggregator: IgxTotalSaleAggregate.totalSale,
                    label: 'Sum of Sale'
                },
                aggregateList: [{
                    key: 'SUM',
                    aggregator: IgxTotalSaleAggregate.totalSale,
                    label: 'Sum of Sale'
                }, {
                    key: 'MIN',
                    aggregator: IgxTotalSaleAggregate.totalMin,
                    label: 'Minimum of Sale'
                }, {
                    key: 'MAX',
                    aggregator: IgxTotalSaleAggregate.totalMax,
                    label: 'Maximum of Sale'
                }],
                enabled: true
            });
            pivotGrid.pipeTrigger++;
            pivotGrid.setupColumns();
            fixture.detectChanges();
            const headerRow = fixture.nativeElement.querySelector('igx-pivot-header-row');
            const valueChip = headerRow.querySelector('igx-chip[id="AmountOfSale"]');
            let content = valueChip.querySelector('.igx-chip__content');
            expect(content.textContent.trim()).toBe('SUM(Amount of Sale)');

            const aggregatesIcon = valueChip.querySelectorAll('igx-icon')[1];
            aggregatesIcon.click();
            fixture.detectChanges();

            const items = fixture.debugElement.queryAll(By.css(`.${CSS_CLASS_ITEM}`));
            expect(items.length).toBe(3);
            // select min
            items[1].triggerEventHandler('click', UIInteractions.getMouseEvent('click'));
            fixture.detectChanges();
            // check chip and row values
            content = valueChip.querySelector('.igx-chip__content');
            expect(content.textContent.trim()).toBe('MIN(Amount of Sale)');
            expect(pivotGrid.gridAPI.get_cell_by_index(0, 'Bulgaria').value).toBe(3612.42);
            expect(pivotGrid.gridAPI.get_cell_by_index(0, 'USA').value).toBe(0);
            expect(pivotGrid.gridAPI.get_cell_by_index(0, 'Uruguay').value).toBe(242.08);
        });
    });
});