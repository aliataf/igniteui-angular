
import { IPivotDimension, IPivotKeys, IPivotValue } from '../grids/pivot-grid/pivot-grid.interface';
import { PivotUtil } from '../grids/pivot-grid/pivot-util';

export interface IPivotDimensionStrategy {
    process(collection: any,
        dimensions: IPivotDimension[],
        values: IPivotValue[],
        pivotKeys?: IPivotKeys): any[];
}

export class NoopPivotDimensionsStrategy implements IPivotDimensionStrategy {
    private static _instance: NoopPivotDimensionsStrategy = null;

    private constructor() {  }

    public static instance() {
        return this._instance || (this._instance = new NoopPivotDimensionsStrategy());
    }

    public process(collection: any[], _: IPivotDimension[], __: IPivotValue[]): any[] {
        return collection;
    }
}


export class PivotRowDimensionsStrategy implements IPivotDimensionStrategy {
    private static _instance: PivotRowDimensionsStrategy = null;

    private constructor() {  }

    public static instance() {
        return this._instance || (this._instance = new PivotRowDimensionsStrategy());
    }

    public process(
            collection: any[],
            rows: IPivotDimension[],
            __: IPivotValue[],
            pivotKeys: IPivotKeys = {aggregations: 'aggregations', records: 'records', children: 'children', level: 'level'}
        ): any[] {
            // build hierarchies - groups and subgroups
            const hierarchies = PivotUtil.getFieldsHierarchy(collection, rows, pivotKeys);
            // generate flat data from the hierarchies
            const data = PivotUtil.flattenHierarchy(hierarchies, collection[0] ?? [], rows, pivotKeys, 0);
            return data;
    }
}

export class PivotColumnDimensionsStrategy implements IPivotDimensionStrategy {
    private static _instance: PivotRowDimensionsStrategy = null;

    private constructor() {  }

    public static instance() {
        return this._instance || (this._instance = new PivotColumnDimensionsStrategy());
    }

    public process(
            collection: any[],
            columns: IPivotDimension[],
            values: IPivotValue[],
            pivotKeys: IPivotKeys = {aggregations: 'aggregations', records: 'records', children: 'children', level: 'level'}
        ): any[] {
            const result = [];
            collection.forEach(hierarchy => {
                // apply aggregations based on the created groups and generate column fields based on the hierarchies
                this.groupColumns(hierarchy, columns, values, pivotKeys);
                if (hierarchy[pivotKeys.children]) {
                    let flatCols = {};
                    PivotUtil.flattenColumnHierarchy(hierarchy[pivotKeys.children], values, pivotKeys).forEach(o => {
                        delete o[pivotKeys.records];
                        flatCols = {...flatCols, ...o};
                    });
                    delete hierarchy[pivotKeys.children]; /* or we can keep it
                    and use when creating the columns in pivot grid instead of recreating it */
                    if (this.isLeaf(hierarchy, pivotKeys)) {
                        delete hierarchy[pivotKeys.records]; /* remove the helper records of the actual records so that
                    expand indicators can be rendered properly */
                    }
                    for (const property in flatCols) {
                        if (flatCols.hasOwnProperty(property)) {
                            hierarchy[property] = flatCols[property];
                        }
                    }
                    result.push(hierarchy);
                }
            });
            return result;
    }

    private groupColumns(hierarchy, columns, values, pivotKeys) {
        const children = hierarchy[pivotKeys.children];
        if (children) {
            this.groupColumns(children, columns, values, pivotKeys);
        } else if (hierarchy[pivotKeys.records]) {
            const leafRecords = this.getLeafs(hierarchy[pivotKeys.records], pivotKeys);
            hierarchy[pivotKeys.children] = PivotUtil.getFieldsHierarchy(leafRecords, columns, pivotKeys);
            PivotUtil.applyAggregations(hierarchy[pivotKeys.children], values, pivotKeys);
        }
    }

    private getLeafs(records, pivotKeys) {
        let leafs = [];
        for (const rec of records) {
            if (rec[pivotKeys.records]) {
                leafs = leafs.concat(this.getLeafs(rec[pivotKeys.records], pivotKeys));
            } else {
                leafs.push(rec);
            }
        }
        return leafs;
    }

    private isLeaf(record, pivotKeys) {
        return !(record[pivotKeys.records] && record[pivotKeys.records].some(r => r[pivotKeys.records]));
    }
}
