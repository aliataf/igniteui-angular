import { Injectable } from '@angular/core';
import { JSZipFiles } from './jszip-helper.spec';
import { IFileContent } from './jszip-verification-wrapper.spec';

@Injectable()
export class ExportTestDataService {

    /* eslint-disable  max-len */
    private _differentTypesData = [
        { Number: 1, String: '1', Boolean: true, Date: new Date(2018, 3, 3) },
        { Number: 2, String: '2', Boolean: false, Date: new Date(2018, 5, 6) },
        { Number: 3, String: '3', Boolean: true, Date: new Date(2018, 9, 22) }
    ];

    private _contactsData = [{
        name: 'Terrance Orta',
        phone: '770-504-2217'
    }, {
        name: 'Richard Mahoney LongerName',
        phone: ''
    }, {
        name: 'Donna Price',
        phone: '859-496-2817'
    }, {
        name: '',
        phone: '901-747-3428'
    }, {
        name: 'Dorothy H. Spencer',
        phone: '573-394-9254'
    }];

    private _contactsFunkyData = [{
        name: 'Terrance Mc\'Orta',
        phone: '(+359)770-504-2217 | 2218'
    }, {
        name: 'Richard Mahoney /LongerName/',
        phone: ''
    }, {
        name: 'Donna, \/; Price',
        phone: '859 496 28**'
    }, {
        name: '\r\n',
        phone: '901-747-3428'
    }, {
        name: 'Dorothy "H." Spencer',
        phone: '573-394-9254[fax]'
    }, {
        name: 'Иван Иванов (1,2)',
        phone: '№ 573-394-9254'
    }];

    private _contactsPartial = [
        {
            name: 'Terrance Orta',
            phone: '770-504-2217'
        }, {
            name: 'Richard Mahoney LongerName'
        }, {
            phone: '780-555-1331'
        }
    ];

    private _noHeadersStringData = [
        'Terrance Orta',
        'Richard Mahoney LongerName',
        'Donna Price',
        'Lisa Landers',
        'Dorothy H. Spencer'
    ];

    private _noHeadersNumberData = [
        10,
        20,
        30
    ];

    private _noHeadersDateTime = [
        new Date('2018'),
        new Date(2018, 3, 23),
        new Date(30),
        new Date('2018/03/23')
    ];

    private _noHeadersObjectData = [
        new ValueData('1'),
        new ValueData('2'),
        new ValueData('3')
    ];

    private _emptyObjectData = [
        {},
        {},
        {}
    ];

    private _simpleGridData = [
        { ID: 1, Name: 'Casey Houston', JobTitle: 'Vice President' },
        { ID: 2, Name: 'Gilberto Todd', JobTitle: 'Director' },
        { ID: 3, Name: 'Tanya Bennett', JobTitle: 'Director' },
        { ID: 4, Name: 'Jack Simon', JobTitle: 'Software Developer' },
        { ID: 5, Name: 'Celia Martinez', JobTitle: 'Senior Software Developer' },
        { ID: 6, Name: 'Erma Walsh', JobTitle: 'CEO' },
        { ID: 7, Name: 'Debra Morton', JobTitle: 'Associate Software Developer' },
        { ID: 8, Name: 'Erika Wells', JobTitle: 'Software Development Team Lead' },
        { ID: 9, Name: 'Leslie Hansen', JobTitle: 'Associate Software Developer' },
        { ID: 10, Name: 'Eduardo Ramirez', JobTitle: 'Manager' }
    ];

    private _simpleGridDataFull = [
        { ID: 1, Name: 'Casey Houston', JobTitle: 'Vice President', HireDate: '2017-06-19T11:43:07.714Z' },
        { ID: 2, Name: 'Gilberto Todd', JobTitle: 'Director', HireDate: '2015-12-18T11:23:17.714Z' },
        { ID: 3, Name: 'Tanya Bennett', JobTitle: 'Director', HireDate: '2005-11-18T11:23:17.714Z' },
        { ID: 4, Name: 'Jack Simon', JobTitle: 'Software Developer', HireDate: '2008-12-18T11:23:17.714Z' },
        { ID: 5, Name: 'Celia Martinez', JobTitle: 'Senior Software Developer', HireDate: '2007-12-19T11:23:17.714Z' },
        { ID: 6, Name: 'Erma Walsh', JobTitle: 'CEO', HireDate: '2016-12-18T11:23:17.714Z' },
        { ID: 7, Name: 'Debra Morton', JobTitle: 'Associate Software Developer', HireDate: '2005-11-19T11:23:17.714Z' },
        { ID: 8, Name: 'Erika Wells', JobTitle: 'Software Development Team Lead', HireDate: '2005-10-14T11:23:17.714Z' },
        { ID: 9, Name: 'Leslie Hansen', JobTitle: 'Associate Software Developer', HireDate: '2013-10-10T11:23:17.714Z' },
        { ID: 10, Name: 'Eduardo Ramirez', JobTitle: 'Manager', HireDate: '2011-11-28T11:23:17.714Z' }
    ];

    private _personJobHoursDataPerformance = [
        { ID: 1, Name: 'Casey Houston', JobTitle: 'Vice President', WorkingHours: 4, HireDate: '2017-06-19T11:43:07.714Z', Performance:
            [
                {Points: 3, Week: 1},
                {Points: 6, Week: 2},
                {Points: 1, Week: 3},
                {Points: 12, Week: 4},
            ]
        },
        { ID: 2, Name: 'Gilberto Todd', JobTitle: 'Director', WorkingHours: 6, HireDate: '2015-12-18T11:23:17.714Z', Performance:
            [
                {Points: 8, Week: 1},
                {Points: 7, Week: 2},
                {Points: 4, Week: 3},
                {Points: 9, Week: 4},
            ]
        },
        { ID: 3, Name: 'Tanya Bennett', JobTitle: 'Director', WorkingHours: 8, HireDate: '2005-11-18T11:23:17.714Z', Performance:
            [
                {Points: 1, Week: 1},
                {Points: 3, Week: 2},
                {Points: 14, Week: 3},
                {Points: 29, Week: 4},
            ]
        }
    ];
    constructor() { }

    public get differentTypesData() {
        return this._differentTypesData;
    }

    public get contactsData() {
        return this._contactsData;
    }
    public get contactsPartialData() {
        return this._contactsPartial;
    }
    public get contactsFunkyData() {
        return this._contactsFunkyData;
    }
    public get emptyObjectData() {
        return this._emptyObjectData;
    }

    public get noHeadersObjectData() {
        return this._noHeadersObjectData;
    }

    public get noHeadersStringData() {
        return this._noHeadersStringData;
    }
    public get noHeadersNumberData() {
        return this._noHeadersNumberData;
    }
    public get noHeadersDateTimeData() {
        return this._noHeadersDateTime;
    }

    public get simpleGridData() {
        return this._simpleGridData;
    }

    public get simpleGridDataFull() {
        return this._simpleGridDataFull;
    }

    public get personJobHoursDataPerformance() {
        return this._personJobHoursDataPerformance;
    }

    public getContactsFunkyData(delimiter) {
        return [{
            name: 'Terrance Mc\'Orta',
            phone: '(+359)770-504-2217 | 2218'
        }, {
            name: 'Richard Mahoney /LongerName/',
            phone: ''
        }, {
            name: 'Donna' + delimiter + ' \/; Price',
            phone: '859 496 28**'
        }, {
            name: '\r\n',
            phone: '901-747-3428'
        }, {
            name: 'Dorothy "H." Spencer',
            phone: '573-394-9254[fax]'
        }, {
            name: 'Иван Иванов (1' + delimiter + '2)',
            phone: '№ 573-394-9254'
        }];
    }
}

export class ValueData {
    public value: string;

    constructor(value: string) {
        this.value = value;
    }
}

export class FileContentData {

    private _fileContentCollection: IFileContent[];
    private _sharedStringsData = '';
    private _tableData = '';
    private _worksheetData = '';
    private _workbookData = `<?xml version="1.0" encoding="UTF-8"?>
    <workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/` +
    `officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x15" ` +
    `xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main"><fileVersion appName="xl" lastEdited="6" lowestEdited="6" ` +
    `rupBuild="14420"/><workbookPr filterPrivacy="1" defaultThemeVersion="164011"/><bookViews><workbookView xWindow="0" yWindow="0" ` +
    `windowWidth="22260" windowHeight="12645"/></bookViews><sheets><sheet name="Sheet1" sheetId="1" r:id="rId1"/></sheets><calcPr ` +
    `calcId="162913"/><extLst><ext uri="{140A7094-0E35-4892-8432-C4D2E57EDEB5}" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml` +
    `/2010/11/main"><x15:workbookPr chartTrackingRefBase="1"/></ext></extLst></workbook>`;
    private _appData = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"><Application>Microsoft Excel</Application><DocSecurity>0</DocSecurity><ScaleCrop>false</ScaleCrop><HeadingPairs><vt:vector size="2" baseType="variant"><vt:variant><vt:lpstr>Worksheets</vt:lpstr></vt:variant><vt:variant><vt:i4>1</vt:i4></vt:variant></vt:vector></HeadingPairs><TitlesOfParts><vt:vector size="1" baseType="lpstr"><vt:lpstr>Sheet1</vt:lpstr></vt:vector></TitlesOfParts><Company></Company><LinksUpToDate>false</LinksUpToDate><SharedDoc>false</SharedDoc><HyperlinksChanged>false</HyperlinksChanged><AppVersion>16.0300</AppVersion></Properties>`;

    constructor() {}

    public create(worksheetData: string, tableData: string, sharedStringsData: string, workbookData: string, appData: string, isHGrid: boolean = false): IFileContent[] {
        this._fileContentCollection = [
            {  fileName: JSZipFiles.dataFiles[1].name, fileContent : worksheetData },
            {  fileName: JSZipFiles.dataFiles[3].name, fileContent : sharedStringsData },
            {  fileName: JSZipFiles.templateFiles[6].name, fileContent : workbookData },
            {  fileName: JSZipFiles.templateFiles[1].name, fileContent : appData },
        ];

        if (!isHGrid) {
            this._fileContentCollection.push({
              fileName: JSZipFiles.dataFiles[2].name, fileContent : tableData
            });
        }

        return this._fileContentCollection;
    }

    public simpleGridSortByNameDesc() {
        this._sharedStringsData = `count="23" uniqueCount="21"><si><t>ID</t></si><si><t>Name</t></si><si><t>JobTitle</t></si>` +
            `<si><t>Tanya Bennett</t></si><si><t>Director</t></si><si><t>Leslie Hansen</t></si><si><t>Associate Software Developer</t></si>` +
            `<si><t>Jack Simon</t></si><si><t>Software Developer</t></si><si><t>Gilberto Todd</t></si><si><t>Erma Walsh</t></si><si><t>CEO</t></si>` +
            `<si><t>Erika Wells</t></si><si><t>Software Development Team Lead</t></si><si><t>Eduardo Ramirez</t></si><si><t>Manager</t></si>` +
            `<si><t>Debra Morton</t></si><si><t>Celia Martinez</t></si><si><t>Senior Software Developer</t></si><si><t>Casey Houston</t></si><si><t>Vice President</t></si>`;

        this._tableData = `ref="A1:C11" totalsRowShown="0">
        <autoFilter ref="A1:C11"/><tableColumns count="3"><tableColumn id="1" name="ID"/><tableColumn id="2" name="Name"/><tableColumn id="3" name="JobTitle"/></tableColumns>`;

        this._worksheetData = `<dimension ref="A1:C11"/><sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews><sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/><cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="50" customWidth="1"/></cols><sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c></row><row r="2"><c r="A2" s="1"><v>3</v></c><c r="B2" t="s"><v>3</v></c><c r="C2" t="s"><v>4</v></c></row><row r="3"><c r="A3" s="1"><v>9</v></c><c r="B3" t="s"><v>5</v></c><c r="C3" t="s"><v>6</v></c></row><row r="4"><c r="A4" s="1"><v>4</v></c><c r="B4" t="s"><v>7</v></c><c r="C4" t="s"><v>8</v></c></row><row r="5"><c r="A5" s="1"><v>2</v></c><c r="B5" t="s"><v>9</v></c><c r="C5" t="s"><v>4</v></c></row><row r="6"><c r="A6" s="1"><v>6</v></c><c r="B6" t="s"><v>10</v></c><c r="C6" t="s"><v>11</v></c></row><row r="7"><c r="A7" s="1"><v>8</v></c><c r="B7" t="s"><v>12</v></c><c r="C7" t="s"><v>13</v></c></row><row r="8"><c r="A8" s="1"><v>10</v></c><c r="B8" t="s"><v>14</v></c><c r="C8" t="s"><v>15</v></c></row><row r="9"><c r="A9" s="1"><v>7</v></c><c r="B9" t="s"><v>16</v></c><c r="C9" t="s"><v>6</v></c></row><row r="10"><c r="A10" s="1"><v>5</v></c><c r="B10" t="s"><v>17</v></c><c r="C10" t="s"><v>18</v></c></row><row r="11"><c r="A11" s="1"><v>1</v></c><c r="B11" t="s"><v>19</v></c><c r="C11" t="s"><v>20</v></c></row></sheetData>`;

        return this.createData();
    }

    public simpleGridColumnWidth(width = 0) {
        const wsDataColSettings = this.updateColumnWidth(width);
        this._sharedStringsData =
            `count="1" uniqueCount="1"><si><t>ID</t></si>`;

        this._tableData = `ref="A1:A11" totalsRowShown="0">
    <autoFilter ref="A1:A11"/><tableColumns count="1"><tableColumn id="1" name="ID"/></tableColumns>`;

        this._worksheetData =
            `<dimension ref="A1:A11"/><sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews><sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/>` +
            `${ wsDataColSettings }<sheetData><row r="1"><c r="A1" t="s"><v>0</v></c></row><row r="2"><c r="A2" s="1"><v>1</v></c></row><row r="3"><c r="A3" s="1"><v>2</v></c></row><row r="4"><c r="A4" s="1"><v>3</v></c></row><row r="5"><c r="A5" s="1"><v>4</v></c></row><row r="6"><c r="A6" s="1"><v>5</v></c></row><row r="7"><c r="A7" s="1"><v>6</v></c></row><row r="8"><c r="A8" s="1"><v>7</v></c></row><row r="9"><c r="A9" s="1"><v>8</v></c></row><row r="10"><c r="A10" s="1"><v>9</v></c></row><row r="11"><c r="A11" s="1"><v>10</v></c></row></sheetData>`;

        return this.createData();
    }

    public simpleGridRowHeight(height = 0) {
        this._sharedStringsData =
            `count="23" uniqueCount="21"><si><t>ID</t></si><si><t>Name</t></si><si><t>JobTitle</t></si><si><t>Casey Houston</t></si><si><t>Vice President</t></si><si><t>Gilberto Todd</t></si><si><t>Director</t></si><si><t>Tanya Bennett</t></si><si><t>Jack Simon</t></si><si><t>Software Developer</t></si><si><t>Celia Martinez</t></si><si><t>Senior Software Developer</t></si><si><t>Erma Walsh</t></si><si><t>CEO</t></si><si><t>Debra Morton</t></si><si><t>Associate Software Developer</t></si><si><t>Erika Wells</t></si><si><t>Software Development Team Lead</t></si><si><t>Leslie Hansen</t></si><si><t>Eduardo Ramirez</t></si><si><t>Manager</t></si>`;

        this._tableData = `ref="A1:C11" totalsRowShown="0">
    <autoFilter ref="A1:C11"/><tableColumns count="3"><tableColumn id="1" name="ID"/><tableColumn id="2" name="Name"/><tableColumn id="3" name="JobTitle"/></tableColumns>`;

        this._worksheetData = this.updateRowHeight(height);

        return this.createData();
    }

    public simpleGridWorksheetName(name) {
        this._sharedStringsData =
        `count="23" uniqueCount="21"><si><t>ID</t></si><si><t>Name</t></si><si><t>JobTitle</t></si><si><t>Casey Houston</t></si><si><t>Vice President</t></si><si><t>Gilberto Todd</t></si><si><t>Director</t></si><si><t>Tanya Bennett</t></si><si><t>Jack Simon</t></si><si><t>Software Developer</t></si><si><t>Celia Martinez</t></si><si><t>Senior Software Developer</t></si><si><t>Erma Walsh</t></si><si><t>CEO</t></si><si><t>Debra Morton</t></si><si><t>Associate Software Developer</t></si><si><t>Erika Wells</t></si><si><t>Software Development Team Lead</t></si><si><t>Leslie Hansen</t></si><si><t>Eduardo Ramirez</t></si><si><t>Manager</t></si>`;

        this._tableData = `ref="A1:C11" totalsRowShown="0">
        <autoFilter ref="A1:C11"/><tableColumns count="3"><tableColumn id="1" name="ID"/><tableColumn id="2" name="Name"/>` +
            `<tableColumn id="3" name="JobTitle"/></tableColumns>`;

        this._worksheetData =
        `<dimension ref="A1:C11"/><sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews><sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/><cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="50" customWidth="1"/></cols><sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c></row><row r="2"><c r="A2" s="1"><v>1</v></c><c r="B2" t="s"><v>3</v></c><c r="C2" t="s"><v>4</v></c></row><row r="3"><c r="A3" s="1"><v>2</v></c><c r="B3" t="s"><v>5</v></c><c r="C3" t="s"><v>6</v></c></row><row r="4"><c r="A4" s="1"><v>3</v></c><c r="B4" t="s"><v>7</v></c><c r="C4" t="s"><v>6</v></c></row><row r="5"><c r="A5" s="1"><v>4</v></c><c r="B5" t="s"><v>8</v></c><c r="C5" t="s"><v>9</v></c></row><row r="6"><c r="A6" s="1"><v>5</v></c><c r="B6" t="s"><v>10</v></c><c r="C6" t="s"><v>11</v></c></row><row r="7"><c r="A7" s="1"><v>6</v></c><c r="B7" t="s"><v>12</v></c><c r="C7" t="s"><v>13</v></c></row><row r="8"><c r="A8" s="1"><v>7</v></c><c r="B8" t="s"><v>14</v></c><c r="C8" t="s"><v>15</v></c></row><row r="9"><c r="A9" s="1"><v>8</v></c><c r="B9" t="s"><v>16</v></c><c r="C9" t="s"><v>17</v></c></row><row r="10"><c r="A10" s="1"><v>9</v></c><c r="B10" t="s"><v>18</v></c><c r="C10" t="s"><v>15</v></c></row><row r="11"><c r="A11" s="1"><v>10</v></c><c r="B11" t="s"><v>19</v></c><c r="C11" t="s"><v>20</v></c></row></sheetData>`;

        this._workbookData =  `<?xml version="1.0" encoding="UTF-8"?>
        <workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/` +
        `officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x15" ` +
        `xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main"><fileVersion appName="xl" lastEdited="6" lowestEdited="6" ` +
        `rupBuild="14420"/><workbookPr filterPrivacy="1" defaultThemeVersion="164011"/><bookViews><workbookView xWindow="0" yWindow="0" ` +
        `windowWidth="22260" windowHeight="12645"/></bookViews><sheets><sheet name="${name}" sheetId="1" r:id="rId1"/></sheets><calcPr ` +
        `calcId="162913"/><extLst><ext uri="{140A7094-0E35-4892-8432-C4D2E57EDEB5}" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml` +
        `/2010/11/main"><x15:workbookPr chartTrackingRefBase="1"/></ext></extLst></workbook>`;

        this._appData = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
        <Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"><Application>Microsoft Excel</Application><DocSecurity>0</DocSecurity><ScaleCrop>false</ScaleCrop><HeadingPairs><vt:vector size="2" baseType="variant"><vt:variant><vt:lpstr>Worksheets</vt:lpstr></vt:variant><vt:variant><vt:i4>1</vt:i4></vt:variant></vt:vector></HeadingPairs><TitlesOfParts><vt:vector size="1" baseType="lpstr"><vt:lpstr>${name}</vt:lpstr></vt:vector></TitlesOfParts><Company></Company><LinksUpToDate>false</LinksUpToDate><SharedDoc>false</SharedDoc><HyperlinksChanged>false</HyperlinksChanged><AppVersion>16.0300</AppVersion></Properties>`;

        return this.createData();
    }

    public treeGridDataExpDepth(depth: number) {
        this._sharedStringsData =
            `count="21" uniqueCount="19"><si><t>ID</t></si><si><t>ParentID</t></si><si><t>Name</t></si><si><t>JobTitle</t></si><si><t>Age</t></si><si><t>Casey Houston</t></si><si><t>Vice President</t></si><si><t>Gilberto Todd</t></si><si><t>Director</t></si><si><t>Tanya Bennett</t></si><si><t>Debra Morton</t></si><si><t>Associate Software Developer</t></si><si><t>Jack Simon</t></si><si><t>Software Developer</t></si><si><t>Erma Walsh</t></si><si><t>CEO</t></si><si><t>Eduardo Ramirez</t></si><si><t>Manager</t></si><si><t>Leslie Hansen</t></si>`;

        this._tableData = `ref="A1:E9" totalsRowShown="0">
    <autoFilter ref="A1:E9"/><tableColumns count="5"><tableColumn id="1" name="ID"/><tableColumn id="2" name="ParentID"/><tableColumn id="3" name="Name"/><tableColumn id="4" name="JobTitle"/><tableColumn id="5" name="Age"/></tableColumns>`;

        switch (depth) {
            case 0:
                this._worksheetData = `
<sheetPr><outlinePr summaryBelow="0" /></sheetPr>
<dimension ref="A1:E9"/>
<sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>
<sheetFormatPr defaultRowHeight="15" outlineLevelRow="2" x14ac:dyDescent="0.25"/>
<cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="50" customWidth="1"/><col min="4" max="4" width="50" customWidth="1"/><col min="5" max="5" width="50" customWidth="1"/></cols>
<sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c><c r="D1" t="s"><v>3</v></c><c r="E1" t="s"><v>4</v></c></row><row r="2"><c r="A2" s="1"><v>1</v></c><c r="B2" s="1"><v>-1</v></c><c r="C2" t="s"><v>5</v></c><c r="D2" t="s"><v>6</v></c><c r="E2" s="1"><v>32</v></c></row><row r="3" outlineLevel="1" hidden="1"><c r="A3" s="1"><v>2</v></c><c r="B3" s="1"><v>1</v></c><c r="C3" t="s"><v>7</v></c><c r="D3" t="s"><v>8</v></c><c r="E3" s="1"><v>41</v></c></row><row r="4" outlineLevel="2" hidden="1"><c r="A4" s="1"><v>3</v></c><c r="B4" s="1"><v>2</v></c><c r="C4" t="s"><v>9</v></c><c r="D4" t="s"><v>8</v></c><c r="E4" s="1"><v>29</v></c></row><row r="5" outlineLevel="2" hidden="1"><c r="A5" s="1"><v>7</v></c><c r="B5" s="1"><v>2</v></c><c r="C5" t="s"><v>10</v></c><c r="D5" t="s"><v>11</v></c><c r="E5" s="1"><v>35</v></c></row><row r="6" outlineLevel="1" hidden="1"><c r="A6" s="1"><v>4</v></c><c r="B6" s="1"><v>1</v></c><c r="C6" t="s"><v>12</v></c><c r="D6" t="s"><v>13</v></c><c r="E6" s="1"><v>33</v></c></row><row r="7"><c r="A7" s="1"><v>6</v></c><c r="B7" s="1"><v>-1</v></c><c r="C7" t="s"><v>14</v></c><c r="D7" t="s"><v>15</v></c><c r="E7" s="1"><v>52</v></c></row><row r="8"><c r="A8" s="1"><v>10</v></c><c r="B8" s="1"><v>-1</v></c><c r="C8" t="s"><v>16</v></c><c r="D8" t="s"><v>17</v></c><c r="E8" s="1"><v>53</v></c></row><row r="9" outlineLevel="1" hidden="1"><c r="A9" s="1"><v>9</v></c><c r="B9" s="1"><v>10</v></c><c r="C9" t="s"><v>18</v></c><c r="D9" t="s"><v>11</v></c><c r="E9" s="1"><v>44</v></c></row></sheetData>`;
                break;
            case 1:
                this._worksheetData = `
<sheetPr><outlinePr summaryBelow="0" /></sheetPr>
<dimension ref="A1:E9"/>
<sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>
<sheetFormatPr defaultRowHeight="15" outlineLevelRow="2" x14ac:dyDescent="0.25"/>
<cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="50" customWidth="1"/><col min="4" max="4" width="50" customWidth="1"/><col min="5" max="5" width="50" customWidth="1"/></cols>
<sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c><c r="D1" t="s"><v>3</v></c><c r="E1" t="s"><v>4</v></c></row><row r="2"><c r="A2" s="1"><v>1</v></c><c r="B2" s="1"><v>-1</v></c><c r="C2" t="s"><v>5</v></c><c r="D2" t="s"><v>6</v></c><c r="E2" s="1"><v>32</v></c></row><row r="3" outlineLevel="1"><c r="A3" s="1"><v>2</v></c><c r="B3" s="1"><v>1</v></c><c r="C3" t="s"><v>7</v></c><c r="D3" t="s"><v>8</v></c><c r="E3" s="1"><v>41</v></c></row><row r="4" outlineLevel="2" hidden="1"><c r="A4" s="1"><v>3</v></c><c r="B4" s="1"><v>2</v></c><c r="C4" t="s"><v>9</v></c><c r="D4" t="s"><v>8</v></c><c r="E4" s="1"><v>29</v></c></row><row r="5" outlineLevel="2" hidden="1"><c r="A5" s="1"><v>7</v></c><c r="B5" s="1"><v>2</v></c><c r="C5" t="s"><v>10</v></c><c r="D5" t="s"><v>11</v></c><c r="E5" s="1"><v>35</v></c></row><row r="6" outlineLevel="1"><c r="A6" s="1"><v>4</v></c><c r="B6" s="1"><v>1</v></c><c r="C6" t="s"><v>12</v></c><c r="D6" t="s"><v>13</v></c><c r="E6" s="1"><v>33</v></c></row><row r="7"><c r="A7" s="1"><v>6</v></c><c r="B7" s="1"><v>-1</v></c><c r="C7" t="s"><v>14</v></c><c r="D7" t="s"><v>15</v></c><c r="E7" s="1"><v>52</v></c></row><row r="8"><c r="A8" s="1"><v>10</v></c><c r="B8" s="1"><v>-1</v></c><c r="C8" t="s"><v>16</v></c><c r="D8" t="s"><v>17</v></c><c r="E8" s="1"><v>53</v></c></row><row r="9" outlineLevel="1"><c r="A9" s="1"><v>9</v></c><c r="B9" s="1"><v>10</v></c><c r="C9" t="s"><v>18</v></c><c r="D9" t="s"><v>11</v></c><c r="E9" s="1"><v>44</v></c></row></sheetData>`;
                break;
        }

        return this.createData();
    }

    private createData(isHGrid: boolean = false) {
        return this.create(this._worksheetData, this._tableData, this._sharedStringsData, this._workbookData, this._appData, isHGrid);
    }

    public get differentTypesDataContent() {
        this._sharedStringsData = `count="6" uniqueCount="6"><si><t>Column1</t></si><si><t>Terrance Orta</t></si><si><t>Richard Mahoney ` +
            `LongerName</t></si><si><t>Donna Price</t></si><si><t>Lisa Landers</t></si><si><t>Dorothy H. Spencer</t></si>`;

        this._tableData = `ref="A1:A6" totalsRowShown="0"><autoFilter ref="A1:A6"/><tableColumns count="1">` +
            `<tableColumn id="1" name="Column1"/></tableColumns>`;

        this._worksheetData =
            `<dimension ref="A1:A6"/><sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>` +
            `<sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/><cols><col min="1" max="1" width="30.169921875" customWidth="1"/>` +
            `</cols><sheetData><row r="1"><c r="A1" t="s"><v>0</v></c></row><row r="2"><c r="A2" t="s"><v>1</v></c></row><row r="3"><c ` +
            `r="A3" t="s"><v>2</v></c></row><row r="4"><c r="A4" t="s"><v>3</v></c></row><row r="5"><c r="A5" t="s"><v>4</v></c></row>` +
            `<row r="6"><c r="A6" t="s"><v>5</v></c></row></sheetData>`;

        return this.createData();
    }

    public get contactsDataContent() {
        this._sharedStringsData = `count="12" uniqueCount="11"><si><t>name</t></si><si><t>phone</t></si><si><t>Terrance Orta</t></si><si>` +
            `<t>770-504-2217</t></si><si><t>Richard Mahoney LongerName</t></si><si><t></t></si><si><t>Donna Price</t></si>` +
            `<si><t>859-496-2817</t></si><si><t>901-747-3428</t></si><si><t>Dorothy H. Spencer</t></si><si><t>573-394-9254</t></si>`;

        this._tableData = `ref="A1:B6" totalsRowShown="0">
        <autoFilter ref="A1:B6"/><tableColumns count="2"><tableColumn id="1" name="name"/><tableColumn id="2" name="phone"/>` +
            `</tableColumns>`;

        this._worksheetData =
            `<dimension ref="A1:B6"/><sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>` +
            `<sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/><cols><col min="1" max="1" width="50" ` +
            `customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/></cols><sheetData><row r="1">` +
            `<c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c></row><row r="2"><c r="A2" t="s"><v>2</v></c><c r="B2" t="s">` +
            `<v>3</v></c></row><row r="3"><c r="A3" t="s"><v>4</v></c><c r="B3" t="s"><v>5</v></c></row><row r="4"><c r="A4" t="s">` +
            `<v>6</v></c><c r="B4" t="s"><v>7</v></c></row><row r="5"><c r="A5" t="s"><v>5</v></c><c r="B5" t="s"><v>8</v></c></row>` +
            `<row r="6"><c r="A6" t="s"><v>9</v></c><c r="B6" t="s"><v>10</v></c></row></sheetData>`;

        return this.createData();
    }

    public get contactsPartialDataContent() {
        this._sharedStringsData =
            `count="6" uniqueCount="6"><si><t>name</t></si><si><t>phone</t></si><si><t>Terrance Orta</t></si><si><t>770-504-2217</t></si><si><t>Richard Mahoney LongerName</t></si><si><t>780-555-1331</t></si>`;

        this._tableData = `ref="A1:B4" totalsRowShown="0">
        <autoFilter ref="A1:B4"/><tableColumns count="2"><tableColumn id="1" name="name"/><tableColumn id="2" name="phone"/>` +
            `</tableColumns>`;

        this._worksheetData =
            `<dimension ref="A1:B4"/><sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews><sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/><cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/></cols><sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c></row><row r="2"><c r="A2" t="s"><v>2</v></c><c r="B2" t="s"><v>3</v></c></row><row r="3"><c r="A3" t="s"><v>4</v></c><c r="B3" s="1"/></row><row r="4"><c r="A4" s="1"/><c r="B4" t="s"><v>5</v></c></row></sheetData>`;

        return this.createData();
    }

    public get contactsFunkyDataContent() {
        this._sharedStringsData = `count="14" uniqueCount="14"><si><t>name</t></si><si><t>phone</t></si><si><t>Terrance ` +
            `Mc&apos;Orta</t></si><si><t>(+359)770-504-2217 | 2218</t></si><si><t>Richard Mahoney /LongerName/</t></si><si><t></t>` +
            `</si><si><t>Donna, /; Price</t></si><si><t>859 496 28**</t></si><si><t>
        </t></si><si><t>901-747-3428</t></si><si><t>Dorothy &quot;H.&quot; Spencer</t></si><si><t>573-394-9254[fax]</t></si>` +
            `<si><t>Иван Иванов (1,2)</t></si><si><t>№ 573-394-9254</t></si>`;

        this._tableData = `ref="A1:B7" totalsRowShown="0">
        <autoFilter ref="A1:B7"/><tableColumns count="2"><tableColumn id="1" name="name"/><tableColumn id="2" name="phone"/>` +
            `</tableColumns>`;

        this._worksheetData =
            `<dimension ref="A1:B7"/><sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>` +
            `<sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/><cols><col min="1" max="1" width="50" customWidth` +
            `="1"/><col min="2" max="2" width="50" customWidth="1"/></cols><sheetData><row r="1"><c r="A1" t="s"><v>0</v>` +
            `</c><c r="B1" t="s"><v>1</v></c></row><row r="2"><c r="A2" t="s"><v>2</v></c><c r="B2" t="s"><v>3</v></c></row><row r="3">` +
            `<c r="A3" t="s"><v>4</v></c><c r="B3" t="s"><v>5</v></c></row><row r="4"><c r="A4" t="s"><v>6</v></c><c r="B4" t="s"><v>7</v>` +
            `</c></row><row r="5"><c r="A5" t="s"><v>8</v></c><c r="B5" t="s"><v>9</v></c></row><row r="6"><c r="A6" t="s"><v>10</v></c>` +
            `<c r="B6" t="s"><v>11</v></c></row><row r="7"><c r="A7" t="s"><v>12</v></c><c r="B7" t="s"><v>13</v></c></row></sheetData>`;

        return this.createData();
    }

    public get noHeadersStringDataContent() {
        this._sharedStringsData = `count="6" uniqueCount="6"><si><t>Column1</t></si><si><t>Terrance Orta</t></si>` +
            `<si><t>Richard Mahoney LongerName</t></si><si><t>Donna Price</t></si><si><t>Lisa Landers</t></si><si><t>` +
            `Dorothy H. Spencer</t></si>`;

        this._tableData = `ref="A1:A6" totalsRowShown="0"><autoFilter ref="A1:A6"/><tableColumns count="1">` +
            `<tableColumn id="1" name="Column1"/></tableColumns>`;

        this._worksheetData = `<dimension ref="A1:A6"/><sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView>` +
            `</sheetViews><sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/><cols><col min="1" max="1" ` +
            `width="50" customWidth="1"/></cols><sheetData><row r="1"><c r="A1" t="s"><v>0</v></c></row><row r="2">` +
            `<c r="A2" t="s"><v>1</v></c></row><row r="3"><c r="A3" t="s"><v>2</v></c></row><row r="4"><c r="A4" t="s"><v>3</v>` +
            `</c></row><row r="5"><c r="A5" t="s"><v>4</v></c></row><row r="6"><c r="A6" t="s"><v>5</v></c></row></sheetData>`;

        return this.createData();
    }

    public get noHeadersNumberDataContent() {
        this._sharedStringsData = `count="1" uniqueCount="1"><si><t>Column 1</t></si>`;

        this._tableData = `ref="A1:A4" totalsRowShown="0"><autoFilter ref="A1:A4"/><tableColumns count="1">` +
            `<tableColumn id="1" name="Column1"/></tableColumns>`;

        this._worksheetData = `<dimension ref="A1:A4"/><sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews><sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/><cols><col min="1" max="1" width="50" customWidth="1"/></cols><sheetData><row r="1"><c r="A1" t="s"><v>0</v></c></row><row r="2"><c r="A2" s="1"><v>10</v></c></row><row r="3"><c r="A3" s="1"><v>20</v></c></row><row r="4"><c r="A4" s="1"><v>30</v></c></row></sheetData>`;

        return this.createData();
    }

    public get noHeadersDateTimeContent() {
        this._sharedStringsData = `count="1" uniqueCount="1"><si><t>Column 1</t></si>`;

        this._tableData = `ref="A1:A3" totalsRowShown="0"><autoFilter ref="A1:A3"/><tableColumns count="1">` +
            `<tableColumn id="1" name="Column1"/></tableColumns>`;

        this._worksheetData = `<dimension ref="A1:A3"/><sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView>` +
            `</sheetViews><sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/><cols><col min="1" max="1" width=` +
            `"50" customWidth="1"/></cols><sheetData><row r="1"><c r="A1" t="s"><v>0</v></c></row><row r="2">` +
            `<c r="A2" t="d" s="2"><v>2018-04-23T00:00:00</v></c></row><row r="3"><c r="A3" t="d" s="2"><v>2018-03-23T00:00:00</v>` +
            `</c></row></sheetData>`;

        return this.createData();
    }

    public get noHeadersObjectDataContent() {
        this._sharedStringsData = `count="4" uniqueCount="4"><si><t>value</t></si><si><t>1</t></si><si><t>2</t></si>` +
            `<si><t>3</t></si>`;

        this._tableData = `ref="A1:A4" totalsRowShown="0"><autoFilter ref="A1:A4"/><tableColumns count="1">` +
            `<tableColumn id="1" name="value"/></tableColumns>`;

        this._worksheetData = `<dimension ref="A1:A4"/><sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView>` +
            `</sheetViews><sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/><cols><col min="1" max="1" width="8.43" ` +
            `customWidth="1"/></cols><sheetData><row r="1"><c r="A1" t="s"><v>0</v></c></row><row r="2"><c r="A2" t="s"><v>1</v>` +
            `</c></row><row r="3"><c r="A3" t="s"><v>2</v></c></row><row r="4"><c r="A4" t="s"><v>3</v></c></row></sheetData>`;

        return this.createData();
    }

    public get simpleGridData() {
        this._sharedStringsData =
            `count="23" uniqueCount="21"><si><t>ID</t></si><si><t>Name</t></si><si><t>JobTitle</t></si><si><t>Casey Houston</t></si><si><t>Vice President</t></si><si><t>Gilberto Todd</t></si><si><t>Director</t></si><si><t>Tanya Bennett</t></si><si><t>Jack Simon</t></si><si><t>Software Developer</t></si><si><t>Celia Martinez</t></si><si><t>Senior Software Developer</t></si><si><t>Erma Walsh</t></si><si><t>CEO</t></si><si><t>Debra Morton</t></si><si><t>Associate Software Developer</t></si><si><t>Erika Wells</t></si><si><t>Software Development Team Lead</t></si><si><t>Leslie Hansen</t></si><si><t>Eduardo Ramirez</t></si><si><t>Manager</t></si>`;

        this._tableData = `ref="A1:C11" totalsRowShown="0">
        <autoFilter ref="A1:C11"/><tableColumns count="3"><tableColumn id="1" name="ID"/><tableColumn id="2" name="Name"/>` +
            `<tableColumn id="3" name="JobTitle"/></tableColumns>`;

        this._worksheetData =
            `<dimension ref="A1:C11"/><sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews><sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/><cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="50" customWidth="1"/></cols><sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c></row><row r="2"><c r="A2" s="1"><v>1</v></c><c r="B2" t="s"><v>3</v></c><c r="C2" t="s"><v>4</v></c></row><row r="3"><c r="A3" s="1"><v>2</v></c><c r="B3" t="s"><v>5</v></c><c r="C3" t="s"><v>6</v></c></row><row r="4"><c r="A4" s="1"><v>3</v></c><c r="B4" t="s"><v>7</v></c><c r="C4" t="s"><v>6</v></c></row><row r="5"><c r="A5" s="1"><v>4</v></c><c r="B5" t="s"><v>8</v></c><c r="C5" t="s"><v>9</v></c></row><row r="6"><c r="A6" s="1"><v>5</v></c><c r="B6" t="s"><v>10</v></c><c r="C6" t="s"><v>11</v></c></row><row r="7"><c r="A7" s="1"><v>6</v></c><c r="B7" t="s"><v>12</v></c><c r="C7" t="s"><v>13</v></c></row><row r="8"><c r="A8" s="1"><v>7</v></c><c r="B8" t="s"><v>14</v></c><c r="C8" t="s"><v>15</v></c></row><row r="9"><c r="A9" s="1"><v>8</v></c><c r="B9" t="s"><v>16</v></c><c r="C9" t="s"><v>17</v></c></row><row r="10"><c r="A10" s="1"><v>9</v></c><c r="B10" t="s"><v>18</v></c><c r="C10" t="s"><v>15</v></c></row><row r="11"><c r="A11" s="1"><v>10</v></c><c r="B11" t="s"><v>19</v></c><c r="C11" t="s"><v>20</v></c></row></sheetData>`;

        return this.createData();
    }

    public get simpleGridDataFull() {
        this._sharedStringsData = `count="44" uniqueCount="42"><si><t>ID</t></si><si><t>Name</t></si><si><t>JobTitle</t>` +
            `</si><si><t>HireDate</t></si><si><t>1</t></si><si><t>Casey Houston</t></si><si><t>Vice President</t></si><si>` +
            `<t>2017-06-19T11:43:07.714Z</t></si><si><t>2</t></si><si><t>Gilberto Todd</t></si><si><t>Director</t></si><si>` +
            `<t>2015-12-18T11:23:17.714Z</t></si><si><t>3</t></si><si><t>Tanya Bennett</t></si><si><t>2005-11-18T11:23:17.714Z` +
            `</t></si><si><t>4</t></si><si><t>Jack Simon</t></si><si><t>Software Developer</t></si><si><t>2008-12-18T11:23:17.714Z` +
            `</t></si><si><t>5</t></si><si><t>Celia Martinez</t></si><si><t>Senior Software Developer</t></si><si>` +
            `<t>2007-12-19T11:23:17.714Z</t></si><si><t>6</t></si><si><t>Erma Walsh</t></si><si><t>CEO</t></si><si><t>` +
            `2016-12-18T11:23:17.714Z</t></si><si><t>7</t></si><si><t>Debra Morton</t></si><si><t>Associate Software Developer</t>` +
            `</si><si><t>2005-11-19T11:23:17.714Z</t></si><si><t>8</t></si><si><t>Erika Wells</t></si><si><t>Software Development ` +
            `Team Lead</t></si><si><t>2005-10-14T11:23:17.714Z</t></si><si><t>9</t></si><si><t>Leslie Hansen</t></si><si><t>` +
            `2013-10-10T11:23:17.714Z</t></si><si><t>10</t></si><si><t>Eduardo Ramirez</t></si><si><t>Manager</t></si><si><t>` +
            `2011-11-28T11:23:17.714Z</t></si>`;

        this._tableData = `ref="A1:D11" totalsRowShown="0">
        <autoFilter ref="A1:D11"/><tableColumns count="4"><tableColumn id="1" name="ID"/><tableColumn id="2" name="Name"/>` +
            `<tableColumn id="3" name="JobTitle"/><tableColumn id="4" name="HireDate"/></tableColumns>`;

        this._worksheetData =
            `<dimension ref="A1:D11"/><sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>` +
            `<sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/><cols><col min="1" max="1" width="50" customWidth="1"/>` +
            `<col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="50" ` +
            `customWidth="1"/><col min="4" max="4"  width="50" customWidth="1"/></cols><sheetData><row r="1"><c r="A1" ` +
            `t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c><c r="D1" t="s"><v>3</v></c></row><row r="2">` +
            `<c r="A2" t="s"><v>4</v></c><c r="B2" t="s"><v>5</v></c><c r="C2" t="s"><v>6</v></c><c r="D2" t="s"><v>7</v></c></row>` +
            `<row r="3"><c r="A3" t="s"><v>8</v></c><c r="B3" t="s"><v>9</v></c><c r="C3" t="s"><v>10</v></c><c r="D3" t="s"><v>11</v>` +
            `</c></row><row r="4"><c r="A4" t="s"><v>12</v></c><c r="B4" t="s"><v>13</v></c><c r="C4" t="s"><v>10</v></c><c r="D4" t="s"><v>` +
            `14</v></c></row><row r="5"><c r="A5" t="s"><v>15</v></c><c r="B5" t="s"><v>16</v></c><c r="C5" t="s"><v>17</v></c><c ` +
            `r="D5" t="s"><v>18</v></c></row><row r="6"><c r="A6" t="s"><v>19</v></c><c r="B6" t="s"><v>20</v></c><c r="C6" t="s">` +
            `<v>21</v></c><c r="D6" t="s"><v>22</v></c></row><row r="7"><c r="A7" t="s"><v>23</v></c><c r="B7" t="s"><v>24</v></c>` +
            `<c r="C7" t="s"><v>25</v></c><c r="D7" t="s"><v>26</v></c></row><row r="8"><c r="A8" t="s"><v>27</v></c><c r="B8" t="s">` +
            `<v>28</v></c><c r="C8" t="s"><v>29</v></c><c r="D8" t="s"><v>30</v></c></row><row r="9"><c r="A9" t="s"><v>31</v></c>` +
            `<c r="B9" t="s"><v>32</v></c><c r="C9" t="s"><v>33</v></c><c r="D9" t="s"><v>34</v></c></row><row r="10"><c r="A10" t="s">` +
            `<v>35</v></c><c r="B10" t="s"><v>36</v></c><c r="C10" t="s"><v>29</v></c><c r="D10" t="s"><v>37</v></c></row><row r="11">` +
            `<c r="A11" t="s"><v>38</v></c><c r="B11" t="s"><v>39</v></c><c r="C11" t="s"><v>40</v></c><c r="D11" t="s"><v>41</v></c>` +
            `</row></sheetData>`;

        return this.createData();
    }

    public get simpleGridDataPage1() {
        this._sharedStringsData = `count="16" uniqueCount="15"><si><t>ID</t></si><si><t>Name</t></si><si><t>JobTitle</t></si>` +
            `<si><t>HireDate</t></si><si><t>1</t></si><si><t>Casey Houston</t></si><si><t>Vice President</t></si><si><t>` +
            `2017-06-19T11:43:07.714Z</t></si><si><t>2</t></si><si><t>Gilberto Todd</t></si><si><t>Director</t></si><si><t>` +
            `2015-12-18T11:23:17.714Z</t></si><si><t>3</t></si><si><t>Tanya Bennett</t></si><si><t>2005-11-18T11:23:17.714Z</t></si>`;

        this._tableData = `ref="A1:D4" totalsRowShown="0">
            <autoFilter ref="A1:D4"/><tableColumns count="4"><tableColumn id="1" name="ID"/><tableColumn id="2" name="Name"/>` +
            `<tableColumn id="3" name="JobTitle"/><tableColumn id="4" name="HireDate"/></tableColumns>`;

        this._worksheetData =
            `<dimension ref="A1:D4"/><sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>` +
            `<sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/><cols><col min="1" max="1" width="50" customWidth="1"/>` +
            `<col min="2" max="2" width="14.416406250000001" customWidth="1"/><col min="3" max="3" width="13.890234375" customWidth="1"/>` +
            `<col min="4" max="4" width="26.33203125" customWidth="1"/></cols><sheetData><row r="1"><c r="A1" t="s"><v>0</v></c>` +
            `<c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c><c r="D1" t="s"><v>3</v></c></row><row r="2"><c r="A2" t="s"><v>4</v>` +
            `</c><c r="B2" t="s"><v>5</v></c><c r="C2" t="s"><v>6</v></c><c r="D2" t="s"><v>7</v></c></row><row r="3"><c r="A3" t="s"><v>8` +
            `</v></c><c r="B3" t="s"><v>9</v></c><c r="C3" t="s"><v>10</v></c><c r="D3" t="s"><v>11</v></c></row><row r="4"><c r="A4" t="s">` +
            `<v>12</v></c><c r="B4" t="s"><v>13</v></c><c r="C4" t="s"><v>10</v></c><c r="D4" t="s"><v>14</v></c></row></sheetData>`;

        return this.createData();
    }

    public get simpleGridDataPage2() {
        this._sharedStringsData = `count="16" uniqueCount="16"><si><t>ID</t></si><si><t>Name</t></si><si><t>JobTitle</t></si><si>` +
            `<t>HireDate</t></si><si><t>4</t></si><si><t>Jack Simon</t></si><si><t>Software Developer</t></si><si><t>2008-12-18T11:23:17.714Z` +
            `</t></si><si><t>5</t></si><si><t>Celia Martinez</t></si><si><t>Senior Software Developer</t></si><si><t>2007-12-19T11:23:17.714Z` +
            `</t></si><si><t>6</t></si><si><t>Erma Walsh</t></si><si><t>CEO</t></si><si><t>2016-12-18T11:23:17.714Z</t></si>`;

        this._tableData = `ref="A1:D4" totalsRowShown="0">
            <autoFilter ref="A1:D4"/><tableColumns count="4"><tableColumn id="1" name="ID"/><tableColumn id="2" name="Name"/>` +
            `<tableColumn id="3" name="JobTitle"/><tableColumn id="4" name="HireDate"/></tableColumns>`;

        this._worksheetData =
            `<dimension ref="A1:D4"/><sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>` +
            `<sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/><cols><col min="1" max="1" width="50" customWidth="1"/>` +
            `<col min="2" max="2" width="14.022656249999999" customWidth="1"/><col min="3" max="3" width="26.001562500000002" customWidth=` +
            `"1"/><col min="4" max="4" width="26.33203125" customWidth="1"/></cols><sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c ` +
            `r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c><c r="D1" t="s"><v>3</v></c></row><row r="2"><c r="A2" t="s"><v>4</v>` +
            `</c><c r="B2" t="s"><v>5</v></c><c r="C2" t="s"><v>6</v></c><c r="D2" t="s"><v>7</v></c></row><row r="3"><c r="A3" t="s">` +
            `<v>8</v></c><c r="B3" t="s"><v>9</v></c><c r="C3" t="s"><v>10</v></c><c r="D3" t="s"><v>11</v></c></row><row r="4"><c r="A4" ` +
            `t="s"><v>12</v></c><c r="B4" t="s"><v>13</v></c><c r="C4" t="s"><v>14</v></c><c r="D4" t="s"><v>15</v></c></row></sheetData>`;

        return this.createData();
    }

    public get simpleGridDataPage1FiveRows() {
        this._sharedStringsData = `count="24" uniqueCount="23"><si><t>ID</t></si><si><t>Name</t></si><si><t>JobTitle</t></si><si>` +
            `<t>HireDate</t></si><si><t>1</t></si><si><t>Casey Houston</t></si><si><t>Vice President</t></si><si><t>2017-06-19T11:43:07.714Z` +
            `</t></si><si><t>2</t></si><si><t>Gilberto Todd</t></si><si><t>Director</t></si><si><t>2015-12-18T11:23:17.714Z</t></si><si><t>3` +
            `</t></si><si><t>Tanya Bennett</t></si><si><t>2005-11-18T11:23:17.714Z</t></si><si><t>4</t></si><si><t>Jack Simon</t></si><si>` +
            `<t>Software Developer</t></si><si><t>2008-12-18T11:23:17.714Z</t></si><si><t>5</t></si><si><t>Celia Martinez</t></si>` +
            `<si><t>Senior Software Developer</t></si><si><t>2007-12-19T11:23:17.714Z</t></si>`;

        this._tableData = `ref="A1:D6" totalsRowShown="0">
        <autoFilter ref="A1:D6"/><tableColumns count="4"><tableColumn id="1" name="ID"/><tableColumn id="2" name="Name"/>` +
            `<tableColumn id="3" name="JobTitle"/><tableColumn id="4" name="HireDate"/></tableColumns>`;

        this._worksheetData =
            `<dimension ref="A1:D6"/><sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>` +
            `<sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/><cols><col min="1" max="1" width="50" customWidth="1"/>` +
            `<col min="2" max="2" width="14.416406250000001" customWidth="1"/><col min="3" max="3" width="26.001562500000002" ` +
            `customWidth="1"/><col min="4" max="4" width="26.33203125" customWidth="1"/></cols><sheetData><row r="1"><c r="A1" ` +
            `t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c><c r="D1" t="s"><v>3</v></c></row><row r="2">` +
            `<c r="A2" t="s"><v>4</v></c><c r="B2" t="s"><v>5</v></c><c r="C2" t="s"><v>6</v></c><c r="D2" t="s"><v>7</v></c></row>` +
            `<row r="3"><c r="A3" t="s"><v>8</v></c><c r="B3" t="s"><v>9</v></c><c r="C3" t="s"><v>10</v></c><c r="D3" t="s"><v>11</v>` +
            `</c></row><row r="4"><c r="A4" t="s"><v>12</v></c><c r="B4" t="s"><v>13</v></c><c r="C4" t="s"><v>10</v></c><c r="D4" t="s">` +
            `<v>14</v></c></row><row r="5"><c r="A5" t="s"><v>15</v></c><c r="B5" t="s"><v>16</v></c><c r="C5" t="s"><v>17</v></c><c r="D5"` +
            ` t="s"><v>18</v></c></row><row r="6"><c r="A6" t="s"><v>19</v></c><c r="B6" t="s"><v>20</v></c><c r="C6" t="s"><v>21</v></c><c ` +
            `r="D6" t="s"><v>22</v></c></row></sheetData>`;

        return this.createData();
    }

    public get simpleGridDataRecord5() {
        this._sharedStringsData = `count="5" uniqueCount="5"><si><t>ID</t></si><si><t>Name</t></si><si><t>JobTitle</t></si><si><t>Celia Martinez</t></si><si><t>Senior Software Developer</t></si>`;

        this._tableData = `ref="A1:C2" totalsRowShown="0">
    <autoFilter ref="A1:C2"/><tableColumns count="3"><tableColumn id="1" name="ID"/><tableColumn id="2" name="Name"/>` +
            `<tableColumn id="3" name="JobTitle"/></tableColumns>`;

        this._worksheetData =
            `<dimension ref="A1:C2"/><sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews><sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/><cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="50" customWidth="1"/></cols><sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c></row><row r="2"><c r="A2" s="1"><v>5</v></c><c r="B2" t="s"><v>3</v></c><c r="C2" t="s"><v>4</v></c></row></sheetData>`;

        return this.createData();
    }

    public get simpleGridDataDirectors() {

        this._sharedStringsData = `count="7" uniqueCount="6"><si><t>ID</t></si><si><t>Name</t></si><si><t>JobTitle</t></si><si><t>Gilberto Todd</t></si><si><t>Director</t></si><si><t>Tanya Bennett</t></si>`;

        this._tableData = `ref="A1:C3" totalsRowShown="0">
    <autoFilter ref="A1:C3"/><tableColumns count="3"><tableColumn id="1" name="ID"/><tableColumn id="2" name="Name"/><tableColumn id="3" name="JobTitle"/></tableColumns>`;

        this._worksheetData =
            `<dimension ref="A1:C3"/><sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews><sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/><cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="50" customWidth="1"/></cols><sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c></row><row r="2"><c r="A2" s="1"><v>2</v></c><c r="B2" t="s"><v>3</v></c><c r="C2" t="s"><v>4</v></c></row><row r="3"><c r="A3" s="1"><v>3</v></c><c r="B3" t="s"><v>5</v></c><c r="C3" t="s"><v>4</v></c></row></sheetData>`;

        return this.createData();
    }

    public get simpleGridNameJobTitle() {
        this._sharedStringsData = `count="22" uniqueCount="20"><si><t>Name</t></si><si><t>JobTitle</t></si><si><t>Casey Houston</t></si>` +
            `<si><t>Vice President</t></si><si><t>Gilberto Todd</t></si><si><t>Director</t></si><si><t>Tanya Bennett</t></si><si>` +
            `<t>Jack Simon</t></si><si><t>Software Developer</t></si><si><t>Celia Martinez</t></si><si><t>Senior Software Developer</t>` +
            `</si><si><t>Erma Walsh</t></si><si><t>CEO</t></si><si><t>Debra Morton</t></si><si><t>Associate Software Developer</t></si>` +
            `<si><t>Erika Wells</t></si><si><t>Software Development Team Lead</t></si><si><t>Leslie Hansen</t></si><si><t>Eduardo Ramirez</t>` +
            `</si><si><t>Manager</t></si>`;

        this._tableData = `ref="A1:B11" totalsRowShown="0">
        <autoFilter ref="A1:B11"/><tableColumns count="2"><tableColumn id="1" name="Name"/><tableColumn id="2" name="JobTitle"/>` +
            `</tableColumns>`;

        this._worksheetData =
            `<dimension ref="A1:B11"/><sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>` +
            `<sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/><cols><col min="1" max="1" width="50" customWidth="1"/>` +
            `<col min="2" max="2" width="50" customWidth="1"/></cols><sheetData><row r="1"><c r="A1" t="s"><v>0</v></c>` +
            `<c r="B1" t="s"><v>1</v></c></row><row r="2"><c r="A2" t="s"><v>2</v></c><c r="B2" t="s"><v>3</v></c></row><row r="3">` +
            `<c r="A3" t="s"><v>4</v></c><c r="B3" t="s"><v>5</v></c></row><row r="4"><c r="A4" t="s"><v>6</v></c><c r="B4" t="s"><v>5</v>` +
            `</c></row><row r="5"><c r="A5" t="s"><v>7</v></c><c r="B5" t="s"><v>8</v></c></row><row r="6"><c r="A6" t="s"><v>9</v></c>` +
            `<c r="B6" t="s"><v>10</v></c></row><row r="7"><c r="A7" t="s"><v>11</v></c><c r="B7" t="s"><v>12</v></c></row><row r="8">` +
            `<c r="A8" t="s"><v>13</v></c><c r="B8" t="s"><v>14</v></c></row><row r="9"><c r="A9" t="s"><v>15</v></c><c r="B9" t="s">` +
            `<v>16</v></c></row><row r="10"><c r="A10" t="s"><v>17</v></c><c r="B10" t="s"><v>14</v></c></row><row r="11"><c r="A11" t="s">` +
            `<v>18</v></c><c r="B11" t="s"><v>19</v></c></row></sheetData>`;

        return this.createData();
    }

    public get simpleGridNameJobTitleWithFormatting() {
        this._sharedStringsData = `count="33" uniqueCount="31"><si><t>ID</t></si><si><t>Name</t></si><si><t>JobTitle</t></si><si><t>one</t></si><si><t>Casey Houston</t></si><si><t>Vice President</t></si><si><t>two</t></si><si><t>Gilberto Todd</t></si><si><t>Director</t></si><si><t>three</t></si><si><t>Tanya Bennett</t></si><si><t>four</t></si><si><t>Jack Simon</t></si><si><t>Software Developer</t></si><si><t>five</t></si><si><t>Celia Martinez</t></si><si><t>Senior Software Developer</t></si><si><t>six</t></si><si><t>Erma Walsh</t></si><si><t>CEO</t></si><si><t>seven</t></si><si><t>Debra Morton</t></si><si><t>Associate Software Developer</t></si><si><t>eight</t></si><si><t>Erika Wells</t></si><si><t>Software Development Team Lead</t></si><si><t>nine</t></si><si><t>Leslie Hansen</t></si><si><t>ten</t></si><si><t>Eduardo Ramirez</t></si><si><t>Manager</t></si>`;

        this._tableData = `ref="A1:C11" totalsRowShown="0">
        <autoFilter ref="A1:C11"/><tableColumns count="3"><tableColumn id="1" name="ID"/><tableColumn id="2" name="Name"/><tableColumn id="3" name="JobTitle"/></tableColumns>`;

        this._worksheetData =
            `<dimension ref="A1:C11"/>
            <sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>
            <sheetFormatPr defaultRowHeight="15"  x14ac:dyDescent="0.25"/>
            <cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="50" customWidth="1"/></cols>
            <sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c></row><row r="2"><c r="A2" t="s"><v>3</v></c><c r="B2" t="s"><v>4</v></c><c r="C2" t="s"><v>5</v></c></row><row r="3"><c r="A3" t="s"><v>6</v></c><c r="B3" t="s"><v>7</v></c><c r="C3" t="s"><v>8</v></c></row><row r="4"><c r="A4" t="s"><v>9</v></c><c r="B4" t="s"><v>10</v></c><c r="C4" t="s"><v>8</v></c></row><row r="5"><c r="A5" t="s"><v>11</v></c><c r="B5" t="s"><v>12</v></c><c r="C5" t="s"><v>13</v></c></row><row r="6"><c r="A6" t="s"><v>14</v></c><c r="B6" t="s"><v>15</v></c><c r="C6" t="s"><v>16</v></c></row><row r="7"><c r="A7" t="s"><v>17</v></c><c r="B7" t="s"><v>18</v></c><c r="C7" t="s"><v>19</v></c></row><row r="8"><c r="A8" t="s"><v>20</v></c><c r="B8" t="s"><v>21</v></c><c r="C8" t="s"><v>22</v></c></row><row r="9"><c r="A9" t="s"><v>23</v></c><c r="B9" t="s"><v>24</v></c><c r="C9" t="s"><v>25</v></c></row><row r="10"><c r="A10" t="s"><v>26</v></c><c r="B10" t="s"><v>27</v></c><c r="C10" t="s"><v>22</v></c></row><row r="11"><c r="A11" t="s"><v>28</v></c><c r="B11" t="s"><v>29</v></c><c r="C11" t="s"><v>30</v></c></row></sheetData>`;

        return this.createData();
    }

    public get simpleGridNameJobTitleID() {
        this._sharedStringsData =
            `count="23" uniqueCount="21"><si><t>Name</t></si><si><t>JobTitle</t></si><si><t>ID</t></si><si><t>Casey Houston</t></si><si><t>Vice President</t></si><si><t>Gilberto Todd</t></si><si><t>Director</t></si><si><t>Tanya Bennett</t></si><si><t>Jack Simon</t></si><si><t>Software Developer</t></si><si><t>Celia Martinez</t></si><si><t>Senior Software Developer</t></si><si><t>Erma Walsh</t></si><si><t>CEO</t></si><si><t>Debra Morton</t></si><si><t>Associate Software Developer</t></si><si><t>Erika Wells</t></si><si><t>Software Development Team Lead</t></si><si><t>Leslie Hansen</t></si><si><t>Eduardo Ramirez</t></si><si><t>Manager</t></si>`;

        this._tableData = `ref="A1:C11" totalsRowShown="0">
    <autoFilter ref="A1:C11"/><tableColumns count="3"><tableColumn id="1" name="Name"/><tableColumn id="2" name="JobTitle"/><tableColumn id="3" name="ID"/></tableColumns>`;

        this._worksheetData =
            `<dimension ref="A1:C11"/><sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews><sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/><cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="50" customWidth="1"/></cols><sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c></row><row r="2"><c r="A2" t="s"><v>3</v></c><c r="B2" t="s"><v>4</v></c><c r="C2" s="1"><v>1</v></c></row><row r="3"><c r="A3" t="s"><v>5</v></c><c r="B3" t="s"><v>6</v></c><c r="C3" s="1"><v>2</v></c></row><row r="4"><c r="A4" t="s"><v>7</v></c><c r="B4" t="s"><v>6</v></c><c r="C4" s="1"><v>3</v></c></row><row r="5"><c r="A5" t="s"><v>8</v></c><c r="B5" t="s"><v>9</v></c><c r="C5" s="1"><v>4</v></c></row><row r="6"><c r="A6" t="s"><v>10</v></c><c r="B6" t="s"><v>11</v></c><c r="C6" s="1"><v>5</v></c></row><row r="7"><c r="A7" t="s"><v>12</v></c><c r="B7" t="s"><v>13</v></c><c r="C7" s="1"><v>6</v></c></row><row r="8"><c r="A8" t="s"><v>14</v></c><c r="B8" t="s"><v>15</v></c><c r="C8" s="1"><v>7</v></c></row><row r="9"><c r="A9" t="s"><v>16</v></c><c r="B9" t="s"><v>17</v></c><c r="C9" s="1"><v>8</v></c></row><row r="10"><c r="A10" t="s"><v>18</v></c><c r="B10" t="s"><v>15</v></c><c r="C10" s="1"><v>9</v></c></row><row r="11"><c r="A11" t="s"><v>19</v></c><c r="B11" t="s"><v>20</v></c><c r="C11" s="1"><v>10</v></c></row></sheetData>`;

        return this.createData();
    }

    public get simpleGridSortByName() {
        this._sharedStringsData = `count="23" uniqueCount="21"><si><t>ID</t></si><si><t>Name</t></si><si><t>JobTitle</t></si>` +
            `<si><t>Casey Houston</t></si><si><t>Vice President</t></si><si><t>Celia Martinez</t></si><si><t>Senior Software Developer</t></si>` +
            `<si><t>Debra Morton</t></si><si><t>Associate Software Developer</t></si><si><t>Eduardo Ramirez</t></si><si><t>Manager</t></si>` +
            `<si><t>Erika Wells</t></si><si><t>Software Development Team Lead</t></si><si><t>Erma Walsh</t></si><si><t>CEO</t></si>` +
            `<si><t>Gilberto Todd</t></si><si><t>Director</t></si><si><t>Jack Simon</t></si><si><t>Software Developer</t></si>` +
            `<si><t>Leslie Hansen</t></si><si><t>Tanya Bennett</t></si>`;

        this._tableData = `ref="A1:C11" totalsRowShown="0">
        <autoFilter ref="A1:C11"/><tableColumns count="3"><tableColumn id="1" name="ID"/><tableColumn id="2" name="Name"/><tableColumn id="3" name="JobTitle"/></tableColumns>`;

        this._worksheetData = `<dimension ref="A1:C11"/><sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews><sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/><cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="50" customWidth="1"/></cols><sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c></row><row r="2"><c r="A2" s="1"><v>1</v></c><c r="B2" t="s"><v>3</v></c><c r="C2" t="s"><v>4</v></c></row><row r="3"><c r="A3" s="1"><v>5</v></c><c r="B3" t="s"><v>5</v></c><c r="C3" t="s"><v>6</v></c></row><row r="4"><c r="A4" s="1"><v>7</v></c><c r="B4" t="s"><v>7</v></c><c r="C4" t="s"><v>8</v></c></row><row r="5"><c r="A5" s="1"><v>10</v></c><c r="B5" t="s"><v>9</v></c><c r="C5" t="s"><v>10</v></c></row><row r="6"><c r="A6" s="1"><v>8</v></c><c r="B6" t="s"><v>11</v></c><c r="C6" t="s"><v>12</v></c></row><row r="7"><c r="A7" s="1"><v>6</v></c><c r="B7" t="s"><v>13</v></c><c r="C7" t="s"><v>14</v></c></row><row r="8"><c r="A8" s="1"><v>2</v></c><c r="B8" t="s"><v>15</v></c><c r="C8" t="s"><v>16</v></c></row><row r="9"><c r="A9" s="1"><v>4</v></c><c r="B9" t="s"><v>17</v></c><c r="C9" t="s"><v>18</v></c></row><row r="10"><c r="A10" s="1"><v>9</v></c><c r="B10" t="s"><v>19</v></c><c r="C10" t="s"><v>8</v></c></row><row r="11"><c r="A11" s="1"><v>3</v></c><c r="B11" t="s"><v>20</v></c><c r="C11" t="s"><v>16</v></c></row></sheetData>`;

        return this.createData();
    }

    public get simpleGridJobTitleIDName() {
        this._sharedStringsData =
            `count="23" uniqueCount="21"><si><t>JobTitle</t></si><si><t>ID</t></si><si><t>Name</t></si><si><t>Vice President</t></si><si><t>Casey Houston</t></si><si><t>Director</t></si><si><t>Gilberto Todd</t></si><si><t>Tanya Bennett</t></si><si><t>Software Developer</t></si><si><t>Jack Simon</t></si><si><t>Senior Software Developer</t></si><si><t>Celia Martinez</t></si><si><t>CEO</t></si><si><t>Erma Walsh</t></si><si><t>Associate Software Developer</t></si><si><t>Debra Morton</t></si><si><t>Software Development Team Lead</t></si><si><t>Erika Wells</t></si><si><t>Leslie Hansen</t></si><si><t>Manager</t></si><si><t>Eduardo Ramirez</t></si>`;

        this._tableData = `ref="A1:C11" totalsRowShown="0">
    <autoFilter ref="A1:C11"/><tableColumns count="3"><tableColumn id="1" name="JobTitle"/><tableColumn id="2" name="ID"/><tableColumn id="3" name="Name"/></tableColumns>`;

        this._worksheetData =
            `<dimension ref="A1:C11"/><sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews><sheetFormatPr defaultRowHeight="15"  x14ac:dyDescent="0.25"/><cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="50" customWidth="1"/></cols><sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c></row><row r="2"><c r="A2" t="s"><v>3</v></c><c r="B2" s="1"><v>1</v></c><c r="C2" t="s"><v>4</v></c></row><row r="3"><c r="A3" t="s"><v>5</v></c><c r="B3" s="1"><v>2</v></c><c r="C3" t="s"><v>6</v></c></row><row r="4"><c r="A4" t="s"><v>5</v></c><c r="B4" s="1"><v>3</v></c><c r="C4" t="s"><v>7</v></c></row><row r="5"><c r="A5" t="s"><v>8</v></c><c r="B5" s="1"><v>4</v></c><c r="C5" t="s"><v>9</v></c></row><row r="6"><c r="A6" t="s"><v>10</v></c><c r="B6" s="1"><v>5</v></c><c r="C6" t="s"><v>11</v></c></row><row r="7"><c r="A7" t="s"><v>12</v></c><c r="B7" s="1"><v>6</v></c><c r="C7" t="s"><v>13</v></c></row><row r="8"><c r="A8" t="s"><v>14</v></c><c r="B8" s="1"><v>7</v></c><c r="C8" t="s"><v>15</v></c></row><row r="9"><c r="A9" t="s"><v>16</v></c><c r="B9" s="1"><v>8</v></c><c r="C9" t="s"><v>17</v></c></row><row r="10"><c r="A10" t="s"><v>14</v></c><c r="B10" s="1"><v>9</v></c><c r="C10" t="s"><v>18</v></c></row><row r="11"><c r="A11" t="s"><v>19</v></c><c r="B11" s="1"><v>10</v></c><c r="C11" t="s"><v>20</v></c></row></sheetData>`;

        return this.createData();
    }

    private updateColumnWidth(width: number) {
        let wsDataColSettings = '';

        switch (width) {
            case 100:
                wsDataColSettings =
                    `<cols><col min="1" max="1" width="100" customWidth="1"/></cols>`;
                break;
            case 200:
                wsDataColSettings =
                    `<cols><col min="1" max="1" width="200" customWidth="1"/></cols>`;
                break;
            case null:
            case 0:
                wsDataColSettings =
                    `<cols><col min="1" max="1" width="8.43" customWidth="1"/></cols>`;
                break;
        }

        return wsDataColSettings;
    }

    private updateRowHeight(height: number) {
        let wsSettings =
            `<dimension ref="A1:C11"/><sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews><sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/><cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="50" customWidth="1"/></cols><sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c></row><row r="2"><c r="A2" s="1"><v>1</v></c><c r="B2" t="s"><v>3</v></c><c r="C2" t="s"><v>4</v></c></row><row r="3"><c r="A3" s="1"><v>2</v></c><c r="B3" t="s"><v>5</v></c><c r="C3" t="s"><v>6</v></c></row><row r="4"><c r="A4" s="1"><v>3</v></c><c r="B4" t="s"><v>7</v></c><c r="C4" t="s"><v>6</v></c></row><row r="5"><c r="A5" s="1"><v>4</v></c><c r="B5" t="s"><v>8</v></c><c r="C5" t="s"><v>9</v></c></row><row r="6"><c r="A6" s="1"><v>5</v></c><c r="B6" t="s"><v>10</v></c><c r="C6" t="s"><v>11</v></c></row><row r="7"><c r="A7" s="1"><v>6</v></c><c r="B7" t="s"><v>12</v></c><c r="C7" t="s"><v>13</v></c></row><row r="8"><c r="A8" s="1"><v>7</v></c><c r="B8" t="s"><v>14</v></c><c r="C8" t="s"><v>15</v></c></row><row r="9"><c r="A9" s="1"><v>8</v></c><c r="B9" t="s"><v>16</v></c><c r="C9" t="s"><v>17</v></c></row><row r="10"><c r="A10" s="1"><v>9</v></c><c r="B10" t="s"><v>18</v></c><c r="C10" t="s"><v>15</v></c></row><row r="11"><c r="A11" s="1"><v>10</v></c><c r="B11" t="s"><v>19</v></c><c r="C11" t="s"><v>20</v></c></row></sheetData>`;

        switch (height) {
            case 20:
                wsSettings =
                    `<dimension ref="A1:C11"/><sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews><sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/><cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="50" customWidth="1"/></cols><sheetData><row r="1" ht="20" customHeight="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c></row><row r="2" ht="20" customHeight="1"><c r="A2" s="1"><v>1</v></c><c r="B2" t="s"><v>3</v></c><c r="C2" t="s"><v>4</v></c></row><row r="3" ht="20" customHeight="1"><c r="A3" s="1"><v>2</v></c><c r="B3" t="s"><v>5</v></c><c r="C3" t="s"><v>6</v></c></row><row r="4" ht="20" customHeight="1"><c r="A4" s="1"><v>3</v></c><c r="B4" t="s"><v>7</v></c><c r="C4" t="s"><v>6</v></c></row><row r="5" ht="20" customHeight="1"><c r="A5" s="1"><v>4</v></c><c r="B5" t="s"><v>8</v></c><c r="C5" t="s"><v>9</v></c></row><row r="6" ht="20" customHeight="1"><c r="A6" s="1"><v>5</v></c><c r="B6" t="s"><v>10</v></c><c r="C6" t="s"><v>11</v></c></row><row r="7" ht="20" customHeight="1"><c r="A7" s="1"><v>6</v></c><c r="B7" t="s"><v>12</v></c><c r="C7" t="s"><v>13</v></c></row><row r="8" ht="20" customHeight="1"><c r="A8" s="1"><v>7</v></c><c r="B8" t="s"><v>14</v></c><c r="C8" t="s"><v>15</v></c></row><row r="9" ht="20" customHeight="1"><c r="A9" s="1"><v>8</v></c><c r="B9" t="s"><v>16</v></c><c r="C9" t="s"><v>17</v></c></row><row r="10" ht="20" customHeight="1"><c r="A10" s="1"><v>9</v></c><c r="B10" t="s"><v>18</v></c><c r="C10" t="s"><v>15</v></c></row><row r="11" ht="20" customHeight="1"><c r="A11" s="1"><v>10</v></c><c r="B11" t="s"><v>19</v></c><c r="C11" t="s"><v>20</v></c></row></sheetData>`;

                break;
            case 40:
                wsSettings =
                    `<dimension ref="A1:C11"/><sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews><sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/><cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="50" customWidth="1"/></cols><sheetData><row r="1" ht="40" customHeight="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c></row><row r="2" ht="40" customHeight="1"><c r="A2" s="1"><v>1</v></c><c r="B2" t="s"><v>3</v></c><c r="C2" t="s"><v>4</v></c></row><row r="3" ht="40" customHeight="1"><c r="A3" s="1"><v>2</v></c><c r="B3" t="s"><v>5</v></c><c r="C3" t="s"><v>6</v></c></row><row r="4" ht="40" customHeight="1"><c r="A4" s="1"><v>3</v></c><c r="B4" t="s"><v>7</v></c><c r="C4" t="s"><v>6</v></c></row><row r="5" ht="40" customHeight="1"><c r="A5" s="1"><v>4</v></c><c r="B5" t="s"><v>8</v></c><c r="C5" t="s"><v>9</v></c></row><row r="6" ht="40" customHeight="1"><c r="A6" s="1"><v>5</v></c><c r="B6" t="s"><v>10</v></c><c r="C6" t="s"><v>11</v></c></row><row r="7" ht="40" customHeight="1"><c r="A7" s="1"><v>6</v></c><c r="B7" t="s"><v>12</v></c><c r="C7" t="s"><v>13</v></c></row><row r="8" ht="40" customHeight="1"><c r="A8" s="1"><v>7</v></c><c r="B8" t="s"><v>14</v></c><c r="C8" t="s"><v>15</v></c></row><row r="9" ht="40" customHeight="1"><c r="A9" s="1"><v>8</v></c><c r="B9" t="s"><v>16</v></c><c r="C9" t="s"><v>17</v></c></row><row r="10" ht="40" customHeight="1"><c r="A10" s="1"><v>9</v></c><c r="B10" t="s"><v>18</v></c><c r="C10" t="s"><v>15</v></c></row><row r="11" ht="40" customHeight="1"><c r="A11" s="1"><v>10</v></c><c r="B11" t="s"><v>19</v></c><c r="C11" t="s"><v>20</v></c></row></sheetData>`;
                break;
            case undefined:
            case null:
            case 0:
                break;
        }

        return wsSettings;
    }

    public get gridNameIDJobTitle() {
        this._sharedStringsData =
            `count="23" uniqueCount="21"><si><t>Name</t></si><si><t>ID</t></si><si><t>JobTitle</t></si><si><t>Casey Houston</t></si><si><t>Vice President</t></si><si><t>Gilberto Todd</t></si><si><t>Director</t></si><si><t>Tanya Bennett</t></si><si><t>Jack Simon</t></si><si><t>Software Developer</t></si><si><t>Celia Martinez</t></si><si><t>Senior Software Developer</t></si><si><t>Erma Walsh</t></si><si><t>CEO</t></si><si><t>Debra Morton</t></si><si><t>Associate Software Developer</t></si><si><t>Erika Wells</t></si><si><t>Software Development Team Lead</t></si><si><t>Leslie Hansen</t></si><si><t>Eduardo Ramirez</t></si><si><t>Manager</t></si>`;

        this._tableData = `ref="A1:C11" totalsRowShown="0">
        <autoFilter ref="A1:C11"/><tableColumns count="3"><tableColumn id="1" name="Name"/><tableColumn id="2" name="ID"/>` +
            `<tableColumn id="3" name="JobTitle"/></tableColumns>`;

        this._worksheetData =
            `<dimension ref="A1:C11"/><sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews><sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/><cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="50" customWidth="1"/></cols><sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c></row><row r="2"><c r="A2" t="s"><v>3</v></c><c r="B2" s="1"><v>1</v></c><c r="C2" t="s"><v>4</v></c></row><row r="3"><c r="A3" t="s"><v>5</v></c><c r="B3" s="1"><v>2</v></c><c r="C3" t="s"><v>6</v></c></row><row r="4"><c r="A4" t="s"><v>7</v></c><c r="B4" s="1"><v>3</v></c><c r="C4" t="s"><v>6</v></c></row><row r="5"><c r="A5" t="s"><v>8</v></c><c r="B5" s="1"><v>4</v></c><c r="C5" t="s"><v>9</v></c></row><row r="6"><c r="A6" t="s"><v>10</v></c><c r="B6" s="1"><v>5</v></c><c r="C6" t="s"><v>11</v></c></row><row r="7"><c r="A7" t="s"><v>12</v></c><c r="B7" s="1"><v>6</v></c><c r="C7" t="s"><v>13</v></c></row><row r="8"><c r="A8" t="s"><v>14</v></c><c r="B8" s="1"><v>7</v></c><c r="C8" t="s"><v>15</v></c></row><row r="9"><c r="A9" t="s"><v>16</v></c><c r="B9" s="1"><v>8</v></c><c r="C9" t="s"><v>17</v></c></row><row r="10"><c r="A10" t="s"><v>18</v></c><c r="B10" s="1"><v>9</v></c><c r="C10" t="s"><v>15</v></c></row><row r="11"><c r="A11" t="s"><v>19</v></c><c r="B11" s="1"><v>10</v></c><c r="C11" t="s"><v>20</v></c></row></sheetData>`;

        return this.createData();
    }

    public get gridNameFrozen() {
        this._sharedStringsData =
            `count="23" uniqueCount="21"><si><t>Name</t></si><si><t>ID</t></si><si><t>JobTitle</t></si><si><t>Casey Houston</t></si><si><t>Vice President</t></si><si><t>Gilberto Todd</t></si><si><t>Director</t></si><si><t>Tanya Bennett</t></si><si><t>Jack Simon</t></si><si><t>Software Developer</t></si><si><t>Celia Martinez</t></si><si><t>Senior Software Developer</t></si><si><t>Erma Walsh</t></si><si><t>CEO</t></si><si><t>Debra Morton</t></si><si><t>Associate Software Developer</t></si><si><t>Erika Wells</t></si><si><t>Software Development Team Lead</t></si><si><t>Leslie Hansen</t></si><si><t>Eduardo Ramirez</t></si><si><t>Manager</t></si>`;

        this._tableData = `ref="A1:C11" totalsRowShown="0">
        <autoFilter ref="A1:C11"/><tableColumns count="3"><tableColumn id="1" name="Name"/><tableColumn id="2" name="ID"/>` +
            `<tableColumn id="3" name="JobTitle"/></tableColumns>`;

        this._worksheetData = `<dimension ref="A1:C11"/><sheetViews><sheetView tabSelected="1" workbookViewId="0"><pane xSplit="1" topLeftCell="B1" activePane="topRight" state="frozen"/></sheetView></sheetViews><sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/><cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="50" customWidth="1"/></cols><sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c></row><row r="2"><c r="A2" t="s"><v>3</v></c><c r="B2" s="1"><v>1</v></c><c r="C2" t="s"><v>4</v></c></row><row r="3"><c r="A3" t="s"><v>5</v></c><c r="B3" s="1"><v>2</v></c><c r="C3" t="s"><v>6</v></c></row><row r="4"><c r="A4" t="s"><v>7</v></c><c r="B4" s="1"><v>3</v></c><c r="C4" t="s"><v>6</v></c></row><row r="5"><c r="A5" t="s"><v>8</v></c><c r="B5" s="1"><v>4</v></c><c r="C5" t="s"><v>9</v></c></row><row r="6"><c r="A6" t="s"><v>10</v></c><c r="B6" s="1"><v>5</v></c><c r="C6" t="s"><v>11</v></c></row><row r="7"><c r="A7" t="s"><v>12</v></c><c r="B7" s="1"><v>6</v></c><c r="C7" t="s"><v>13</v></c></row><row r="8"><c r="A8" t="s"><v>14</v></c><c r="B8" s="1"><v>7</v></c><c r="C8" t="s"><v>15</v></c></row><row r="9"><c r="A9" t="s"><v>16</v></c><c r="B9" s="1"><v>8</v></c><c r="C9" t="s"><v>17</v></c></row><row r="10"><c r="A10" t="s"><v>18</v></c><c r="B10" s="1"><v>9</v></c><c r="C10" t="s"><v>15</v></c></row><row r="11"><c r="A11" t="s"><v>19</v></c><c r="B11" s="1"><v>10</v></c><c r="C11" t="s"><v>20</v></c></row></sheetData>`;

        return this.createData();
    }

    public get gridJobTitleIdFrozen() {
        this._sharedStringsData = `count="23" uniqueCount="21"><si><t>JobTitle</t></si><si><t>ID</t></si><si><t>Name</t></si><si><t>Vice President</t></si><si><t>Casey Houston</t></si><si><t>Director</t></si><si><t>Gilberto Todd</t></si><si><t>Tanya Bennett</t></si><si><t>Software Developer</t></si><si><t>Jack Simon</t></si><si><t>Senior Software Developer</t></si><si><t>Celia Martinez</t></si><si><t>CEO</t></si><si><t>Erma Walsh</t></si><si><t>Associate Software Developer</t></si><si><t>Debra Morton</t></si><si><t>Software Development Team Lead</t></si><si><t>Erika Wells</t></si><si><t>Leslie Hansen</t></si><si><t>Manager</t></si><si><t>Eduardo Ramirez</t></si>`;

        this._tableData = `ref="A1:C11" totalsRowShown="0">
        <autoFilter ref="A1:C11"/><tableColumns count="3"><tableColumn id="1" name="JobTitle"/><tableColumn id="2" name="ID"/><tableColumn id="3" name="Name"/></tableColumns>`;

        this._worksheetData = `<dimension ref="A1:C11"/>
        <sheetViews><sheetView tabSelected="1" workbookViewId="0"><pane xSplit="2" topLeftCell="C1" activePane="topRight" state="frozen"/></sheetView></sheetViews>
        <sheetFormatPr defaultRowHeight="15"  x14ac:dyDescent="0.25"/>
        <cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="50" customWidth="1"/></cols>
        <sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c></row><row r="2"><c r="A2" t="s"><v>3</v></c><c r="B2" s="1"><v>1</v></c><c r="C2" t="s"><v>4</v></c></row><row r="3"><c r="A3" t="s"><v>5</v></c><c r="B3" s="1"><v>2</v></c><c r="C3" t="s"><v>6</v></c></row><row r="4"><c r="A4" t="s"><v>5</v></c><c r="B4" s="1"><v>3</v></c><c r="C4" t="s"><v>7</v></c></row><row r="5"><c r="A5" t="s"><v>8</v></c><c r="B5" s="1"><v>4</v></c><c r="C5" t="s"><v>9</v></c></row><row r="6"><c r="A6" t="s"><v>10</v></c><c r="B6" s="1"><v>5</v></c><c r="C6" t="s"><v>11</v></c></row><row r="7"><c r="A7" t="s"><v>12</v></c><c r="B7" s="1"><v>6</v></c><c r="C7" t="s"><v>13</v></c></row><row r="8"><c r="A8" t="s"><v>14</v></c><c r="B8" s="1"><v>7</v></c><c r="C8" t="s"><v>15</v></c></row><row r="9"><c r="A9" t="s"><v>16</v></c><c r="B9" s="1"><v>8</v></c><c r="C9" t="s"><v>17</v></c></row><row r="10"><c r="A10" t="s"><v>14</v></c><c r="B10" s="1"><v>9</v></c><c r="C10" t="s"><v>18</v></c></row><row r="11"><c r="A11" t="s"><v>19</v></c><c r="B11" s="1"><v>10</v></c><c r="C11" t="s"><v>20</v></c></row></sheetData>`;

        return this.createData();
    }

    public get treeGridData() {
        this._sharedStringsData =
            `count="21" uniqueCount="19"><si><t>ID</t></si><si><t>ParentID</t></si><si><t>Name</t></si><si><t>JobTitle</t></si><si><t>Age</t></si><si><t>Casey Houston</t></si><si><t>Vice President</t></si><si><t>Gilberto Todd</t></si><si><t>Director</t></si><si><t>Tanya Bennett</t></si><si><t>Debra Morton</t></si><si><t>Associate Software Developer</t></si><si><t>Jack Simon</t></si><si><t>Software Developer</t></si><si><t>Erma Walsh</t></si><si><t>CEO</t></si><si><t>Eduardo Ramirez</t></si><si><t>Manager</t></si><si><t>Leslie Hansen</t></si>`;

        this._tableData = `ref="A1:E9" totalsRowShown="0">
    <autoFilter ref="A1:E9"/><tableColumns count="5"><tableColumn id="1" name="ID"/><tableColumn id="2" name="ParentID"/><tableColumn id="3" name="Name"/><tableColumn id="4" name="JobTitle"/><tableColumn id="5" name="Age"/></tableColumns>`;

        this._worksheetData = `
<sheetPr><outlinePr summaryBelow="0" /></sheetPr>
<dimension ref="A1:E9"/>
<sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>
<sheetFormatPr defaultRowHeight="15" outlineLevelRow="2" x14ac:dyDescent="0.25"/>
<cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="50" customWidth="1"/><col min="4" max="4" width="50" customWidth="1"/><col min="5" max="5" width="50" customWidth="1"/></cols>
<sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c><c r="D1" t="s"><v>3</v></c><c r="E1" t="s"><v>4</v></c></row><row r="2"><c r="A2" s="1"><v>1</v></c><c r="B2" s="1"><v>-1</v></c><c r="C2" t="s"><v>5</v></c><c r="D2" t="s"><v>6</v></c><c r="E2" s="1"><v>32</v></c></row><row r="3" outlineLevel="1"><c r="A3" s="1"><v>2</v></c><c r="B3" s="1"><v>1</v></c><c r="C3" t="s"><v>7</v></c><c r="D3" t="s"><v>8</v></c><c r="E3" s="1"><v>41</v></c></row><row r="4" outlineLevel="2"><c r="A4" s="1"><v>3</v></c><c r="B4" s="1"><v>2</v></c><c r="C4" t="s"><v>9</v></c><c r="D4" t="s"><v>8</v></c><c r="E4" s="1"><v>29</v></c></row><row r="5" outlineLevel="2"><c r="A5" s="1"><v>7</v></c><c r="B5" s="1"><v>2</v></c><c r="C5" t="s"><v>10</v></c><c r="D5" t="s"><v>11</v></c><c r="E5" s="1"><v>35</v></c></row><row r="6" outlineLevel="1"><c r="A6" s="1"><v>4</v></c><c r="B6" s="1"><v>1</v></c><c r="C6" t="s"><v>12</v></c><c r="D6" t="s"><v>13</v></c><c r="E6" s="1"><v>33</v></c></row><row r="7"><c r="A7" s="1"><v>6</v></c><c r="B7" s="1"><v>-1</v></c><c r="C7" t="s"><v>14</v></c><c r="D7" t="s"><v>15</v></c><c r="E7" s="1"><v>52</v></c></row><row r="8"><c r="A8" s="1"><v>10</v></c><c r="B8" s="1"><v>-1</v></c><c r="C8" t="s"><v>16</v></c><c r="D8" t="s"><v>17</v></c><c r="E8" s="1"><v>53</v></c></row><row r="9" outlineLevel="1"><c r="A9" s="1"><v>9</v></c><c r="B9" s="1"><v>10</v></c><c r="C9" t="s"><v>18</v></c><c r="D9" t="s"><v>11</v></c><c r="E9" s="1"><v>44</v></c></row></sheetData>`;

        return this.createData();
    }

    public get treeGridDataIgnoreFiltering() {
        this._sharedStringsData =
            `count="21" uniqueCount="19"><si><t>ID</t></si><si><t>ParentID</t></si><si><t>Name</t></si><si><t>JobTitle</t></si><si><t>Age</t></si><si><t>Casey Houston</t></si><si><t>Vice President</t></si><si><t>Gilberto Todd</t></si><si><t>Director</t></si><si><t>Tanya Bennett</t></si><si><t>Debra Morton</t></si><si><t>Associate Software Developer</t></si><si><t>Jack Simon</t></si><si><t>Software Developer</t></si><si><t>Erma Walsh</t></si><si><t>CEO</t></si><si><t>Eduardo Ramirez</t></si><si><t>Manager</t></si><si><t>Leslie Hansen</t></si>`;

        this._tableData = `ref="A1:E9" totalsRowShown="0">
        <autoFilter ref="A1:E9"/><tableColumns count="5"><tableColumn id="1" name="ID"/><tableColumn id="2" name="ParentID"/><tableColumn id="3" name="Name"/><tableColumn id="4" name="JobTitle"/><tableColumn id="5" name="Age"/></tableColumns>`;

        this._worksheetData = `<sheetPr><outlinePr summaryBelow="0"/></sheetPr>
        <dimension ref="A1:E9"/>
        <sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>
        <sheetFormatPr defaultRowHeight="15" outlineLevelRow="2" x14ac:dyDescent="0.25"/>
        <cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="50" customWidth="1"/><col min="4" max="4" width="50" customWidth="1"/><col min="5" max="5" width="50" customWidth="1"/></cols>
        <sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c><c r="D1" t="s"><v>3</v></c><c r="E1" t="s"><v>4</v></c></row><row r="2"><c r="A2" s="1"><v>1</v></c><c r="B2" s="1"><v>-1</v></c><c r="C2" t="s"><v>5</v></c><c r="D2" t="s"><v>6</v></c><c r="E2" s="1"><v>32</v></c></row><row r="3" outlineLevel="1"><c r="A3" s="1"><v>2</v></c><c r="B3" s="1"><v>1</v></c><c r="C3" t="s"><v>7</v></c><c r="D3" t="s"><v>8</v></c><c r="E3" s="1"><v>41</v></c></row><row r="4" outlineLevel="2"><c r="A4" s="1"><v>3</v></c><c r="B4" s="1"><v>2</v></c><c r="C4" t="s"><v>9</v></c><c r="D4" t="s"><v>8</v></c><c r="E4" s="1"><v>29</v></c></row><row r="5" outlineLevel="2"><c r="A5" s="1"><v>7</v></c><c r="B5" s="1"><v>2</v></c><c r="C5" t="s"><v>10</v></c><c r="D5" t="s"><v>11</v></c><c r="E5" s="1"><v>35</v></c></row><row r="6" outlineLevel="1"><c r="A6" s="1"><v>4</v></c><c r="B6" s="1"><v>1</v></c><c r="C6" t="s"><v>12</v></c><c r="D6" t="s"><v>13</v></c><c r="E6" s="1"><v>33</v></c></row><row r="7"><c r="A7" s="1"><v>6</v></c><c r="B7" s="1"><v>-1</v></c><c r="C7" t="s"><v>14</v></c><c r="D7" t="s"><v>15</v></c><c r="E7" s="1"><v>52</v></c></row><row r="8"><c r="A8" s="1"><v>10</v></c><c r="B8" s="1"><v>-1</v></c><c r="C8" t="s"><v>16</v></c><c r="D8" t="s"><v>17</v></c><c r="E8" s="1"><v>53</v></c></row><row r="9" outlineLevel="1" hidden="1"><c r="A9" s="1"><v>9</v></c><c r="B9" s="1"><v>10</v></c><c r="C9" t="s"><v>18</v></c><c r="D9" t="s"><v>11</v></c><c r="E9" s="1"><v>44</v></c></row></sheetData>`;

        return this.createData();
    }

    public get treeGridDataFormatted() {
        this._sharedStringsData =
            `count="21" uniqueCount="19"><si><t>ID</t></si><si><t>ParentID</t></si><si><t>Name</t></si><si><t>JobTitle</t></si><si><t>Age</t></si><si><t>Casey Houston</t></si><si><t>Vice President</t></si><si><t>Gilberto Todd</t></si><si><t>Director</t></si><si><t>Tanya Bennett</t></si><si><t>Debra Morton</t></si><si><t>Associate Software Developer</t></si><si><t>Jack Simon</t></si><si><t>Software Developer</t></si><si><t>Erma Walsh</t></si><si><t>CEO</t></si><si><t>Eduardo Ramirez</t></si><si><t>Manager</t></si><si><t>Leslie Hansen</t></si>`;

        this._tableData = `ref="A1:E9" totalsRowShown="0">
        <autoFilter ref="A1:E9"/><tableColumns count="5"><tableColumn id="1" name="ID"/><tableColumn id="2" name="ParentID"/><tableColumn id="3" name="Name"/><tableColumn id="4" name="JobTitle"/><tableColumn id="5" name="Age"/></tableColumns>`;

        this._worksheetData = `
        <sheetPr><outlinePr summaryBelow="0"/></sheetPr>
        <dimension ref="A1:E9"/>
        <sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>
        <sheetFormatPr defaultRowHeight="15" outlineLevelRow="2" x14ac:dyDescent="0.25"/>
        <cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="50" customWidth="1"/><col min="4" max="4" width="50" customWidth="1"/><col min="5" max="5" width="50" customWidth="1"/></cols>
        <sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c><c r="D1" t="s"><v>3</v></c><c r="E1" t="s"><v>4</v></c></row><row r="2"><c r="A2" s="1"><v>1</v></c><c r="B2" s="1"><v>-1</v></c><c r="C2" t="s"><v>5</v></c><c r="D2" t="s"><v>6</v></c><c r="E2" s="1"><v>32.42</v></c></row><row r="3" outlineLevel="1"><c r="A3" s="1"><v>2</v></c><c r="B3" s="1"><v>1</v></c><c r="C3" t="s"><v>7</v></c><c r="D3" t="s"><v>8</v></c><c r="E3" s="1"><v>41.42</v></c></row><row r="4" outlineLevel="2"><c r="A4" s="1"><v>3</v></c><c r="B4" s="1"><v>2</v></c><c r="C4" t="s"><v>9</v></c><c r="D4" t="s"><v>8</v></c><c r="E4" s="1"><v>29.92</v></c></row><row r="5" outlineLevel="2"><c r="A5" s="1"><v>7</v></c><c r="B5" s="1"><v>2</v></c><c r="C5" t="s"><v>10</v></c><c r="D5" t="s"><v>11</v></c><c r="E5" s="1"><v>35.67</v></c></row><row r="6" outlineLevel="1"><c r="A6" s="1"><v>4</v></c><c r="B6" s="1"><v>1</v></c><c r="C6" t="s"><v>12</v></c><c r="D6" t="s"><v>13</v></c><c r="E6" s="1"><v>33.5</v></c></row><row r="7"><c r="A7" s="1"><v>6</v></c><c r="B7" s="1"><v>-1</v></c><c r="C7" t="s"><v>14</v></c><c r="D7" t="s"><v>15</v></c><c r="E7" s="1"><v>52.58</v></c></row><row r="8"><c r="A8" s="1"><v>10</v></c><c r="B8" s="1"><v>-1</v></c><c r="C8" t="s"><v>16</v></c><c r="D8" t="s"><v>17</v></c><c r="E8" s="1"><v>53.67</v></c></row><row r="9" outlineLevel="1"><c r="A9" s="1"><v>9</v></c><c r="B9" s="1"><v>10</v></c><c r="C9" t="s"><v>18</v></c><c r="D9" t="s"><v>11</v></c><c r="E9" s="1"><v>44.67</v></c></row></sheetData>`;

        return this.createData();
    }

    public get treeGridDataSorted() {
        this._sharedStringsData =
            `count="21" uniqueCount="19"><si><t>ID</t></si><si><t>ParentID</t></si><si><t>Name</t></si><si><t>JobTitle</t></si><si><t>Age</t></si><si><t>Eduardo Ramirez</t></si><si><t>Manager</t></si><si><t>Leslie Hansen</t></si><si><t>Associate Software Developer</t></si><si><t>Erma Walsh</t></si><si><t>CEO</t></si><si><t>Casey Houston</t></si><si><t>Vice President</t></si><si><t>Jack Simon</t></si><si><t>Software Developer</t></si><si><t>Gilberto Todd</t></si><si><t>Director</t></si><si><t>Debra Morton</t></si><si><t>Tanya Bennett</t></si>`;

        this._tableData = `ref="A1:E9" totalsRowShown="0">
    <autoFilter ref="A1:E9"/><tableColumns count="5"><tableColumn id="1" name="ID"/><tableColumn id="2" name="ParentID"/><tableColumn id="3" name="Name"/><tableColumn id="4" name="JobTitle"/><tableColumn id="5" name="Age"/></tableColumns>`;

        this._worksheetData = `
<sheetPr><outlinePr summaryBelow="0" /></sheetPr>
<dimension ref="A1:E9"/>
<sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>
<sheetFormatPr defaultRowHeight="15" outlineLevelRow="2" x14ac:dyDescent="0.25"/>
<cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="50" customWidth="1"/><col min="4" max="4" width="50" customWidth="1"/><col min="5" max="5" width="50" customWidth="1"/></cols>
<sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c><c r="D1" t="s"><v>3</v></c><c r="E1" t="s"><v>4</v></c></row><row r="2"><c r="A2" s="1"><v>10</v></c><c r="B2" s="1"><v>-1</v></c><c r="C2" t="s"><v>5</v></c><c r="D2" t="s"><v>6</v></c><c r="E2" s="1"><v>53</v></c></row><row r="3" outlineLevel="1"><c r="A3" s="1"><v>9</v></c><c r="B3" s="1"><v>10</v></c><c r="C3" t="s"><v>7</v></c><c r="D3" t="s"><v>8</v></c><c r="E3" s="1"><v>44</v></c></row><row r="4"><c r="A4" s="1"><v>6</v></c><c r="B4" s="1"><v>-1</v></c><c r="C4" t="s"><v>9</v></c><c r="D4" t="s"><v>10</v></c><c r="E4" s="1"><v>52</v></c></row><row r="5"><c r="A5" s="1"><v>1</v></c><c r="B5" s="1"><v>-1</v></c><c r="C5" t="s"><v>11</v></c><c r="D5" t="s"><v>12</v></c><c r="E5" s="1"><v>32</v></c></row><row r="6" outlineLevel="1"><c r="A6" s="1"><v>4</v></c><c r="B6" s="1"><v>1</v></c><c r="C6" t="s"><v>13</v></c><c r="D6" t="s"><v>14</v></c><c r="E6" s="1"><v>33</v></c></row><row r="7" outlineLevel="1"><c r="A7" s="1"><v>2</v></c><c r="B7" s="1"><v>1</v></c><c r="C7" t="s"><v>15</v></c><c r="D7" t="s"><v>16</v></c><c r="E7" s="1"><v>41</v></c></row><row r="8" outlineLevel="2"><c r="A8" s="1"><v>7</v></c><c r="B8" s="1"><v>2</v></c><c r="C8" t="s"><v>17</v></c><c r="D8" t="s"><v>8</v></c><c r="E8" s="1"><v>35</v></c></row><row r="9" outlineLevel="2"><c r="A9" s="1"><v>3</v></c><c r="B9" s="1"><v>2</v></c><c r="C9" t="s"><v>18</v></c><c r="D9" t="s"><v>16</v></c><c r="E9" s="1"><v>29</v></c></row></sheetData>`;

        return this.createData();
    }

    public get treeGridDataFiltered() {
        this._sharedStringsData =
            `count="19" uniqueCount="18"><si><t>ID</t></si><si><t>ParentID</t></si><si><t>Name</t></si><si><t>JobTitle</t></si><si><t>Age</t></si><si><t>Casey Houston</t></si><si><t>Vice President</t></si><si><t>Gilberto Todd</t></si><si><t>Director</t></si><si><t>Debra Morton</t></si><si><t>Associate Software Developer</t></si><si><t>Jack Simon</t></si><si><t>Software Developer</t></si><si><t>Erma Walsh</t></si><si><t>CEO</t></si><si><t>Eduardo Ramirez</t></si><si><t>Manager</t></si><si><t>Leslie Hansen</t></si>`;

        this._tableData = `ref="A1:E8" totalsRowShown="0">
    <autoFilter ref="A1:E8"/><tableColumns count="5"><tableColumn id="1" name="ID"/><tableColumn id="2" name="ParentID"/><tableColumn id="3" name="Name"/><tableColumn id="4" name="JobTitle"/><tableColumn id="5" name="Age"/></tableColumns>`;

        this._worksheetData = `
<sheetPr><outlinePr summaryBelow="0" /></sheetPr>
<dimension ref="A1:E8"/>
<sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>
<sheetFormatPr defaultRowHeight="15" outlineLevelRow="2" x14ac:dyDescent="0.25"/>
<cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="50" customWidth="1"/><col min="4" max="4" width="50" customWidth="1"/><col min="5" max="5" width="50" customWidth="1"/></cols>
<sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c><c r="D1" t="s"><v>3</v></c><c r="E1" t="s"><v>4</v></c></row><row r="2"><c r="A2" s="1"><v>1</v></c><c r="B2" s="1"><v>-1</v></c><c r="C2" t="s"><v>5</v></c><c r="D2" t="s"><v>6</v></c><c r="E2" s="1"><v>32</v></c></row><row r="3" outlineLevel="1"><c r="A3" s="1"><v>2</v></c><c r="B3" s="1"><v>1</v></c><c r="C3" t="s"><v>7</v></c><c r="D3" t="s"><v>8</v></c><c r="E3" s="1"><v>41</v></c></row><row r="4" outlineLevel="2"><c r="A4" s="1"><v>7</v></c><c r="B4" s="1"><v>2</v></c><c r="C4" t="s"><v>9</v></c><c r="D4" t="s"><v>10</v></c><c r="E4" s="1"><v>35</v></c></row><row r="5" outlineLevel="1"><c r="A5" s="1"><v>4</v></c><c r="B5" s="1"><v>1</v></c><c r="C5" t="s"><v>11</v></c><c r="D5" t="s"><v>12</v></c><c r="E5" s="1"><v>33</v></c></row><row r="6"><c r="A6" s="1"><v>6</v></c><c r="B6" s="1"><v>-1</v></c><c r="C6" t="s"><v>13</v></c><c r="D6" t="s"><v>14</v></c><c r="E6" s="1"><v>52</v></c></row><row r="7"><c r="A7" s="1"><v>10</v></c><c r="B7" s="1"><v>-1</v></c><c r="C7" t="s"><v>15</v></c><c r="D7" t="s"><v>16</v></c><c r="E7" s="1"><v>53</v></c></row><row r="8" outlineLevel="1"><c r="A8" s="1"><v>9</v></c><c r="B8" s="1"><v>10</v></c><c r="C8" t="s"><v>17</v></c><c r="D8" t="s"><v>10</v></c><c r="E8" s="1"><v>44</v></c></row></sheetData>`;

        return this.createData();
    }

    public get treeGridDataFilteredSorted() {
        this._sharedStringsData =
            `count="19" uniqueCount="18"><si><t>ID</t></si><si><t>ParentID</t></si><si><t>Name</t></si><si><t>JobTitle</t></si><si><t>Age</t></si><si><t>Erma Walsh</t></si><si><t>CEO</t></si><si><t>Eduardo Ramirez</t></si><si><t>Manager</t></si><si><t>Leslie Hansen</t></si><si><t>Associate Software Developer</t></si><si><t>Casey Houston</t></si><si><t>Vice President</t></si><si><t>Jack Simon</t></si><si><t>Software Developer</t></si><si><t>Gilberto Todd</t></si><si><t>Director</t></si><si><t>Debra Morton</t></si>`;

        this._tableData = `ref="A1:E8" totalsRowShown="0">
    <autoFilter ref="A1:E8"/><tableColumns count="5"><tableColumn id="1" name="ID"/><tableColumn id="2" name="ParentID"/><tableColumn id="3" name="Name"/><tableColumn id="4" name="JobTitle"/><tableColumn id="5" name="Age"/></tableColumns>`;

        this._worksheetData = `
<sheetPr><outlinePr summaryBelow="0" /></sheetPr>
<dimension ref="A1:E8"/>
<sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>
<sheetFormatPr defaultRowHeight="15" outlineLevelRow="2" x14ac:dyDescent="0.25"/>
<cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="50" customWidth="1"/><col min="4" max="4" width="50" customWidth="1"/><col min="5" max="5" width="50" customWidth="1"/></cols>
<sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c><c r="D1" t="s"><v>3</v></c><c r="E1" t="s"><v>4</v></c></row><row r="2"><c r="A2" s="1"><v>6</v></c><c r="B2" s="1"><v>-1</v></c><c r="C2" t="s"><v>5</v></c><c r="D2" t="s"><v>6</v></c><c r="E2" s="1"><v>52</v></c></row><row r="3"><c r="A3" s="1"><v>10</v></c><c r="B3" s="1"><v>-1</v></c><c r="C3" t="s"><v>7</v></c><c r="D3" t="s"><v>8</v></c><c r="E3" s="1"><v>53</v></c></row><row r="4" outlineLevel="1"><c r="A4" s="1"><v>9</v></c><c r="B4" s="1"><v>10</v></c><c r="C4" t="s"><v>9</v></c><c r="D4" t="s"><v>10</v></c><c r="E4" s="1"><v>44</v></c></row><row r="5"><c r="A5" s="1"><v>1</v></c><c r="B5" s="1"><v>-1</v></c><c r="C5" t="s"><v>11</v></c><c r="D5" t="s"><v>12</v></c><c r="E5" s="1"><v>32</v></c></row><row r="6" outlineLevel="1"><c r="A6" s="1"><v>4</v></c><c r="B6" s="1"><v>1</v></c><c r="C6" t="s"><v>13</v></c><c r="D6" t="s"><v>14</v></c><c r="E6" s="1"><v>33</v></c></row><row r="7" outlineLevel="1"><c r="A7" s="1"><v>2</v></c><c r="B7" s="1"><v>1</v></c><c r="C7" t="s"><v>15</v></c><c r="D7" t="s"><v>16</v></c><c r="E7" s="1"><v>41</v></c></row><row r="8" outlineLevel="2"><c r="A8" s="1"><v>7</v></c><c r="B8" s="1"><v>2</v></c><c r="C8" t="s"><v>17</v></c><c r="D8" t="s"><v>10</v></c><c r="E8" s="1"><v>35</v></c></row></sheetData>`;

        return this.createData();
    }

    public get treeGridWithAdvancedFilters() {
        this._sharedStringsData =
        `count="15" uniqueCount="14"><si><t>ID</t></si><si><t>ParentID</t></si><si><t>Name</t></si><si><t>JobTitle</t></si><si><t>Age</t></si><si><t>Casey Houston</t></si><si><t>Vice President</t></si><si><t>Gilberto Todd</t></si><si><t>Director</t></si><si><t>Tanya Bennett</t></si><si><t>Debra Morton</t></si><si><t>Associate Software Developer</t></si><si><t>Jack Simon</t></si><si><t>Software Developer</t></si>`;

        this._tableData = `ref="A1:E6" totalsRowShown="0">
        <autoFilter ref="A1:E6"/><tableColumns count="5"><tableColumn id="1" name="ID"/><tableColumn id="2" name="ParentID"/><tableColumn id="3" name="Name"/><tableColumn id="4" name="JobTitle"/><tableColumn id="5" name="Age"/></tableColumns>`;

        this._worksheetData = `<sheetPr><outlinePr summaryBelow="0"/></sheetPr>
        <dimension ref="A1:E6"/>
        <sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>
        <sheetFormatPr defaultRowHeight="15" outlineLevelRow="2" x14ac:dyDescent="0.25"/>
        <cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="50" customWidth="1"/><col min="4" max="4" width="50" customWidth="1"/><col min="5" max="5" width="50" customWidth="1"/></cols>
        <sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c><c r="D1" t="s"><v>3</v></c><c r="E1" t="s"><v>4</v></c></row><row r="2"><c r="A2" s="1"><v>1</v></c><c r="B2" s="1"><v>-1</v></c><c r="C2" t="s"><v>5</v></c><c r="D2" t="s"><v>6</v></c><c r="E2" s="1"><v>32</v></c></row><row r="3" outlineLevel="1"><c r="A3" s="1"><v>2</v></c><c r="B3" s="1"><v>1</v></c><c r="C3" t="s"><v>7</v></c><c r="D3" t="s"><v>8</v></c><c r="E3" s="1"><v>41</v></c></row><row r="4" outlineLevel="2"><c r="A4" s="1"><v>3</v></c><c r="B4" s="1"><v>2</v></c><c r="C4" t="s"><v>9</v></c><c r="D4" t="s"><v>8</v></c><c r="E4" s="1"><v>29</v></c></row><row r="5" outlineLevel="2"><c r="A5" s="1"><v>7</v></c><c r="B5" s="1"><v>2</v></c><c r="C5" t="s"><v>10</v></c><c r="D5" t="s"><v>11</v></c><c r="E5" s="1"><v>35</v></c></row><row r="6" outlineLevel="1"><c r="A6" s="1"><v>4</v></c><c r="B6" s="1"><v>1</v></c><c r="C6" t="s"><v>12</v></c><c r="D6" t="s"><v>13</v></c><c r="E6" s="1"><v>33</v></c></row></sheetData>`;

        return this.createData();
    }

    public get gridProductsWithFormatter() {
        this._sharedStringsData =
            `count="45" uniqueCount="35"><si><t>Product ID</t></si><si><t>ProductName</t></si><si><t>InStock</t></si><si><t>UnitsInStock</t></si><si><t>OrderDate</t></si><si><t>Chai</t></si><si><t>true</t></si><si><t>2760.00</t></si><si><t>Mon Mar 21 2005</t></si><si><t>Aniseed Syrup</t></si><si><t>false</t></si><si><t>198.00</t></si><si><t>Tue Jan 15 2008</t></si><si><t>Chef Antons Cajun Seasoning</t></si><si><t>52.00</t></si><si><t>Sat Nov 20 2010</t></si><si><t>Grandmas Boysenberry Spread</t></si><si><t>0.00</t></si><si><t>Thu Oct 11 2007</t></si><si><t>Uncle Bobs Dried Pears</t></si><si><t>Fri Jul 27 2001</t></si><si><t>Northwoods Cranberry Sauce</t></si><si><t>1098.00</t></si><si><t>Thu May 17 1990</t></si><si><t>Queso Cabrales</t></si><si><t>Thu Mar 03 2005</t></si><si><t>Tofu</t></si><si><t>7898.00</t></si><si><t>Sat Sep 09 2017</t></si><si><t>Teatime Chocolate Biscuits</t></si><si><t>6998.00</t></si><si><t>Thu Dec 25 2025</t></si><si><t>Chocolate</t></si><si><t>20000.00</t></si><si><t>Thu Mar 01 2018</t></si>`;

        this._tableData = `ref="A1:E11" totalsRowShown="0">
        <autoFilter ref="A1:E11"/><tableColumns count="5"><tableColumn id="1" name="Product ID"/><tableColumn id="2" name="ProductName"/><tableColumn id="3" name="InStock"/><tableColumn id="4" name="UnitsInStock"/><tableColumn id="5" name="OrderDate"/></tableColumns>`;

        this._worksheetData = `
        <dimension ref="A1:E11"/>
        <sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>
        <sheetFormatPr defaultRowHeight="15"  x14ac:dyDescent="0.25"/>
        <cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="50" customWidth="1"/><col min="4" max="4" width="50" customWidth="1"/><col min="5" max="5" width="50" customWidth="1"/></cols>
        <sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c><c r="D1" t="s"><v>3</v></c><c r="E1" t="s"><v>4</v></c></row><row r="2"><c r="A2" s="1"><v>1</v></c><c r="B2" t="s"><v>5</v></c><c r="C2" t="s"><v>6</v></c><c r="D2" t="s"><v>7</v></c><c r="E2" t="s"><v>8</v></c></row><row r="3"><c r="A3" s="1"><v>2</v></c><c r="B3" t="s"><v>9</v></c><c r="C3" t="s"><v>10</v></c><c r="D3" t="s"><v>11</v></c><c r="E3" t="s"><v>12</v></c></row><row r="4"><c r="A4" s="1"><v>3</v></c><c r="B4" t="s"><v>13</v></c><c r="C4" t="s"><v>6</v></c><c r="D4" t="s"><v>14</v></c><c r="E4" t="s"><v>15</v></c></row><row r="5"><c r="A5" s="1"><v>4</v></c><c r="B5" t="s"><v>16</v></c><c r="C5" t="s"><v>10</v></c><c r="D5" t="s"><v>17</v></c><c r="E5" t="s"><v>18</v></c></row><row r="6"><c r="A6" s="1"><v>5</v></c><c r="B6" t="s"><v>19</v></c><c r="C6" t="s"><v>10</v></c><c r="D6" t="s"><v>17</v></c><c r="E6" t="s"><v>20</v></c></row><row r="7"><c r="A7" s="1"><v>6</v></c><c r="B7" t="s"><v>21</v></c><c r="C7" t="s"><v>6</v></c><c r="D7" t="s"><v>22</v></c><c r="E7" t="s"><v>23</v></c></row><row r="8"><c r="A8" s="1"><v>7</v></c><c r="B8" t="s"><v>24</v></c><c r="C8" t="s"><v>10</v></c><c r="D8" t="s"><v>17</v></c><c r="E8" t="s"><v>25</v></c></row><row r="9"><c r="A9" s="1"><v>8</v></c><c r="B9" t="s"><v>26</v></c><c r="C9" t="s"><v>6</v></c><c r="D9" t="s"><v>27</v></c><c r="E9" t="s"><v>28</v></c></row><row r="10"><c r="A10" s="1"><v>9</v></c><c r="B10" t="s"><v>29</v></c><c r="C10" t="s"><v>6</v></c><c r="D10" t="s"><v>30</v></c><c r="E10" t="s"><v>31</v></c></row><row r="11"><c r="A11" s="1"><v>10</v></c><c r="B11" t="s"><v>32</v></c><c r="C11" t="s"><v>6</v></c><c r="D11" t="s"><v>33</v></c><c r="E11" t="s"><v>34</v></c></row></sheetData>`;

        return this.createData();
    }

    public get gridProductsWithoutFormatter() {
        this._sharedStringsData =
            `count="35" uniqueCount="27"><si><t>Product ID</t></si><si><t>ProductName</t></si><si><t>InStock</t></si><si><t>UnitsInStock</t></si><si><t>OrderDate</t></si><si><t>Chai</t></si><si><t>true</t></si><si><t>Mon Mar 21 2005 02:00:00 GMT+0200 (Eastern European Standard Time)</t></si><si><t>Aniseed Syrup</t></si><si><t>false</t></si><si><t>Tue Jan 15 2008 02:00:00 GMT+0200 (Eastern European Standard Time)</t></si><si><t>Chef Antons Cajun Seasoning</t></si><si><t>Sat Nov 20 2010 02:00:00 GMT+0200 (Eastern European Standard Time)</t></si><si><t>Grandmas Boysenberry Spread</t></si><si><t>Thu Oct 11 2007 03:00:00 GMT+0300 (Eastern European Summer Time)</t></si><si><t>Uncle Bobs Dried Pears</t></si><si><t>Fri Jul 27 2001 03:00:00 GMT+0300 (Eastern European Summer Time)</t></si><si><t>Northwoods Cranberry Sauce</t></si><si><t>Thu May 17 1990 04:00:00 GMT+0400 (Eastern European Summer Time)</t></si><si><t>Queso Cabrales</t></si><si><t>Thu Mar 03 2005 02:00:00 GMT+0200 (Eastern European Standard Time)</t></si><si><t>Tofu</t></si><si><t>Sat Sep 09 2017 03:00:00 GMT+0300 (Eastern European Summer Time)</t></si><si><t>Teatime Chocolate Biscuits</t></si><si><t>Thu Dec 25 2025 02:00:00 GMT+0200 (Eastern European Standard Time)</t></si><si><t>Chocolate</t></si><si><t>Thu Mar 01 2018 02:00:00 GMT+0200 (Eastern European Standard Time)</t></si>`;

        this._tableData = `ref="A1:E11" totalsRowShown="0">
        <autoFilter ref="A1:E11"/><tableColumns count="5"><tableColumn id="1" name="Product ID"/><tableColumn id="2" name="ProductName"/><tableColumn id="3" name="InStock"/><tableColumn id="4" name="UnitsInStock"/><tableColumn id="5" name="OrderDate"/></tableColumns>`;

        this._worksheetData = `
        <dimension ref="A1:E11"/>
        <sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>
        <sheetFormatPr defaultRowHeight="15"  x14ac:dyDescent="0.25"/>
        <cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="50" customWidth="1"/><col min="4" max="4" width="50" customWidth="1"/><col min="5" max="5" width="50" customWidth="1"/></cols>
        <sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c><c r="D1" t="s"><v>3</v></c><c r="E1" t="s"><v>4</v></c></row><row r="2"><c r="A2" s="1"><v>1</v></c><c r="B2" t="s"><v>5</v></c><c r="C2" t="s"><v>6</v></c><c r="D2" s="1"><v>2760</v></c><c r="E2" t="s"><v>7</v></c></row><row r="3"><c r="A3" s="1"><v>2</v></c><c r="B3" t="s"><v>8</v></c><c r="C3" t="s"><v>9</v></c><c r="D3" s="1"><v>198</v></c><c r="E3" t="s"><v>10</v></c></row><row r="4"><c r="A4" s="1"><v>3</v></c><c r="B4" t="s"><v>11</v></c><c r="C4" t="s"><v>6</v></c><c r="D4" s="1"><v>52</v></c><c r="E4" t="s"><v>12</v></c></row><row r="5"><c r="A5" s="1"><v>4</v></c><c r="B5" t="s"><v>13</v></c><c r="C5" t="s"><v>9</v></c><c r="D5" s="1"><v>0</v></c><c r="E5" t="s"><v>14</v></c></row><row r="6"><c r="A6" s="1"><v>5</v></c><c r="B6" t="s"><v>15</v></c><c r="C6" t="s"><v>9</v></c><c r="D6" s="1"><v>0</v></c><c r="E6" t="s"><v>16</v></c></row><row r="7"><c r="A7" s="1"><v>6</v></c><c r="B7" t="s"><v>17</v></c><c r="C7" t="s"><v>6</v></c><c r="D7" s="1"><v>1098</v></c><c r="E7" t="s"><v>18</v></c></row><row r="8"><c r="A8" s="1"><v>7</v></c><c r="B8" t="s"><v>19</v></c><c r="C8" t="s"><v>9</v></c><c r="D8" s="1"><v>0</v></c><c r="E8" t="s"><v>20</v></c></row><row r="9"><c r="A9" s="1"><v>8</v></c><c r="B9" t="s"><v>21</v></c><c r="C9" t="s"><v>6</v></c><c r="D9" s="1"><v>7898</v></c><c r="E9" t="s"><v>22</v></c></row><row r="10"><c r="A10" s="1"><v>9</v></c><c r="B10" t="s"><v>23</v></c><c r="C10" t="s"><v>6</v></c><c r="D10" s="1"><v>6998</v></c><c r="E10" t="s"><v>24</v></c></row><row r="11"><c r="A11" s="1"><v>10</v></c><c r="B11" t="s"><v>25</v></c><c r="C11" t="s"><v>6</v></c><c r="D11" s="1"><v>20000</v></c><c r="E11" t="s"><v>26</v></c></row></sheetData>`;

        return this.createData();
    }

    public get gridWithEmptyColums() {
        this._sharedStringsData =
            `count="25" uniqueCount="23"><si><t>Column1</t></si><si><t>ID</t></si><si><t>Column2</t></si><si><t>Name</t></si><si><t>JobTitle</t></si><si><t>Casey Houston</t></si><si><t>Vice President</t></si><si><t>Gilberto Todd</t></si><si><t>Director</t></si><si><t>Tanya Bennett</t></si><si><t>Jack Simon</t></si><si><t>Software Developer</t></si><si><t>Celia Martinez</t></si><si><t>Senior Software Developer</t></si><si><t>Erma Walsh</t></si><si><t>CEO</t></si><si><t>Debra Morton</t></si><si><t>Associate Software Developer</t></si><si><t>Erika Wells</t></si><si><t>Software Development Team Lead</t></si><si><t>Leslie Hansen</t></si><si><t>Eduardo Ramirez</t></si><si><t>Manager</t></si>`;

        this._tableData = `ref="A1:E11" totalsRowShown="0">
        <autoFilter ref="A1:E11"/><tableColumns count="5"><tableColumn id="1" name="Column1"/><tableColumn id="2" name="ID"/><tableColumn id="3" name="Column2"/><tableColumn id="4" name="Name"/><tableColumn id="5" name="JobTitle"/></tableColumns>`;

        this._worksheetData = `
        <dimension ref="A1:E11"/>
<sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>
<sheetFormatPr defaultRowHeight="15"  x14ac:dyDescent="0.25"/>
<cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="50" customWidth="1"/><col min="4" max="4" width="50" customWidth="1"/><col min="5" max="5" width="50" customWidth="1"/></cols>
<sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c><c r="D1" t="s"><v>3</v></c><c r="E1" t="s"><v>4</v></c></row><row r="2"><c r="A2" s="1"/><c r="B2" s="1"><v>1</v></c><c r="C2" s="1"/><c r="D2" t="s"><v>5</v></c><c r="E2" t="s"><v>6</v></c></row><row r="3"><c r="A3" s="1"/><c r="B3" s="1"><v>2</v></c><c r="C3" s="1"/><c r="D3" t="s"><v>7</v></c><c r="E3" t="s"><v>8</v></c></row><row r="4"><c r="A4" s="1"/><c r="B4" s="1"><v>3</v></c><c r="C4" s="1"/><c r="D4" t="s"><v>9</v></c><c r="E4" t="s"><v>8</v></c></row><row r="5"><c r="A5" s="1"/><c r="B5" s="1"><v>4</v></c><c r="C5" s="1"/><c r="D5" t="s"><v>10</v></c><c r="E5" t="s"><v>11</v></c></row><row r="6"><c r="A6" s="1"/><c r="B6" s="1"><v>5</v></c><c r="C6" s="1"/><c r="D6" t="s"><v>12</v></c><c r="E6" t="s"><v>13</v></c></row><row r="7"><c r="A7" s="1"/><c r="B7" s="1"><v>6</v></c><c r="C7" s="1"/><c r="D7" t="s"><v>14</v></c><c r="E7" t="s"><v>15</v></c></row><row r="8"><c r="A8" s="1"/><c r="B8" s="1"><v>7</v></c><c r="C8" s="1"/><c r="D8" t="s"><v>16</v></c><c r="E8" t="s"><v>17</v></c></row><row r="9"><c r="A9" s="1"/><c r="B9" s="1"><v>8</v></c><c r="C9" s="1"/><c r="D9" t="s"><v>18</v></c><c r="E9" t="s"><v>19</v></c></row><row r="10"><c r="A10" s="1"/><c r="B10" s="1"><v>9</v></c><c r="C10" s="1"/><c r="D10" t="s"><v>20</v></c><c r="E10" t="s"><v>17</v></c></row><row r="11"><c r="A11" s="1"/><c r="B11" s="1"><v>10</v></c><c r="C11" s="1"/><c r="D11" t="s"><v>21</v></c><c r="E11" t="s"><v>22</v></c></row></sheetData>`;

        return this.createData();
    }

    public get gridWithAdvancedFilters() {
        this._sharedStringsData =
        `count="11" uniqueCount="11"><si><t>ID</t></si><si><t>Name</t></si><si><t>JobTitle</t></si><si><t>Erma Walsh</t></si><si><t>CEO</t></si><si><t>Debra Morton</t></si><si><t>Associate Software Developer</t></si><si><t>Erika Wells</t></si><si><t>Software Development Team Lead</t></si><si><t>Eduardo Ramirez</t></si><si><t>Manager</t></si>`;

        this._tableData = `ref="A1:C5" totalsRowShown="0">
        <autoFilter ref="A1:C5"/><tableColumns count="3"><tableColumn id="1" name="ID"/><tableColumn id="2" name="Name"/><tableColumn id="3" name="JobTitle"/></tableColumns>`;

        this._worksheetData = `<dimension ref="A1:C5"/>
        <sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>
        <sheetFormatPr defaultRowHeight="15"  x14ac:dyDescent="0.25"/>
        <cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="50" customWidth="1"/></cols>
        <sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c></row><row r="2"><c r="A2" s="1"><v>6</v></c><c r="B2" t="s"><v>3</v></c><c r="C2" t="s"><v>4</v></c></row><row r="3"><c r="A3" s="1"><v>7</v></c><c r="B3" t="s"><v>5</v></c><c r="C3" t="s"><v>6</v></c></row><row r="4"><c r="A4" s="1"><v>8</v></c><c r="B4" t="s"><v>7</v></c><c r="C4" t="s"><v>8</v></c></row><row r="5"><c r="A5" s="1"><v>10</v></c><c r="B5" t="s"><v>9</v></c><c r="C5" t="s"><v>10</v></c></row></sheetData>`;

        return this.createData();
    }

    public get personJobHoursDataPerformance() {
        this._sharedStringsData =
        `count="18" uniqueCount="15"><si><t>ID</t></si><si><t>Name</t></si><si><t>JobTitle</t></si><si><t>WorkingHours</t></si><si><t>HireDate</t></si><si><t>Performance</t></si><si><t>Casey Houston</t></si><si><t>Vice President</t></si><si><t>2017-06-19T11:43:07.714Z</t></si><si><t>[object Object],[object Object],[object Object],[object Object]</t></si><si><t>Gilberto Todd</t></si><si><t>Director</t></si><si><t>2015-12-18T11:23:17.714Z</t></si><si><t>Tanya Bennett</t></si><si><t>2005-11-18T11:23:17.714Z</t></si>`;

        this._tableData = `ref="A1:F4" totalsRowShown="0">
        <autoFilter ref="A1:F4"/><tableColumns count="6"><tableColumn id="1" name="ID"/><tableColumn id="2" name="Name"/><tableColumn id="3" name="JobTitle"/><tableColumn id="4" name="WorkingHours"/><tableColumn id="5" name="HireDate"/><tableColumn id="6" name="Performance"/></tableColumns>`;

        this._worksheetData = `<dimension ref="A1:F4"/>
        <sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>
        <sheetFormatPr defaultRowHeight="15"  x14ac:dyDescent="0.25"/>
        <cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="50" customWidth="1"/><col min="4" max="4" width="50" customWidth="1"/><col min="5" max="5" width="50" customWidth="1"/><col min="6" max="6" width="50" customWidth="1"/></cols>
        <sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c><c r="D1" t="s"><v>3</v></c><c r="E1" t="s"><v>4</v></c><c r="F1" t="s"><v>5</v></c></row><row r="2"><c r="A2" s="1"><v>1</v></c><c r="B2" t="s"><v>6</v></c><c r="C2" t="s"><v>7</v></c><c r="D2" s="1"><v>4</v></c><c r="E2" t="s"><v>8</v></c><c r="F2" t="s"><v>9</v></c></row><row r="3"><c r="A3" s="1"><v>2</v></c><c r="B3" t="s"><v>10</v></c><c r="C3" t="s"><v>11</v></c><c r="D3" s="1"><v>6</v></c><c r="E3" t="s"><v>12</v></c><c r="F3" t="s"><v>9</v></c></row><row r="4"><c r="A4" s="1"><v>3</v></c><c r="B4" t="s"><v>13</v></c><c r="C4" t="s"><v>11</v></c><c r="D4" s="1"><v>8</v></c><c r="E4" t="s"><v>14</v></c><c r="F4" t="s"><v>9</v></c></row></sheetData>`;

        return this.createData();
    }

    public get hireDate() {
        this._sharedStringsData =
        `count="1" uniqueCount="1"><si><t>HireDate</t></si>`;

        this._tableData = `ref="A1:A6" totalsRowShown="0">
        <autoFilter ref="A1:A6"/><tableColumns count="1"><tableColumn id="1" name="HireDate"/></tableColumns>`;

        this._worksheetData = `<dimension ref="A1:A6"/>
        <sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>
        <sheetFormatPr defaultRowHeight="15"  x14ac:dyDescent="0.25"/>
        <cols><col min="1" max="1" width="50" customWidth="1"/></cols>
        <sheetData><row r="1"><c r="A1" t="s"><v>0</v></c></row><row r="2"><c r="A2" t="d" s="2"><v>2008-04-20T00:00:00</v></c></row><row r="3"><c r="A3" t="d" s="2"><v>2015-12-08T00:00:00</v></c></row><row r="4"><c r="A4" t="d" s="2"><v>2012-07-30T00:00:00</v></c></row><row r="5"><c r="A5" t="d" s="2"><v>2010-02-05T00:00:00</v></c></row><row r="6"><c r="A6" t="d" s="2"><v>2020-05-17T00:00:00</v></c></row></sheetData>`;

        return this.createData();
    }

    public get exportGroupedData() {
        this._sharedStringsData =
            `count="29" uniqueCount="20"><si><t>Model</t></si><si><t>Edition</t></si><si><t>Brand: BMW (2)</t></si><si><t>Price: 150000 (1)</t></si><si><t>M5</t></si><si><t>Competition</t></si><si><t>Price: 100000 (1)</t></si><si><t>Performance</t></si><si><t>Brand: Tesla (3)</t></si><si><t>Roadster</t></si><si><t>Price: 75000 (1)</t></si><si><t>Model S</t></si><si><t>Sport</t></si><si><t>Price: 65000 (1)</t></si><si><t>Base</t></si><si><t>Brand: VW (3)</t></si><si><t>Arteon</t></si><si><t>R Line</t></si><si><t>Business</t></si><si><t>Passat</t></si>`;

        this._tableData =
            `ref="A1:B20" totalsRowShown="0">
            <autoFilter ref="A1:B20"/><tableColumns count="2"><tableColumn id="1" name="Model"/><tableColumn id="2" name="Edition"/></tableColumns>`;

        this._worksheetData =
            `<sheetPr><outlinePr summaryBelow="0"/></sheetPr>
            <dimension ref="A1:B20"/>
            <sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>
            <sheetFormatPr defaultRowHeight="15" outlineLevelRow="2" x14ac:dyDescent="0.25"/>
            <cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/></cols>
            <sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c></row><row r="2"><c r="A2" t="s"><v>2</v></c><c r="B2" s="1"/></row><row r="3" outlineLevel="1"><c r="A3" t="s"><v>3</v></c><c r="B3" s="1"/></row><row r="4" outlineLevel="2"><c r="A4" t="s"><v>4</v></c><c r="B4" t="s"><v>5</v></c></row><row r="5" outlineLevel="1"><c r="A5" t="s"><v>6</v></c><c r="B5" s="1"/></row><row r="6" outlineLevel="2"><c r="A6" t="s"><v>4</v></c><c r="B6" t="s"><v>7</v></c></row><row r="7"><c r="A7" t="s"><v>8</v></c><c r="B7" s="1"/></row><row r="8" outlineLevel="1"><c r="A8" t="s"><v>6</v></c><c r="B8" s="1"/></row><row r="9" outlineLevel="2"><c r="A9" t="s"><v>9</v></c><c r="B9" t="s"><v>7</v></c></row><row r="10" outlineLevel="1"><c r="A10" t="s"><v>10</v></c><c r="B10" s="1"/></row><row r="11" outlineLevel="2"><c r="A11" t="s"><v>11</v></c><c r="B11" t="s"><v>12</v></c></row><row r="12" outlineLevel="1"><c r="A12" t="s"><v>13</v></c><c r="B12" s="1"/></row><row r="13" outlineLevel="2"><c r="A13" t="s"><v>11</v></c><c r="B13" t="s"><v>14</v></c></row><row r="14"><c r="A14" t="s"><v>15</v></c><c r="B14" s="1"/></row><row r="15" outlineLevel="1"><c r="A15" t="s"><v>6</v></c><c r="B15" s="1"/></row><row r="16" outlineLevel="2"><c r="A16" t="s"><v>16</v></c><c r="B16" t="s"><v>17</v></c></row><row r="17" outlineLevel="1"><c r="A17" t="s"><v>10</v></c><c r="B17" s="1"/></row><row r="18" outlineLevel="2"><c r="A18" t="s"><v>16</v></c><c r="B18" t="s"><v>18</v></c></row><row r="19" outlineLevel="1"><c r="A19" t="s"><v>13</v></c><c r="B19" s="1"/></row><row r="20" outlineLevel="2"><c r="A20" t="s"><v>19</v></c><c r="B20" t="s"><v>18</v></c></row></sheetData>`;

        return this.createData();
    }

    public get exportGroupedDataWithCollapsedRows() {
        this._sharedStringsData =
            `count="29" uniqueCount="20"><si><t>Model</t></si><si><t>Edition</t></si><si><t>Brand: BMW (2)</t></si><si><t>Price: 150000 (1)</t></si><si><t>M5</t></si><si><t>Competition</t></si><si><t>Price: 100000 (1)</t></si><si><t>Performance</t></si><si><t>Brand: Tesla (3)</t></si><si><t>Roadster</t></si><si><t>Price: 75000 (1)</t></si><si><t>Model S</t></si><si><t>Sport</t></si><si><t>Price: 65000 (1)</t></si><si><t>Base</t></si><si><t>Brand: VW (3)</t></si><si><t>Arteon</t></si><si><t>R Line</t></si><si><t>Business</t></si><si><t>Passat</t></si>`;

        this._tableData =
            `ref="A1:B20" totalsRowShown="0">
            <autoFilter ref="A1:B20"/><tableColumns count="2"><tableColumn id="1" name="Model"/><tableColumn id="2" name="Edition"/></tableColumns>`;

        this._worksheetData =
            `<sheetPr><outlinePr summaryBelow="0"/></sheetPr>
            <dimension ref="A1:B20"/>
            <sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>
            <sheetFormatPr defaultRowHeight="15" outlineLevelRow="2" x14ac:dyDescent="0.25"/>
            <cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/></cols>
            <sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c></row><row r="2"><c r="A2" t="s"><v>2</v></c><c r="B2" s="1"/></row><row r="3" outlineLevel="1"><c r="A3" t="s"><v>3</v></c><c r="B3" s="1"/></row><row r="4" outlineLevel="2"><c r="A4" t="s"><v>4</v></c><c r="B4" t="s"><v>5</v></c></row><row r="5" outlineLevel="1"><c r="A5" t="s"><v>6</v></c><c r="B5" s="1"/></row><row r="6" outlineLevel="2" hidden="1"><c r="A6" t="s"><v>4</v></c><c r="B6" t="s"><v>7</v></c></row><row r="7"><c r="A7" t="s"><v>8</v></c><c r="B7" s="1"/></row><row r="8" outlineLevel="1" hidden="1"><c r="A8" t="s"><v>6</v></c><c r="B8" s="1"/></row><row r="9" outlineLevel="2" hidden="1"><c r="A9" t="s"><v>9</v></c><c r="B9" t="s"><v>7</v></c></row><row r="10" outlineLevel="1" hidden="1"><c r="A10" t="s"><v>10</v></c><c r="B10" s="1"/></row><row r="11" outlineLevel="2" hidden="1"><c r="A11" t="s"><v>11</v></c><c r="B11" t="s"><v>12</v></c></row><row r="12" outlineLevel="1" hidden="1"><c r="A12" t="s"><v>13</v></c><c r="B12" s="1"/></row><row r="13" outlineLevel="2" hidden="1"><c r="A13" t="s"><v>11</v></c><c r="B13" t="s"><v>14</v></c></row><row r="14"><c r="A14" t="s"><v>15</v></c><c r="B14" s="1"/></row><row r="15" outlineLevel="1"><c r="A15" t="s"><v>6</v></c><c r="B15" s="1"/></row><row r="16" outlineLevel="2"><c r="A16" t="s"><v>16</v></c><c r="B16" t="s"><v>17</v></c></row><row r="17" outlineLevel="1"><c r="A17" t="s"><v>10</v></c><c r="B17" s="1"/></row><row r="18" outlineLevel="2"><c r="A18" t="s"><v>16</v></c><c r="B18" t="s"><v>18</v></c></row><row r="19" outlineLevel="1"><c r="A19" t="s"><v>13</v></c><c r="B19" s="1"/></row><row r="20" outlineLevel="2"><c r="A20" t="s"><v>19</v></c><c r="B20" t="s"><v>18</v></c></row></sheetData>`;

        return this.createData();
    }

    public get exportGroupedDataWithIgnoreSorting() {
        this._sharedStringsData =
            `count="22" uniqueCount="17"><si><t>Price</t></si><si><t>Model</t></si><si><t>Edition</t></si><si><t>Brand: Tesla (3)</t></si><si><t>Model S</t></si><si><t>Sport</t></si><si><t>Roadster</t></si><si><t>Performance</t></si><si><t>Base</t></si><si><t>Brand: BMW (2)</t></si><si><t>M5</t></si><si><t>Competition</t></si><si><t>Brand: VW (3)</t></si><si><t>Arteon</t></si><si><t>Business</t></si><si><t>Passat</t></si><si><t>R Line</t></si>`;

        this._tableData =
            `ref="A1:C12" totalsRowShown="0">
            <autoFilter ref="A1:C12"/><tableColumns count="3"><tableColumn id="1" name="Price"/><tableColumn id="2" name="Model"/><tableColumn id="3" name="Edition"/></tableColumns>`;

        this._worksheetData =
            `<sheetPr><outlinePr summaryBelow="0"/></sheetPr>
            <dimension ref="A1:C12"/>
            <sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>
            <sheetFormatPr defaultRowHeight="15" outlineLevelRow="1" x14ac:dyDescent="0.25"/>
            <cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="50" customWidth="1"/></cols>
            <sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c></row><row r="2"><c r="A2" t="s"><v>3</v></c><c r="B2" s="1"/><c r="C2" s="1"/></row><row r="3" outlineLevel="1"><c r="A3" s="1"><v>75000</v></c><c r="B3" t="s"><v>4</v></c><c r="C3" t="s"><v>5</v></c></row><row r="4" outlineLevel="1"><c r="A4" s="1"><v>100000</v></c><c r="B4" t="s"><v>6</v></c><c r="C4" t="s"><v>7</v></c></row><row r="5" outlineLevel="1"><c r="A5" s="1"><v>65000</v></c><c r="B5" t="s"><v>4</v></c><c r="C5" t="s"><v>8</v></c></row><row r="6"><c r="A6" t="s"><v>9</v></c><c r="B6" s="1"/><c r="C6" s="1"/></row><row r="7" outlineLevel="1"><c r="A7" s="1"><v>150000</v></c><c r="B7" t="s"><v>10</v></c><c r="C7" t="s"><v>11</v></c></row><row r="8" outlineLevel="1"><c r="A8" s="1"><v>100000</v></c><c r="B8" t="s"><v>10</v></c><c r="C8" t="s"><v>7</v></c></row><row r="9"><c r="A9" t="s"><v>12</v></c><c r="B9" s="1"/><c r="C9" s="1"/></row><row r="10" outlineLevel="1"><c r="A10" s="1"><v>75000</v></c><c r="B10" t="s"><v>13</v></c><c r="C10" t="s"><v>14</v></c></row><row r="11" outlineLevel="1"><c r="A11" s="1"><v>65000</v></c><c r="B11" t="s"><v>15</v></c><c r="C11" t="s"><v>14</v></c></row><row r="12" outlineLevel="1"><c r="A12" s="1"><v>100000</v></c><c r="B12" t="s"><v>13</v></c><c r="C12" t="s"><v>16</v></c></row></sheetData>`;

        return this.createData();
    }

    public get exportGroupedDataWithIgnoreFiltering() {
        this._sharedStringsData =
            `count="22" uniqueCount="17"><si><t>Price</t></si><si><t>Model</t></si><si><t>Edition</t></si><si><t>Brand: BMW (2)</t></si><si><t>M5</t></si><si><t>Competition</t></si><si><t>Performance</t></si><si><t>Brand: Tesla (3)</t></si><si><t>Model S</t></si><si><t>Sport</t></si><si><t>Roadster</t></si><si><t>Base</t></si><si><t>Brand: VW (3)</t></si><si><t>Arteon</t></si><si><t>Business</t></si><si><t>Passat</t></si><si><t>R Line</t></si>`;

        this._tableData =
            `ref="A1:C12" totalsRowShown="0">
            <autoFilter ref="A1:C12"/><tableColumns count="3"><tableColumn id="1" name="Price"/><tableColumn id="2" name="Model"/><tableColumn id="3" name="Edition"/></tableColumns>`;

        this._worksheetData =
            `<sheetPr><outlinePr summaryBelow="0"/></sheetPr>
            <dimension ref="A1:C12"/>
            <sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>
            <sheetFormatPr defaultRowHeight="15" outlineLevelRow="1" x14ac:dyDescent="0.25"/>
            <cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="50" customWidth="1"/></cols>
            <sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c></row><row r="2"><c r="A2" t="s"><v>3</v></c><c r="B2" s="1"/><c r="C2" s="1"/></row><row r="3" outlineLevel="1"><c r="A3" s="1"><v>150000</v></c><c r="B3" t="s"><v>4</v></c><c r="C3" t="s"><v>5</v></c></row><row r="4" outlineLevel="1"><c r="A4" s="1"><v>100000</v></c><c r="B4" t="s"><v>4</v></c><c r="C4" t="s"><v>6</v></c></row><row r="5"><c r="A5" t="s"><v>7</v></c><c r="B5" s="1"/><c r="C5" s="1"/></row><row r="6" outlineLevel="1"><c r="A6" s="1"><v>75000</v></c><c r="B6" t="s"><v>8</v></c><c r="C6" t="s"><v>9</v></c></row><row r="7" outlineLevel="1"><c r="A7" s="1"><v>100000</v></c><c r="B7" t="s"><v>10</v></c><c r="C7" t="s"><v>6</v></c></row><row r="8" outlineLevel="1"><c r="A8" s="1"><v>65000</v></c><c r="B8" t="s"><v>8</v></c><c r="C8" t="s"><v>11</v></c></row><row r="9"><c r="A9" t="s"><v>12</v></c><c r="B9" s="1"/><c r="C9" s="1"/></row><row r="10" outlineLevel="1"><c r="A10" s="1"><v>75000</v></c><c r="B10" t="s"><v>13</v></c><c r="C10" t="s"><v>14</v></c></row><row r="11" outlineLevel="1"><c r="A11" s="1"><v>65000</v></c><c r="B11" t="s"><v>15</v></c><c r="C11" t="s"><v>14</v></c></row><row r="12" outlineLevel="1"><c r="A12" s="1"><v>100000</v></c><c r="B12" t="s"><v>13</v></c><c r="C12" t="s"><v>16</v></c></row></sheetData>`;

        return this.createData();
    }

    public get exportGroupedDataWithIgnoreGrouping() {
        this._sharedStringsData =
            `count="19" uniqueCount="14"><si><t>Price</t></si><si><t>Model</t></si><si><t>Edition</t></si><si><t>M5</t></si><si><t>Competition</t></si><si><t>Performance</t></si><si><t>Model S</t></si><si><t>Sport</t></si><si><t>Roadster</t></si><si><t>Base</t></si><si><t>Arteon</t></si><si><t>Business</t></si><si><t>Passat</t></si><si><t>R Line</t></si>`;

        this._tableData =
            `ref="A1:C9" totalsRowShown="0">
            <autoFilter ref="A1:C9"/><tableColumns count="3"><tableColumn id="1" name="Price"/><tableColumn id="2" name="Model"/><tableColumn id="3" name="Edition"/></tableColumns>`;

        this._worksheetData =
            `<dimension ref="A1:C9"/>
            <sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>
            <sheetFormatPr defaultRowHeight="15"  x14ac:dyDescent="0.25"/>
            <cols><col min="1" max="1" width="50" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="50" customWidth="1"/></cols>
            <sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c></row><row r="2"><c r="A2" s="1"><v>150000</v></c><c r="B2" t="s"><v>3</v></c><c r="C2" t="s"><v>4</v></c></row><row r="3"><c r="A3" s="1"><v>100000</v></c><c r="B3" t="s"><v>3</v></c><c r="C3" t="s"><v>5</v></c></row><row r="4"><c r="A4" s="1"><v>75000</v></c><c r="B4" t="s"><v>6</v></c><c r="C4" t="s"><v>7</v></c></row><row r="5"><c r="A5" s="1"><v>100000</v></c><c r="B5" t="s"><v>8</v></c><c r="C5" t="s"><v>5</v></c></row><row r="6"><c r="A6" s="1"><v>65000</v></c><c r="B6" t="s"><v>6</v></c><c r="C6" t="s"><v>9</v></c></row><row r="7"><c r="A7" s="1"><v>75000</v></c><c r="B7" t="s"><v>10</v></c><c r="C7" t="s"><v>11</v></c></row><row r="8"><c r="A8" s="1"><v>65000</v></c><c r="B8" t="s"><v>12</v></c><c r="C8" t="s"><v>11</v></c></row><row r="9"><c r="A9" s="1"><v>100000</v></c><c r="B9" t="s"><v>10</v></c><c r="C9" t="s"><v>13</v></c></row></sheetData>`;

        return this.createData();
    }

    public get exportHierarchicalData() {
        this._sharedStringsData =
            `count="106" uniqueCount="57"><si><t>Artist</t></si><si><t>Debut</t></si><si><t>GrammyNominations</t></si><si><t>GrammyAwards</t></si><si><t>Naomí Yepes</t></si><si><t>Album</t></si><si><t>Launch Date</t></si><si><t>Billboard Review</t></si><si><t>US Billboard 200</t></si><si><t>Pushing up daisies</t></si><si><t>No.</t></si><si><t>Title</t></si><si><t>Released</t></si><si><t>Genre</t></si><si><t>Wood Shavifdsafdsafsangs Forever</t></si><si><t>*fdasfsa</t></si><si><t>Wood Shavifdsafdsafsavngs Forever</t></si><si><t>*vxzvczx</t></si><si><t>Wfdsafsaings Forever</t></si><si><t>*fdsacewwwqwq</t></si><si><t>Wood Shavings Forever</t></si><si><t>*rewqrqcxz</t></si><si><t>Pushing up daisies - Deluxe</t></si><si><t>Wood Shavings Forever - Remix</t></si><si><t>Punk</t></si><si><t>Utopia</t></si><si><t>SANTORINI</t></si><si><t>Hip-Hop</t></si><si><t>HEARTBEAT</t></si><si><t>OVERSEAS</t></si><si><t>Wish You Were Here</t></si><si><t>Zoom</t></si><si><t>Do You?</t></si><si><t>No Photos</t></si><si><t>Tour</t></si><si><t>Started on</t></si><si><t>Location</t></si><si><t>Headliner</t></si><si><t>Faithful Tour</t></si><si><t>Sep 12</t></si><si><t>Worldwide</t></si><si><t>NO</t></si><si><t>Country</t></si><si><t>Tickets Sold</t></si><si><t>Attendants</t></si><si><t>Belgium</t></si><si><t>USA</t></si><si><t>Babila Ebwélé</t></si><si><t>Fahrenheit</t></si><si><t>Show Out</t></si><si><t>Mood Swings</t></si><si><t>Scenario</t></si><si><t>Astroworld</t></si><si><t>Jul 21</t></si><si><t>Bulgaria</t></si><si><t>Romania</t></si><si><t>Chloe</t></si>`;

        this._worksheetData =
            `<sheetPr><outlinePr summaryBelow="0"/></sheetPr>
            <sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>
            <sheetFormatPr defaultRowHeight="15" outlineLevelRow="2" x14ac:dyDescent="0.25"/>
            <cols><col min="1" max="6" width="20" customWidth="1"/></cols>
            <sheetData><row r="1"><c r="A1" s="3" t="s"><v>0</v></c><c r="B1" s="3" t="s"><v>1</v></c><c r="C1" s="3" t="s"><v>2</v></c><c r="D1" s="3" t="s"><v>3</v></c></row><row r="2"><c r="A2" t="s"><v>4</v></c><c r="B2" s="1"><v>2011</v></c><c r="C2" s="1"><v>6</v></c><c r="D2" s="1"><v>0</v></c></row><row r="3" outlineLevel="1" hidden="1"><c r="B3" t="s" s="3"><v>5</v></c><c r="C3" t="s" s="3"><v>6</v></c><c r="D3" t="s" s="3"><v>7</v></c><c r="E3" t="s" s="3"><v>8</v></c></row><row r="4" outlineLevel="1" hidden="1"><c r="B4" t="s"><v>9</v></c><c r="C4" t="d" s="2"><v>2000-05-31T00:00:00</v></c><c r="D4" s="1"><v>86</v></c><c r="E4" s="1"><v>42</v></c></row><row r="5" outlineLevel="2" hidden="1"><c r="C5" t="s" s="3"><v>10</v></c><c r="D5" t="s" s="3"><v>11</v></c><c r="E5" t="s" s="3"><v>12</v></c><c r="F5" t="s" s="3"><v>13</v></c></row><row r="6" outlineLevel="2" hidden="1"><c r="C6" s="1"><v>1</v></c><c r="D6" t="s"><v>14</v></c><c r="E6" t="d" s="2"><v>2019-06-09T00:00:00</v></c><c r="F6" t="s"><v>15</v></c></row><row r="7" outlineLevel="2" hidden="1"><c r="C7" s="1"><v>2</v></c><c r="D7" t="s"><v>16</v></c><c r="E7" t="d" s="2"><v>2019-06-09T00:00:00</v></c><c r="F7" t="s"><v>17</v></c></row><row r="8" outlineLevel="2" hidden="1"><c r="C8" s="1"><v>3</v></c><c r="D8" t="s"><v>18</v></c><c r="E8" t="d" s="2"><v>2019-06-09T00:00:00</v></c><c r="F8" t="s"><v>19</v></c></row><row r="9" outlineLevel="2" hidden="1"><c r="C9" s="1"><v>4</v></c><c r="D9" t="s"><v>20</v></c><c r="E9" t="d" s="2"><v>2019-06-09T00:00:00</v></c><c r="F9" t="s"><v>21</v></c></row><row r="10" outlineLevel="1" hidden="1"><c r="B10" t="s"><v>22</v></c><c r="C10" t="d" s="2"><v>2001-05-31T00:00:00</v></c><c r="D10" s="1"><v>12</v></c><c r="E10" s="1"><v>2</v></c></row><row r="11" outlineLevel="2" hidden="1"><c r="C11" t="s" s="3"><v>10</v></c><c r="D11" t="s" s="3"><v>11</v></c><c r="E11" t="s" s="3"><v>12</v></c><c r="F11" t="s" s="3"><v>13</v></c></row><row r="12" outlineLevel="2" hidden="1"><c r="C12" s="1"><v>1</v></c><c r="D12" t="s"><v>23</v></c><c r="E12" t="d" s="2"><v>2020-06-09T00:00:00</v></c><c r="F12" t="s"><v>24</v></c></row><row r="13" outlineLevel="1" hidden="1"><c r="B13" t="s"><v>25</v></c><c r="C13" t="d" s="2"><v>2021-12-19T00:00:00</v></c><c r="D13" s="1"><v>1</v></c><c r="E13" s="1"><v>1</v></c></row><row r="14" outlineLevel="2" hidden="1"><c r="C14" t="s" s="3"><v>10</v></c><c r="D14" t="s" s="3"><v>11</v></c><c r="E14" t="s" s="3"><v>12</v></c><c r="F14" t="s" s="3"><v>13</v></c></row><row r="15" outlineLevel="2" hidden="1"><c r="C15" s="1"><v>1</v></c><c r="D15" t="s"><v>26</v></c><c r="E15" t="d" s="2"><v>2021-12-19T00:00:00</v></c><c r="F15" t="s"><v>27</v></c></row><row r="16" outlineLevel="2" hidden="1"><c r="C16" s="1"><v>2</v></c><c r="D16" t="s"><v>28</v></c><c r="E16" t="d" s="2"><v>2021-12-19T00:00:00</v></c><c r="F16" t="s"><v>27</v></c></row><row r="17" outlineLevel="2" hidden="1"><c r="C17" s="1"><v>3</v></c><c r="D17" t="s"><v>29</v></c><c r="E17" t="d" s="2"><v>2021-12-19T00:00:00</v></c><c r="F17" t="s"><v>27</v></c></row><row r="18" outlineLevel="1" hidden="1"><c r="B18" t="s"><v>30</v></c><c r="C18" t="d" s="2"><v>2020-07-17T00:00:00</v></c><c r="D18" s="1"><v>5</v></c><c r="E18" s="1"><v>3</v></c></row><row r="19" outlineLevel="2" hidden="1"><c r="C19" t="s" s="3"><v>10</v></c><c r="D19" t="s" s="3"><v>11</v></c><c r="E19" t="s" s="3"><v>12</v></c><c r="F19" t="s" s="3"><v>13</v></c></row><row r="20" outlineLevel="2" hidden="1"><c r="C20" s="1"><v>1</v></c><c r="D20" t="s"><v>31</v></c><c r="E20" t="d" s="2"><v>2020-07-17T00:00:00</v></c><c r="F20" t="s"><v>27</v></c></row><row r="21" outlineLevel="2" hidden="1"><c r="C21" s="1"><v>2</v></c><c r="D21" t="s"><v>32</v></c><c r="E21" t="d" s="2"><v>2020-07-17T00:00:00</v></c><c r="F21" t="s"><v>27</v></c></row><row r="22" outlineLevel="2" hidden="1"><c r="C22" s="1"><v>3</v></c><c r="D22" t="s"><v>33</v></c><c r="E22" t="d" s="2"><v>2020-07-17T00:00:00</v></c><c r="F22" t="s"><v>27</v></c></row><row r="23" outlineLevel="1" hidden="1"><c r="B23" t="s" s="3"><v>34</v></c><c r="C23" t="s" s="3"><v>35</v></c><c r="D23" t="s" s="3"><v>36</v></c><c r="E23" t="s" s="3"><v>37</v></c></row><row r="24" outlineLevel="1" hidden="1"><c r="B24" t="s"><v>38</v></c><c r="C24" t="s"><v>39</v></c><c r="D24" t="s"><v>40</v></c><c r="E24" t="s"><v>41</v></c></row><row r="25" outlineLevel="2" hidden="1"><c r="C25" t="s" s="3"><v>42</v></c><c r="D25" t="s" s="3"><v>43</v></c><c r="E25" t="s" s="3"><v>44</v></c></row><row r="26" outlineLevel="2" hidden="1"><c r="C26" t="s"><v>45</v></c><c r="D26" s="1"><v>10000</v></c><c r="E26" s="1"><v>10000</v></c></row><row r="27" outlineLevel="2" hidden="1"><c r="C27" t="s"><v>46</v></c><c r="D27" s="1"><v>192300</v></c><c r="E27" s="1"><v>186523</v></c></row><row r="28" outlineLevel="1" hidden="1"><c r="B28" t="s"><v>38</v></c><c r="C28" t="s"><v>39</v></c><c r="D28" t="s"><v>40</v></c><c r="E28" t="s"><v>41</v></c></row><row r="29" outlineLevel="1" hidden="1"><c r="B29" t="s"><v>38</v></c><c r="C29" t="s"><v>39</v></c><c r="D29" t="s"><v>40</v></c><c r="E29" t="s"><v>41</v></c></row><row r="30" outlineLevel="1" hidden="1"><c r="B30" t="s"><v>38</v></c><c r="C30" t="s"><v>39</v></c><c r="D30" t="s"><v>40</v></c><c r="E30" t="s"><v>41</v></c></row><row r="31"><c r="A31" t="s"><v>47</v></c><c r="B31" s="1"><v>2009</v></c><c r="C31" s="1"><v>0</v></c><c r="D31" s="1"><v>11</v></c></row><row r="32" outlineLevel="1" hidden="1"><c r="B32" t="s" s="3"><v>5</v></c><c r="C32" t="s" s="3"><v>6</v></c><c r="D32" t="s" s="3"><v>7</v></c><c r="E32" t="s" s="3"><v>8</v></c></row><row r="33" outlineLevel="1" hidden="1"><c r="B33" t="s"><v>48</v></c><c r="C33" t="d" s="2"><v>2000-05-31T00:00:00</v></c><c r="D33" s="1"><v>86</v></c><c r="E33" s="1"><v>42</v></c></row><row r="34" outlineLevel="2" hidden="1"><c r="C34" t="s" s="3"><v>10</v></c><c r="D34" t="s" s="3"><v>11</v></c><c r="E34" t="s" s="3"><v>12</v></c><c r="F34" t="s" s="3"><v>13</v></c></row><row r="35" outlineLevel="2" hidden="1"><c r="C35" s="1"><v>1</v></c><c r="D35" t="s"><v>49</v></c><c r="E35" t="d" s="2"><v>2020-07-17T00:00:00</v></c><c r="F35" t="s"><v>27</v></c></row><row r="36" outlineLevel="2" hidden="1"><c r="C36" s="1"><v>2</v></c><c r="D36" t="s"><v>50</v></c><c r="E36" t="d" s="2"><v>2020-07-17T00:00:00</v></c><c r="F36" t="s"><v>27</v></c></row><row r="37" outlineLevel="2" hidden="1"><c r="C37" s="1"><v>3</v></c><c r="D37" t="s"><v>51</v></c><c r="E37" t="d" s="2"><v>2020-07-17T00:00:00</v></c><c r="F37" t="s"><v>27</v></c></row><row r="38" outlineLevel="1" hidden="1"><c r="B38" t="s" s="3"><v>34</v></c><c r="C38" t="s" s="3"><v>35</v></c><c r="D38" t="s" s="3"><v>36</v></c><c r="E38" t="s" s="3"><v>37</v></c></row><row r="39" outlineLevel="1" hidden="1"><c r="B39" t="s"><v>52</v></c><c r="C39" t="s"><v>53</v></c><c r="D39" t="s"><v>40</v></c><c r="E39" t="s"><v>41</v></c></row><row r="40" outlineLevel="2" hidden="1"><c r="C40" t="s" s="3"><v>42</v></c><c r="D40" t="s" s="3"><v>43</v></c><c r="E40" t="s" s="3"><v>44</v></c></row><row r="41" outlineLevel="2" hidden="1"><c r="C41" t="s"><v>54</v></c><c r="D41" s="1"><v>25000</v></c><c r="E41" s="1"><v>19822</v></c></row><row r="42" outlineLevel="2" hidden="1"><c r="C42" t="s"><v>55</v></c><c r="D42" s="1"><v>65021</v></c><c r="E42" s="1"><v>63320</v></c></row><row r="43"><c r="A43" t="s"><v>56</v></c><c r="B43" s="1"><v>2015</v></c><c r="C43" s="1"><v>3</v></c><c r="D43" s="1"><v>1</v></c></row></sheetData>`;

        return this.createData();
    }

    public get exportHierarchicalDataWithColumnWidth() {
        this._sharedStringsData =
            `count="106" uniqueCount="57"><si><t>Artist</t></si><si><t>Debut</t></si><si><t>GrammyNominations</t></si><si><t>GrammyAwards</t></si><si><t>Naomí Yepes</t></si><si><t>Album</t></si><si><t>Launch Date</t></si><si><t>Billboard Review</t></si><si><t>US Billboard 200</t></si><si><t>Pushing up daisies</t></si><si><t>No.</t></si><si><t>Title</t></si><si><t>Released</t></si><si><t>Genre</t></si><si><t>Wood Shavifdsafdsafsangs Forever</t></si><si><t>*fdasfsa</t></si><si><t>Wood Shavifdsafdsafsavngs Forever</t></si><si><t>*vxzvczx</t></si><si><t>Wfdsafsaings Forever</t></si><si><t>*fdsacewwwqwq</t></si><si><t>Wood Shavings Forever</t></si><si><t>*rewqrqcxz</t></si><si><t>Pushing up daisies - Deluxe</t></si><si><t>Wood Shavings Forever - Remix</t></si><si><t>Punk</t></si><si><t>Utopia</t></si><si><t>SANTORINI</t></si><si><t>Hip-Hop</t></si><si><t>HEARTBEAT</t></si><si><t>OVERSEAS</t></si><si><t>Wish You Were Here</t></si><si><t>Zoom</t></si><si><t>Do You?</t></si><si><t>No Photos</t></si><si><t>Tour</t></si><si><t>Started on</t></si><si><t>Location</t></si><si><t>Headliner</t></si><si><t>Faithful Tour</t></si><si><t>Sep 12</t></si><si><t>Worldwide</t></si><si><t>NO</t></si><si><t>Country</t></si><si><t>Tickets Sold</t></si><si><t>Attendants</t></si><si><t>Belgium</t></si><si><t>USA</t></si><si><t>Babila Ebwélé</t></si><si><t>Fahrenheit</t></si><si><t>Show Out</t></si><si><t>Mood Swings</t></si><si><t>Scenario</t></si><si><t>Astroworld</t></si><si><t>Jul 21</t></si><si><t>Bulgaria</t></si><si><t>Romania</t></si><si><t>Chloe</t></si>`;

        this._worksheetData =
            `<sheetPr><outlinePr summaryBelow="0"/></sheetPr>
            <sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>
            <sheetFormatPr defaultRowHeight="15" outlineLevelRow="2" x14ac:dyDescent="0.25"/>
            <cols><col min="1" max="6" width="50" customWidth="1"/></cols>
            <sheetData><row r="1"><c r="A1" s="3" t="s"><v>0</v></c><c r="B1" s="3" t="s"><v>1</v></c><c r="C1" s="3" t="s"><v>2</v></c><c r="D1" s="3" t="s"><v>3</v></c></row><row r="2"><c r="A2" t="s"><v>4</v></c><c r="B2" s="1"><v>2011</v></c><c r="C2" s="1"><v>6</v></c><c r="D2" s="1"><v>0</v></c></row><row r="3" outlineLevel="1" hidden="1"><c r="B3" t="s" s="3"><v>5</v></c><c r="C3" t="s" s="3"><v>6</v></c><c r="D3" t="s" s="3"><v>7</v></c><c r="E3" t="s" s="3"><v>8</v></c></row><row r="4" outlineLevel="1" hidden="1"><c r="B4" t="s"><v>9</v></c><c r="C4" t="d" s="2"><v>2000-05-31T00:00:00</v></c><c r="D4" s="1"><v>86</v></c><c r="E4" s="1"><v>42</v></c></row><row r="5" outlineLevel="2" hidden="1"><c r="C5" t="s" s="3"><v>10</v></c><c r="D5" t="s" s="3"><v>11</v></c><c r="E5" t="s" s="3"><v>12</v></c><c r="F5" t="s" s="3"><v>13</v></c></row><row r="6" outlineLevel="2" hidden="1"><c r="C6" s="1"><v>1</v></c><c r="D6" t="s"><v>14</v></c><c r="E6" t="d" s="2"><v>2019-06-09T00:00:00</v></c><c r="F6" t="s"><v>15</v></c></row><row r="7" outlineLevel="2" hidden="1"><c r="C7" s="1"><v>2</v></c><c r="D7" t="s"><v>16</v></c><c r="E7" t="d" s="2"><v>2019-06-09T00:00:00</v></c><c r="F7" t="s"><v>17</v></c></row><row r="8" outlineLevel="2" hidden="1"><c r="C8" s="1"><v>3</v></c><c r="D8" t="s"><v>18</v></c><c r="E8" t="d" s="2"><v>2019-06-09T00:00:00</v></c><c r="F8" t="s"><v>19</v></c></row><row r="9" outlineLevel="2" hidden="1"><c r="C9" s="1"><v>4</v></c><c r="D9" t="s"><v>20</v></c><c r="E9" t="d" s="2"><v>2019-06-09T00:00:00</v></c><c r="F9" t="s"><v>21</v></c></row><row r="10" outlineLevel="1" hidden="1"><c r="B10" t="s"><v>22</v></c><c r="C10" t="d" s="2"><v>2001-05-31T00:00:00</v></c><c r="D10" s="1"><v>12</v></c><c r="E10" s="1"><v>2</v></c></row><row r="11" outlineLevel="2" hidden="1"><c r="C11" t="s" s="3"><v>10</v></c><c r="D11" t="s" s="3"><v>11</v></c><c r="E11" t="s" s="3"><v>12</v></c><c r="F11" t="s" s="3"><v>13</v></c></row><row r="12" outlineLevel="2" hidden="1"><c r="C12" s="1"><v>1</v></c><c r="D12" t="s"><v>23</v></c><c r="E12" t="d" s="2"><v>2020-06-09T00:00:00</v></c><c r="F12" t="s"><v>24</v></c></row><row r="13" outlineLevel="1" hidden="1"><c r="B13" t="s"><v>25</v></c><c r="C13" t="d" s="2"><v>2021-12-19T00:00:00</v></c><c r="D13" s="1"><v>1</v></c><c r="E13" s="1"><v>1</v></c></row><row r="14" outlineLevel="2" hidden="1"><c r="C14" t="s" s="3"><v>10</v></c><c r="D14" t="s" s="3"><v>11</v></c><c r="E14" t="s" s="3"><v>12</v></c><c r="F14" t="s" s="3"><v>13</v></c></row><row r="15" outlineLevel="2" hidden="1"><c r="C15" s="1"><v>1</v></c><c r="D15" t="s"><v>26</v></c><c r="E15" t="d" s="2"><v>2021-12-19T00:00:00</v></c><c r="F15" t="s"><v>27</v></c></row><row r="16" outlineLevel="2" hidden="1"><c r="C16" s="1"><v>2</v></c><c r="D16" t="s"><v>28</v></c><c r="E16" t="d" s="2"><v>2021-12-19T00:00:00</v></c><c r="F16" t="s"><v>27</v></c></row><row r="17" outlineLevel="2" hidden="1"><c r="C17" s="1"><v>3</v></c><c r="D17" t="s"><v>29</v></c><c r="E17" t="d" s="2"><v>2021-12-19T00:00:00</v></c><c r="F17" t="s"><v>27</v></c></row><row r="18" outlineLevel="1" hidden="1"><c r="B18" t="s"><v>30</v></c><c r="C18" t="d" s="2"><v>2020-07-17T00:00:00</v></c><c r="D18" s="1"><v>5</v></c><c r="E18" s="1"><v>3</v></c></row><row r="19" outlineLevel="2" hidden="1"><c r="C19" t="s" s="3"><v>10</v></c><c r="D19" t="s" s="3"><v>11</v></c><c r="E19" t="s" s="3"><v>12</v></c><c r="F19" t="s" s="3"><v>13</v></c></row><row r="20" outlineLevel="2" hidden="1"><c r="C20" s="1"><v>1</v></c><c r="D20" t="s"><v>31</v></c><c r="E20" t="d" s="2"><v>2020-07-17T00:00:00</v></c><c r="F20" t="s"><v>27</v></c></row><row r="21" outlineLevel="2" hidden="1"><c r="C21" s="1"><v>2</v></c><c r="D21" t="s"><v>32</v></c><c r="E21" t="d" s="2"><v>2020-07-17T00:00:00</v></c><c r="F21" t="s"><v>27</v></c></row><row r="22" outlineLevel="2" hidden="1"><c r="C22" s="1"><v>3</v></c><c r="D22" t="s"><v>33</v></c><c r="E22" t="d" s="2"><v>2020-07-17T00:00:00</v></c><c r="F22" t="s"><v>27</v></c></row><row r="23" outlineLevel="1" hidden="1"><c r="B23" t="s" s="3"><v>34</v></c><c r="C23" t="s" s="3"><v>35</v></c><c r="D23" t="s" s="3"><v>36</v></c><c r="E23" t="s" s="3"><v>37</v></c></row><row r="24" outlineLevel="1" hidden="1"><c r="B24" t="s"><v>38</v></c><c r="C24" t="s"><v>39</v></c><c r="D24" t="s"><v>40</v></c><c r="E24" t="s"><v>41</v></c></row><row r="25" outlineLevel="2" hidden="1"><c r="C25" t="s" s="3"><v>42</v></c><c r="D25" t="s" s="3"><v>43</v></c><c r="E25" t="s" s="3"><v>44</v></c></row><row r="26" outlineLevel="2" hidden="1"><c r="C26" t="s"><v>45</v></c><c r="D26" s="1"><v>10000</v></c><c r="E26" s="1"><v>10000</v></c></row><row r="27" outlineLevel="2" hidden="1"><c r="C27" t="s"><v>46</v></c><c r="D27" s="1"><v>192300</v></c><c r="E27" s="1"><v>186523</v></c></row><row r="28" outlineLevel="1" hidden="1"><c r="B28" t="s"><v>38</v></c><c r="C28" t="s"><v>39</v></c><c r="D28" t="s"><v>40</v></c><c r="E28" t="s"><v>41</v></c></row><row r="29" outlineLevel="1" hidden="1"><c r="B29" t="s"><v>38</v></c><c r="C29" t="s"><v>39</v></c><c r="D29" t="s"><v>40</v></c><c r="E29" t="s"><v>41</v></c></row><row r="30" outlineLevel="1" hidden="1"><c r="B30" t="s"><v>38</v></c><c r="C30" t="s"><v>39</v></c><c r="D30" t="s"><v>40</v></c><c r="E30" t="s"><v>41</v></c></row><row r="31"><c r="A31" t="s"><v>47</v></c><c r="B31" s="1"><v>2009</v></c><c r="C31" s="1"><v>0</v></c><c r="D31" s="1"><v>11</v></c></row><row r="32" outlineLevel="1" hidden="1"><c r="B32" t="s" s="3"><v>5</v></c><c r="C32" t="s" s="3"><v>6</v></c><c r="D32" t="s" s="3"><v>7</v></c><c r="E32" t="s" s="3"><v>8</v></c></row><row r="33" outlineLevel="1" hidden="1"><c r="B33" t="s"><v>48</v></c><c r="C33" t="d" s="2"><v>2000-05-31T00:00:00</v></c><c r="D33" s="1"><v>86</v></c><c r="E33" s="1"><v>42</v></c></row><row r="34" outlineLevel="2" hidden="1"><c r="C34" t="s" s="3"><v>10</v></c><c r="D34" t="s" s="3"><v>11</v></c><c r="E34" t="s" s="3"><v>12</v></c><c r="F34" t="s" s="3"><v>13</v></c></row><row r="35" outlineLevel="2" hidden="1"><c r="C35" s="1"><v>1</v></c><c r="D35" t="s"><v>49</v></c><c r="E35" t="d" s="2"><v>2020-07-17T00:00:00</v></c><c r="F35" t="s"><v>27</v></c></row><row r="36" outlineLevel="2" hidden="1"><c r="C36" s="1"><v>2</v></c><c r="D36" t="s"><v>50</v></c><c r="E36" t="d" s="2"><v>2020-07-17T00:00:00</v></c><c r="F36" t="s"><v>27</v></c></row><row r="37" outlineLevel="2" hidden="1"><c r="C37" s="1"><v>3</v></c><c r="D37" t="s"><v>51</v></c><c r="E37" t="d" s="2"><v>2020-07-17T00:00:00</v></c><c r="F37" t="s"><v>27</v></c></row><row r="38" outlineLevel="1" hidden="1"><c r="B38" t="s" s="3"><v>34</v></c><c r="C38" t="s" s="3"><v>35</v></c><c r="D38" t="s" s="3"><v>36</v></c><c r="E38" t="s" s="3"><v>37</v></c></row><row r="39" outlineLevel="1" hidden="1"><c r="B39" t="s"><v>52</v></c><c r="C39" t="s"><v>53</v></c><c r="D39" t="s"><v>40</v></c><c r="E39" t="s"><v>41</v></c></row><row r="40" outlineLevel="2" hidden="1"><c r="C40" t="s" s="3"><v>42</v></c><c r="D40" t="s" s="3"><v>43</v></c><c r="E40" t="s" s="3"><v>44</v></c></row><row r="41" outlineLevel="2" hidden="1"><c r="C41" t="s"><v>54</v></c><c r="D41" s="1"><v>25000</v></c><c r="E41" s="1"><v>19822</v></c></row><row r="42" outlineLevel="2" hidden="1"><c r="C42" t="s"><v>55</v></c><c r="D42" s="1"><v>65021</v></c><c r="E42" s="1"><v>63320</v></c></row><row r="43"><c r="A43" t="s"><v>56</v></c><c r="B43" s="1"><v>2015</v></c><c r="C43" s="1"><v>3</v></c><c r="D43" s="1"><v>1</v></c></row></sheetData>`;

        return this.createData();
    }

    public get exportHierarchicalDataWithExpandedRows() {
        this._sharedStringsData =
            `count="106" uniqueCount="57"><si><t>Artist</t></si><si><t>Debut</t></si><si><t>GrammyNominations</t></si><si><t>GrammyAwards</t></si><si><t>Naomí Yepes</t></si><si><t>Album</t></si><si><t>Launch Date</t></si><si><t>Billboard Review</t></si><si><t>US Billboard 200</t></si><si><t>Pushing up daisies</t></si><si><t>No.</t></si><si><t>Title</t></si><si><t>Released</t></si><si><t>Genre</t></si><si><t>Wood Shavifdsafdsafsangs Forever</t></si><si><t>*fdasfsa</t></si><si><t>Wood Shavifdsafdsafsavngs Forever</t></si><si><t>*vxzvczx</t></si><si><t>Wfdsafsaings Forever</t></si><si><t>*fdsacewwwqwq</t></si><si><t>Wood Shavings Forever</t></si><si><t>*rewqrqcxz</t></si><si><t>Pushing up daisies - Deluxe</t></si><si><t>Wood Shavings Forever - Remix</t></si><si><t>Punk</t></si><si><t>Utopia</t></si><si><t>SANTORINI</t></si><si><t>Hip-Hop</t></si><si><t>HEARTBEAT</t></si><si><t>OVERSEAS</t></si><si><t>Wish You Were Here</t></si><si><t>Zoom</t></si><si><t>Do You?</t></si><si><t>No Photos</t></si><si><t>Tour</t></si><si><t>Started on</t></si><si><t>Location</t></si><si><t>Headliner</t></si><si><t>Faithful Tour</t></si><si><t>Sep 12</t></si><si><t>Worldwide</t></si><si><t>NO</t></si><si><t>Country</t></si><si><t>Tickets Sold</t></si><si><t>Attendants</t></si><si><t>Belgium</t></si><si><t>USA</t></si><si><t>Babila Ebwélé</t></si><si><t>Fahrenheit</t></si><si><t>Show Out</t></si><si><t>Mood Swings</t></si><si><t>Scenario</t></si><si><t>Astroworld</t></si><si><t>Jul 21</t></si><si><t>Bulgaria</t></si><si><t>Romania</t></si><si><t>Chloe</t></si>`;

        this._worksheetData =
            `<sheetPr><outlinePr summaryBelow="0"/></sheetPr>
            <sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>
            <sheetFormatPr defaultRowHeight="15" outlineLevelRow="2" x14ac:dyDescent="0.25"/>
            <cols><col min="1" max="6" width="20" customWidth="1"/></cols>
            <sheetData><row r="1"><c r="A1" s="3" t="s"><v>0</v></c><c r="B1" s="3" t="s"><v>1</v></c><c r="C1" s="3" t="s"><v>2</v></c><c r="D1" s="3" t="s"><v>3</v></c></row><row r="2"><c r="A2" t="s"><v>4</v></c><c r="B2" s="1"><v>2011</v></c><c r="C2" s="1"><v>6</v></c><c r="D2" s="1"><v>0</v></c></row><row r="3" outlineLevel="1"><c r="B3" t="s" s="3"><v>5</v></c><c r="C3" t="s" s="3"><v>6</v></c><c r="D3" t="s" s="3"><v>7</v></c><c r="E3" t="s" s="3"><v>8</v></c></row><row r="4" outlineLevel="1"><c r="B4" t="s"><v>9</v></c><c r="C4" t="d" s="2"><v>2000-05-31T00:00:00</v></c><c r="D4" s="1"><v>86</v></c><c r="E4" s="1"><v>42</v></c></row><row r="5" outlineLevel="2" hidden="1"><c r="C5" t="s" s="3"><v>10</v></c><c r="D5" t="s" s="3"><v>11</v></c><c r="E5" t="s" s="3"><v>12</v></c><c r="F5" t="s" s="3"><v>13</v></c></row><row r="6" outlineLevel="2" hidden="1"><c r="C6" s="1"><v>1</v></c><c r="D6" t="s"><v>14</v></c><c r="E6" t="d" s="2"><v>2019-06-09T00:00:00</v></c><c r="F6" t="s"><v>15</v></c></row><row r="7" outlineLevel="2" hidden="1"><c r="C7" s="1"><v>2</v></c><c r="D7" t="s"><v>16</v></c><c r="E7" t="d" s="2"><v>2019-06-09T00:00:00</v></c><c r="F7" t="s"><v>17</v></c></row><row r="8" outlineLevel="2" hidden="1"><c r="C8" s="1"><v>3</v></c><c r="D8" t="s"><v>18</v></c><c r="E8" t="d" s="2"><v>2019-06-09T00:00:00</v></c><c r="F8" t="s"><v>19</v></c></row><row r="9" outlineLevel="2" hidden="1"><c r="C9" s="1"><v>4</v></c><c r="D9" t="s"><v>20</v></c><c r="E9" t="d" s="2"><v>2019-06-09T00:00:00</v></c><c r="F9" t="s"><v>21</v></c></row><row r="10" outlineLevel="1"><c r="B10" t="s"><v>22</v></c><c r="C10" t="d" s="2"><v>2001-05-31T00:00:00</v></c><c r="D10" s="1"><v>12</v></c><c r="E10" s="1"><v>2</v></c></row><row r="11" outlineLevel="2" hidden="1"><c r="C11" t="s" s="3"><v>10</v></c><c r="D11" t="s" s="3"><v>11</v></c><c r="E11" t="s" s="3"><v>12</v></c><c r="F11" t="s" s="3"><v>13</v></c></row><row r="12" outlineLevel="2" hidden="1"><c r="C12" s="1"><v>1</v></c><c r="D12" t="s"><v>23</v></c><c r="E12" t="d" s="2"><v>2020-06-09T00:00:00</v></c><c r="F12" t="s"><v>24</v></c></row><row r="13" outlineLevel="1"><c r="B13" t="s"><v>25</v></c><c r="C13" t="d" s="2"><v>2021-12-19T00:00:00</v></c><c r="D13" s="1"><v>1</v></c><c r="E13" s="1"><v>1</v></c></row><row r="14" outlineLevel="2"><c r="C14" t="s" s="3"><v>10</v></c><c r="D14" t="s" s="3"><v>11</v></c><c r="E14" t="s" s="3"><v>12</v></c><c r="F14" t="s" s="3"><v>13</v></c></row><row r="15" outlineLevel="2"><c r="C15" s="1"><v>1</v></c><c r="D15" t="s"><v>26</v></c><c r="E15" t="d" s="2"><v>2021-12-19T00:00:00</v></c><c r="F15" t="s"><v>27</v></c></row><row r="16" outlineLevel="2"><c r="C16" s="1"><v>2</v></c><c r="D16" t="s"><v>28</v></c><c r="E16" t="d" s="2"><v>2021-12-19T00:00:00</v></c><c r="F16" t="s"><v>27</v></c></row><row r="17" outlineLevel="2"><c r="C17" s="1"><v>3</v></c><c r="D17" t="s"><v>29</v></c><c r="E17" t="d" s="2"><v>2021-12-19T00:00:00</v></c><c r="F17" t="s"><v>27</v></c></row><row r="18" outlineLevel="1"><c r="B18" t="s"><v>30</v></c><c r="C18" t="d" s="2"><v>2020-07-17T00:00:00</v></c><c r="D18" s="1"><v>5</v></c><c r="E18" s="1"><v>3</v></c></row><row r="19" outlineLevel="2" hidden="1"><c r="C19" t="s" s="3"><v>10</v></c><c r="D19" t="s" s="3"><v>11</v></c><c r="E19" t="s" s="3"><v>12</v></c><c r="F19" t="s" s="3"><v>13</v></c></row><row r="20" outlineLevel="2" hidden="1"><c r="C20" s="1"><v>1</v></c><c r="D20" t="s"><v>31</v></c><c r="E20" t="d" s="2"><v>2020-07-17T00:00:00</v></c><c r="F20" t="s"><v>27</v></c></row><row r="21" outlineLevel="2" hidden="1"><c r="C21" s="1"><v>2</v></c><c r="D21" t="s"><v>32</v></c><c r="E21" t="d" s="2"><v>2020-07-17T00:00:00</v></c><c r="F21" t="s"><v>27</v></c></row><row r="22" outlineLevel="2" hidden="1"><c r="C22" s="1"><v>3</v></c><c r="D22" t="s"><v>33</v></c><c r="E22" t="d" s="2"><v>2020-07-17T00:00:00</v></c><c r="F22" t="s"><v>27</v></c></row><row r="23" outlineLevel="1"><c r="B23" t="s" s="3"><v>34</v></c><c r="C23" t="s" s="3"><v>35</v></c><c r="D23" t="s" s="3"><v>36</v></c><c r="E23" t="s" s="3"><v>37</v></c></row><row r="24" outlineLevel="1"><c r="B24" t="s"><v>38</v></c><c r="C24" t="s"><v>39</v></c><c r="D24" t="s"><v>40</v></c><c r="E24" t="s"><v>41</v></c></row><row r="25" outlineLevel="2"><c r="C25" t="s" s="3"><v>42</v></c><c r="D25" t="s" s="3"><v>43</v></c><c r="E25" t="s" s="3"><v>44</v></c></row><row r="26" outlineLevel="2"><c r="C26" t="s"><v>45</v></c><c r="D26" s="1"><v>10000</v></c><c r="E26" s="1"><v>10000</v></c></row><row r="27" outlineLevel="2"><c r="C27" t="s"><v>46</v></c><c r="D27" s="1"><v>192300</v></c><c r="E27" s="1"><v>186523</v></c></row><row r="28" outlineLevel="1"><c r="B28" t="s"><v>38</v></c><c r="C28" t="s"><v>39</v></c><c r="D28" t="s"><v>40</v></c><c r="E28" t="s"><v>41</v></c></row><row r="29" outlineLevel="1"><c r="B29" t="s"><v>38</v></c><c r="C29" t="s"><v>39</v></c><c r="D29" t="s"><v>40</v></c><c r="E29" t="s"><v>41</v></c></row><row r="30" outlineLevel="1"><c r="B30" t="s"><v>38</v></c><c r="C30" t="s"><v>39</v></c><c r="D30" t="s"><v>40</v></c><c r="E30" t="s"><v>41</v></c></row><row r="31"><c r="A31" t="s"><v>47</v></c><c r="B31" s="1"><v>2009</v></c><c r="C31" s="1"><v>0</v></c><c r="D31" s="1"><v>11</v></c></row><row r="32" outlineLevel="1"><c r="B32" t="s" s="3"><v>5</v></c><c r="C32" t="s" s="3"><v>6</v></c><c r="D32" t="s" s="3"><v>7</v></c><c r="E32" t="s" s="3"><v>8</v></c></row><row r="33" outlineLevel="1"><c r="B33" t="s"><v>48</v></c><c r="C33" t="d" s="2"><v>2000-05-31T00:00:00</v></c><c r="D33" s="1"><v>86</v></c><c r="E33" s="1"><v>42</v></c></row><row r="34" outlineLevel="2" hidden="1"><c r="C34" t="s" s="3"><v>10</v></c><c r="D34" t="s" s="3"><v>11</v></c><c r="E34" t="s" s="3"><v>12</v></c><c r="F34" t="s" s="3"><v>13</v></c></row><row r="35" outlineLevel="2" hidden="1"><c r="C35" s="1"><v>1</v></c><c r="D35" t="s"><v>49</v></c><c r="E35" t="d" s="2"><v>2020-07-17T00:00:00</v></c><c r="F35" t="s"><v>27</v></c></row><row r="36" outlineLevel="2" hidden="1"><c r="C36" s="1"><v>2</v></c><c r="D36" t="s"><v>50</v></c><c r="E36" t="d" s="2"><v>2020-07-17T00:00:00</v></c><c r="F36" t="s"><v>27</v></c></row><row r="37" outlineLevel="2" hidden="1"><c r="C37" s="1"><v>3</v></c><c r="D37" t="s"><v>51</v></c><c r="E37" t="d" s="2"><v>2020-07-17T00:00:00</v></c><c r="F37" t="s"><v>27</v></c></row><row r="38" outlineLevel="1"><c r="B38" t="s" s="3"><v>34</v></c><c r="C38" t="s" s="3"><v>35</v></c><c r="D38" t="s" s="3"><v>36</v></c><c r="E38" t="s" s="3"><v>37</v></c></row><row r="39" outlineLevel="1"><c r="B39" t="s"><v>52</v></c><c r="C39" t="s"><v>53</v></c><c r="D39" t="s"><v>40</v></c><c r="E39" t="s"><v>41</v></c></row><row r="40" outlineLevel="2"><c r="C40" t="s" s="3"><v>42</v></c><c r="D40" t="s" s="3"><v>43</v></c><c r="E40" t="s" s="3"><v>44</v></c></row><row r="41" outlineLevel="2"><c r="C41" t="s"><v>54</v></c><c r="D41" s="1"><v>25000</v></c><c r="E41" s="1"><v>19822</v></c></row><row r="42" outlineLevel="2"><c r="C42" t="s"><v>55</v></c><c r="D42" s="1"><v>65021</v></c><c r="E42" s="1"><v>63320</v></c></row><row r="43"><c r="A43" t="s"><v>56</v></c><c r="B43" s="1"><v>2015</v></c><c r="C43" s="1"><v>3</v></c><c r="D43" s="1"><v>1</v></c></row></sheetData>`;

        return this.createData();
    }

    public get exportSortedHierarchicalData() {
        this._sharedStringsData =
            `count="106" uniqueCount="57"><si><t>Artist</t></si><si><t>Debut</t></si><si><t>GrammyNominations</t></si><si><t>GrammyAwards</t></si><si><t>Naomí Yepes</t></si><si><t>Album</t></si><si><t>Launch Date</t></si><si><t>Billboard Review</t></si><si><t>US Billboard 200</t></si><si><t>Pushing up daisies</t></si><si><t>No.</t></si><si><t>Title</t></si><si><t>Released</t></si><si><t>Genre</t></si><si><t>Wood Shavifdsafdsafsangs Forever</t></si><si><t>*fdasfsa</t></si><si><t>Wood Shavifdsafdsafsavngs Forever</t></si><si><t>*vxzvczx</t></si><si><t>Wfdsafsaings Forever</t></si><si><t>*fdsacewwwqwq</t></si><si><t>Wood Shavings Forever</t></si><si><t>*rewqrqcxz</t></si><si><t>Pushing up daisies - Deluxe</t></si><si><t>Wood Shavings Forever - Remix</t></si><si><t>Punk</t></si><si><t>Utopia</t></si><si><t>SANTORINI</t></si><si><t>Hip-Hop</t></si><si><t>HEARTBEAT</t></si><si><t>OVERSEAS</t></si><si><t>Wish You Were Here</t></si><si><t>Zoom</t></si><si><t>Do You?</t></si><si><t>No Photos</t></si><si><t>Tour</t></si><si><t>Started on</t></si><si><t>Location</t></si><si><t>Headliner</t></si><si><t>Faithful Tour</t></si><si><t>Sep 12</t></si><si><t>Worldwide</t></si><si><t>NO</t></si><si><t>Country</t></si><si><t>Tickets Sold</t></si><si><t>Attendants</t></si><si><t>Belgium</t></si><si><t>USA</t></si><si><t>Chloe</t></si><si><t>Babila Ebwélé</t></si><si><t>Fahrenheit</t></si><si><t>Show Out</t></si><si><t>Mood Swings</t></si><si><t>Scenario</t></si><si><t>Astroworld</t></si><si><t>Jul 21</t></si><si><t>Bulgaria</t></si><si><t>Romania</t></si>`;

        this._worksheetData =
            `<sheetPr><outlinePr summaryBelow="0"/></sheetPr>
            <sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>
            <sheetFormatPr defaultRowHeight="15" outlineLevelRow="2" x14ac:dyDescent="0.25"/>
            <cols><col min="1" max="6" width="20" customWidth="1"/></cols>
            <sheetData><row r="1"><c r="A1" s="3" t="s"><v>0</v></c><c r="B1" s="3" t="s"><v>1</v></c><c r="C1" s="3" t="s"><v>2</v></c><c r="D1" s="3" t="s"><v>3</v></c></row><row r="2"><c r="A2" t="s"><v>4</v></c><c r="B2" s="1"><v>2011</v></c><c r="C2" s="1"><v>6</v></c><c r="D2" s="1"><v>0</v></c></row><row r="3" outlineLevel="1" hidden="1"><c r="B3" t="s" s="3"><v>5</v></c><c r="C3" t="s" s="3"><v>6</v></c><c r="D3" t="s" s="3"><v>7</v></c><c r="E3" t="s" s="3"><v>8</v></c></row><row r="4" outlineLevel="1" hidden="1"><c r="B4" t="s"><v>9</v></c><c r="C4" t="d" s="2"><v>2000-05-31T00:00:00</v></c><c r="D4" s="1"><v>86</v></c><c r="E4" s="1"><v>42</v></c></row><row r="5" outlineLevel="2" hidden="1"><c r="C5" t="s" s="3"><v>10</v></c><c r="D5" t="s" s="3"><v>11</v></c><c r="E5" t="s" s="3"><v>12</v></c><c r="F5" t="s" s="3"><v>13</v></c></row><row r="6" outlineLevel="2" hidden="1"><c r="C6" s="1"><v>1</v></c><c r="D6" t="s"><v>14</v></c><c r="E6" t="d" s="2"><v>2019-06-09T00:00:00</v></c><c r="F6" t="s"><v>15</v></c></row><row r="7" outlineLevel="2" hidden="1"><c r="C7" s="1"><v>2</v></c><c r="D7" t="s"><v>16</v></c><c r="E7" t="d" s="2"><v>2019-06-09T00:00:00</v></c><c r="F7" t="s"><v>17</v></c></row><row r="8" outlineLevel="2" hidden="1"><c r="C8" s="1"><v>3</v></c><c r="D8" t="s"><v>18</v></c><c r="E8" t="d" s="2"><v>2019-06-09T00:00:00</v></c><c r="F8" t="s"><v>19</v></c></row><row r="9" outlineLevel="2" hidden="1"><c r="C9" s="1"><v>4</v></c><c r="D9" t="s"><v>20</v></c><c r="E9" t="d" s="2"><v>2019-06-09T00:00:00</v></c><c r="F9" t="s"><v>21</v></c></row><row r="10" outlineLevel="1" hidden="1"><c r="B10" t="s"><v>22</v></c><c r="C10" t="d" s="2"><v>2001-05-31T00:00:00</v></c><c r="D10" s="1"><v>12</v></c><c r="E10" s="1"><v>2</v></c></row><row r="11" outlineLevel="2" hidden="1"><c r="C11" t="s" s="3"><v>10</v></c><c r="D11" t="s" s="3"><v>11</v></c><c r="E11" t="s" s="3"><v>12</v></c><c r="F11" t="s" s="3"><v>13</v></c></row><row r="12" outlineLevel="2" hidden="1"><c r="C12" s="1"><v>1</v></c><c r="D12" t="s"><v>23</v></c><c r="E12" t="d" s="2"><v>2020-06-09T00:00:00</v></c><c r="F12" t="s"><v>24</v></c></row><row r="13" outlineLevel="1" hidden="1"><c r="B13" t="s"><v>25</v></c><c r="C13" t="d" s="2"><v>2021-12-19T00:00:00</v></c><c r="D13" s="1"><v>1</v></c><c r="E13" s="1"><v>1</v></c></row><row r="14" outlineLevel="2" hidden="1"><c r="C14" t="s" s="3"><v>10</v></c><c r="D14" t="s" s="3"><v>11</v></c><c r="E14" t="s" s="3"><v>12</v></c><c r="F14" t="s" s="3"><v>13</v></c></row><row r="15" outlineLevel="2" hidden="1"><c r="C15" s="1"><v>1</v></c><c r="D15" t="s"><v>26</v></c><c r="E15" t="d" s="2"><v>2021-12-19T00:00:00</v></c><c r="F15" t="s"><v>27</v></c></row><row r="16" outlineLevel="2" hidden="1"><c r="C16" s="1"><v>2</v></c><c r="D16" t="s"><v>28</v></c><c r="E16" t="d" s="2"><v>2021-12-19T00:00:00</v></c><c r="F16" t="s"><v>27</v></c></row><row r="17" outlineLevel="2" hidden="1"><c r="C17" s="1"><v>3</v></c><c r="D17" t="s"><v>29</v></c><c r="E17" t="d" s="2"><v>2021-12-19T00:00:00</v></c><c r="F17" t="s"><v>27</v></c></row><row r="18" outlineLevel="1" hidden="1"><c r="B18" t="s"><v>30</v></c><c r="C18" t="d" s="2"><v>2020-07-17T00:00:00</v></c><c r="D18" s="1"><v>5</v></c><c r="E18" s="1"><v>3</v></c></row><row r="19" outlineLevel="2" hidden="1"><c r="C19" t="s" s="3"><v>10</v></c><c r="D19" t="s" s="3"><v>11</v></c><c r="E19" t="s" s="3"><v>12</v></c><c r="F19" t="s" s="3"><v>13</v></c></row><row r="20" outlineLevel="2" hidden="1"><c r="C20" s="1"><v>1</v></c><c r="D20" t="s"><v>31</v></c><c r="E20" t="d" s="2"><v>2020-07-17T00:00:00</v></c><c r="F20" t="s"><v>27</v></c></row><row r="21" outlineLevel="2" hidden="1"><c r="C21" s="1"><v>2</v></c><c r="D21" t="s"><v>32</v></c><c r="E21" t="d" s="2"><v>2020-07-17T00:00:00</v></c><c r="F21" t="s"><v>27</v></c></row><row r="22" outlineLevel="2" hidden="1"><c r="C22" s="1"><v>3</v></c><c r="D22" t="s"><v>33</v></c><c r="E22" t="d" s="2"><v>2020-07-17T00:00:00</v></c><c r="F22" t="s"><v>27</v></c></row><row r="23" outlineLevel="1" hidden="1"><c r="B23" t="s" s="3"><v>34</v></c><c r="C23" t="s" s="3"><v>35</v></c><c r="D23" t="s" s="3"><v>36</v></c><c r="E23" t="s" s="3"><v>37</v></c></row><row r="24" outlineLevel="1" hidden="1"><c r="B24" t="s"><v>38</v></c><c r="C24" t="s"><v>39</v></c><c r="D24" t="s"><v>40</v></c><c r="E24" t="s"><v>41</v></c></row><row r="25" outlineLevel="2" hidden="1"><c r="C25" t="s" s="3"><v>42</v></c><c r="D25" t="s" s="3"><v>43</v></c><c r="E25" t="s" s="3"><v>44</v></c></row><row r="26" outlineLevel="2" hidden="1"><c r="C26" t="s"><v>45</v></c><c r="D26" s="1"><v>10000</v></c><c r="E26" s="1"><v>10000</v></c></row><row r="27" outlineLevel="2" hidden="1"><c r="C27" t="s"><v>46</v></c><c r="D27" s="1"><v>192300</v></c><c r="E27" s="1"><v>186523</v></c></row><row r="28" outlineLevel="1" hidden="1"><c r="B28" t="s"><v>38</v></c><c r="C28" t="s"><v>39</v></c><c r="D28" t="s"><v>40</v></c><c r="E28" t="s"><v>41</v></c></row><row r="29" outlineLevel="1" hidden="1"><c r="B29" t="s"><v>38</v></c><c r="C29" t="s"><v>39</v></c><c r="D29" t="s"><v>40</v></c><c r="E29" t="s"><v>41</v></c></row><row r="30" outlineLevel="1" hidden="1"><c r="B30" t="s"><v>38</v></c><c r="C30" t="s"><v>39</v></c><c r="D30" t="s"><v>40</v></c><c r="E30" t="s"><v>41</v></c></row><row r="31"><c r="A31" t="s"><v>47</v></c><c r="B31" s="1"><v>2015</v></c><c r="C31" s="1"><v>3</v></c><c r="D31" s="1"><v>1</v></c></row><row r="32"><c r="A32" t="s"><v>48</v></c><c r="B32" s="1"><v>2009</v></c><c r="C32" s="1"><v>0</v></c><c r="D32" s="1"><v>11</v></c></row><row r="33" outlineLevel="1" hidden="1"><c r="B33" t="s" s="3"><v>5</v></c><c r="C33" t="s" s="3"><v>6</v></c><c r="D33" t="s" s="3"><v>7</v></c><c r="E33" t="s" s="3"><v>8</v></c></row><row r="34" outlineLevel="1" hidden="1"><c r="B34" t="s"><v>49</v></c><c r="C34" t="d" s="2"><v>2000-05-31T00:00:00</v></c><c r="D34" s="1"><v>86</v></c><c r="E34" s="1"><v>42</v></c></row><row r="35" outlineLevel="2" hidden="1"><c r="C35" t="s" s="3"><v>10</v></c><c r="D35" t="s" s="3"><v>11</v></c><c r="E35" t="s" s="3"><v>12</v></c><c r="F35" t="s" s="3"><v>13</v></c></row><row r="36" outlineLevel="2" hidden="1"><c r="C36" s="1"><v>1</v></c><c r="D36" t="s"><v>50</v></c><c r="E36" t="d" s="2"><v>2020-07-17T00:00:00</v></c><c r="F36" t="s"><v>27</v></c></row><row r="37" outlineLevel="2" hidden="1"><c r="C37" s="1"><v>2</v></c><c r="D37" t="s"><v>51</v></c><c r="E37" t="d" s="2"><v>2020-07-17T00:00:00</v></c><c r="F37" t="s"><v>27</v></c></row><row r="38" outlineLevel="2" hidden="1"><c r="C38" s="1"><v>3</v></c><c r="D38" t="s"><v>52</v></c><c r="E38" t="d" s="2"><v>2020-07-17T00:00:00</v></c><c r="F38" t="s"><v>27</v></c></row><row r="39" outlineLevel="1" hidden="1"><c r="B39" t="s" s="3"><v>34</v></c><c r="C39" t="s" s="3"><v>35</v></c><c r="D39" t="s" s="3"><v>36</v></c><c r="E39" t="s" s="3"><v>37</v></c></row><row r="40" outlineLevel="1" hidden="1"><c r="B40" t="s"><v>53</v></c><c r="C40" t="s"><v>54</v></c><c r="D40" t="s"><v>40</v></c><c r="E40" t="s"><v>41</v></c></row><row r="41" outlineLevel="2" hidden="1"><c r="C41" t="s" s="3"><v>42</v></c><c r="D41" t="s" s="3"><v>43</v></c><c r="E41" t="s" s="3"><v>44</v></c></row><row r="42" outlineLevel="2" hidden="1"><c r="C42" t="s"><v>55</v></c><c r="D42" s="1"><v>25000</v></c><c r="E42" s="1"><v>19822</v></c></row><row r="43" outlineLevel="2" hidden="1"><c r="C43" t="s"><v>56</v></c><c r="D43" s="1"><v>65021</v></c><c r="E43" s="1"><v>63320</v></c></row></sheetData>`;

        return this.createData();
    }

    public get exportFilteredHierarchicalData() {
        this._sharedStringsData =
            `count="33" uniqueCount="31"><si><t>Artist</t></si><si><t>Debut</t></si><si><t>GrammyNominations</t></si><si><t>GrammyAwards</t></si><si><t>Babila Ebwélé</t></si><si><t>Album</t></si><si><t>Launch Date</t></si><si><t>Billboard Review</t></si><si><t>US Billboard 200</t></si><si><t>Fahrenheit</t></si><si><t>No.</t></si><si><t>Title</t></si><si><t>Released</t></si><si><t>Genre</t></si><si><t>Show Out</t></si><si><t>Hip-Hop</t></si><si><t>Mood Swings</t></si><si><t>Scenario</t></si><si><t>Tour</t></si><si><t>Started on</t></si><si><t>Location</t></si><si><t>Headliner</t></si><si><t>Astroworld</t></si><si><t>Jul 21</t></si><si><t>Worldwide</t></si><si><t>NO</t></si><si><t>Country</t></si><si><t>Tickets Sold</t></si><si><t>Attendants</t></si><si><t>Bulgaria</t></si><si><t>Romania</t></si>`;

        this._worksheetData =
            `<sheetPr><outlinePr summaryBelow="0"/></sheetPr>
            <sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>
            <sheetFormatPr defaultRowHeight="15" outlineLevelRow="2" x14ac:dyDescent="0.25"/>
            <cols><col min="1" max="6" width="20" customWidth="1"/></cols>
            <sheetData><row r="1"><c r="A1" s="3" t="s"><v>0</v></c><c r="B1" s="3" t="s"><v>1</v></c><c r="C1" s="3" t="s"><v>2</v></c><c r="D1" s="3" t="s"><v>3</v></c></row><row r="2"><c r="A2" t="s"><v>4</v></c><c r="B2" s="1"><v>2009</v></c><c r="C2" s="1"><v>0</v></c><c r="D2" s="1"><v>11</v></c></row><row r="3" outlineLevel="1" hidden="1"><c r="B3" t="s" s="3"><v>5</v></c><c r="C3" t="s" s="3"><v>6</v></c><c r="D3" t="s" s="3"><v>7</v></c><c r="E3" t="s" s="3"><v>8</v></c></row><row r="4" outlineLevel="1" hidden="1"><c r="B4" t="s"><v>9</v></c><c r="C4" t="d" s="2"><v>2000-05-31T00:00:00</v></c><c r="D4" s="1"><v>86</v></c><c r="E4" s="1"><v>42</v></c></row><row r="5" outlineLevel="2" hidden="1"><c r="C5" t="s" s="3"><v>10</v></c><c r="D5" t="s" s="3"><v>11</v></c><c r="E5" t="s" s="3"><v>12</v></c><c r="F5" t="s" s="3"><v>13</v></c></row><row r="6" outlineLevel="2" hidden="1"><c r="C6" s="1"><v>1</v></c><c r="D6" t="s"><v>14</v></c><c r="E6" t="d" s="2"><v>2020-07-17T00:00:00</v></c><c r="F6" t="s"><v>15</v></c></row><row r="7" outlineLevel="2" hidden="1"><c r="C7" s="1"><v>2</v></c><c r="D7" t="s"><v>16</v></c><c r="E7" t="d" s="2"><v>2020-07-17T00:00:00</v></c><c r="F7" t="s"><v>15</v></c></row><row r="8" outlineLevel="2" hidden="1"><c r="C8" s="1"><v>3</v></c><c r="D8" t="s"><v>17</v></c><c r="E8" t="d" s="2"><v>2020-07-17T00:00:00</v></c><c r="F8" t="s"><v>15</v></c></row><row r="9" outlineLevel="1" hidden="1"><c r="B9" t="s" s="3"><v>18</v></c><c r="C9" t="s" s="3"><v>19</v></c><c r="D9" t="s" s="3"><v>20</v></c><c r="E9" t="s" s="3"><v>21</v></c></row><row r="10" outlineLevel="1" hidden="1"><c r="B10" t="s"><v>22</v></c><c r="C10" t="s"><v>23</v></c><c r="D10" t="s"><v>24</v></c><c r="E10" t="s"><v>25</v></c></row><row r="11" outlineLevel="2" hidden="1"><c r="C11" t="s" s="3"><v>26</v></c><c r="D11" t="s" s="3"><v>27</v></c><c r="E11" t="s" s="3"><v>28</v></c></row><row r="12" outlineLevel="2" hidden="1"><c r="C12" t="s"><v>29</v></c><c r="D12" s="1"><v>25000</v></c><c r="E12" s="1"><v>19822</v></c></row><row r="13" outlineLevel="2" hidden="1"><c r="C13" t="s"><v>30</v></c><c r="D13" s="1"><v>65021</v></c><c r="E13" s="1"><v>63320</v></c></row></sheetData>`;

        return this.createData();
    }

    public get exportHierarchicalDataWithMultiColumnHeaders() {
        this._sharedStringsData =
            `count="168" uniqueCount="115"><si><t>CustomerID</t></si><si><t>General Information</t></si><si><t>Address Information</t></si><si><t>CompanyName</t></si><si><t>Personal Details</t></si><si><t>Location</t></si><si><t>Contact Information</t></si><si><t>ContactName</t></si><si><t>ContactTitle</t></si><si><t>Address</t></si><si><t>City</t></si><si><t>PostalCode</t></si><si><t>Country</t></si><si><t>Phone</t></si><si><t>Fax</t></si><si><t>Alfreds Futterkiste</t></si><si><t>Maria Anders</t></si><si><t>Sales Representative</t></si><si><t>Obere Str. 57</t></si><si><t>Berlin</t></si><si><t>12209</t></si><si><t>Germany</t></si><si><t>030-0074321</t></si><si><t>030-0076545</t></si><si><t>Ana Trujillo Emparedados y helados</t></si><si><t>Ana Trujillo</t></si><si><t>Owner</t></si><si><t>Avda. de la Constitución 2222</t></si><si><t>México D.F.</t></si><si><t>05021</t></si><si><t>Mexico</t></si><si><t>(5) 555-4729</t></si><si><t>(5) 555-3745</t></si><si><t>Antonio Moreno Taquería</t></si><si><t>Antonio Moreno</t></si><si><t>Mataderos 2312</t></si><si><t>05023</t></si><si><t>(5) 555-3932</t></si><si><t>Comércio Mineiro</t></si><si><t>Pedro Afonso</t></si><si><t>Sales Associate</t></si><si><t>Av. dos Lusíadas, 23</t></si><si><t>Sao Paulo</t></si><si><t>05432-043</t></si><si><t>Brazil</t></si><si><t>(11) 555-7647</t></si><si><t>Consolidated Holdings</t></si><si><t>Elizabeth Brown</t></si><si><t>Berkeley Gardens 12 Brewery</t></si><si><t>London</t></si><si><t>WX1 6LT</t></si><si><t>UK</t></si><si><t>(171) 555-2282</t></si><si><t>(171) 555-9199</t></si><si><t>Drachenblut Delikatessen</t></si><si><t>Sven Ottlieb</t></si><si><t>Order Administrator</t></si><si><t>Walserweg 21</t></si><si><t>Aachen</t></si><si><t>52066</t></si><si><t>0241-039123</t></si><si><t>0241-059428</t></si><si><t>Du monde entier</t></si><si><t>Janine Labrune</t></si><si><t>67, rue des Cinquante Otages</t></si><si><t>Nantes</t></si><si><t>44000</t></si><si><t>France</t></si><si><t>40.67.88.88</t></si><si><t>40.67.89.89</t></si><si><t>FISSA Fabrica Inter. Salchichas S.A.</t></si><si><t>Diego Roel</t></si><si><t>Accounting Manager</t></si><si><t>C/ Moralzarzal, 86</t></si><si><t>Madrid</t></si><si><t>28034</t></si><si><t>Spain</t></si><si><t>(91) 555 94 44</t></si><si><t>(91) 555 55 93</t></si><si><t>Folies gourmandes</t></si><si><t>Martine Rancé</t></si><si><t>Assistant Sales Agent</t></si><si><t>184, chaussée de Tournai</t></si><si><t>Lille</t></si><si><t>59000</t></si><si><t>20.16.10.16</t></si><si><t>20.16.10.17</t></si><si><t>Folk och fä HB</t></si><si><t>Maria Larsson</t></si><si><t>Åkergatan 24</t></si><si><t>Bräcke</t></si><si><t>S-844 67</t></si><si><t>Sweden</t></si><si><t>0695-34 67 21</t></si><si><t>Frankenversand</t></si><si><t>Peter Franken</t></si><si><t>Marketing Manager</t></si><si><t>Berliner Platz 43</t></si><si><t>München</t></si><si><t>80805</t></si><si><t>089-0877310</t></si><si><t>089-0877451</t></si><si><t>France restauration</t></si><si><t>Carine Schmitt</t></si><si><t>54, rue Royale</t></si><si><t>40.32.21.21</t></si><si><t>40.32.21.20</t></si><si><t>Franchi S.p.A.</t></si><si><t>Paolo Accorti</t></si><si><t>Via Monte Bianco 34</t></si><si><t>Torino</t></si><si><t>10100</t></si><si><t>Italy</t></si><si><t>011-4988260</t></si><si><t>011-4988261</t></si>`;

        this._worksheetData =
            `<sheetPr><outlinePr summaryBelow="0"/></sheetPr>
            <sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>
            <sheetFormatPr defaultRowHeight="15" outlineLevelRow="1" x14ac:dyDescent="0.25"/>
            <cols><col min="1" max="15" width="20" customWidth="1"/></cols>
            <sheetData><row r="1"><c r="A1" s="3" t="s"><v>0</v></c><c r="B1" s="3" t="s"><v>1</v></c><c r="C1" s="3" /><c r="D1" s="3" /><c r="E1" s="3" t="s"><v>2</v></c><c r="F1" s="3" /><c r="G1" s="3" /><c r="H1" s="3" /><c r="I1" s="3" /><c r="J1" s="3" /></row><row r="2"><c r="B2" s="3" t="s"><v>3</v></c><c r="C2" s="3" t="s"><v>4</v></c><c r="D2" s="3" /><c r="E2" s="3" t="s"><v>5</v></c><c r="F2" s="3" /><c r="G2" s="3" /><c r="H2" s="3" /><c r="I2" s="3" t="s"><v>6</v></c><c r="J2" s="3" /></row><row r="3"><c r="C3" s="3" t="s"><v>7</v></c><c r="D3" s="3" t="s"><v>8</v></c><c r="E3" s="3" t="s"><v>9</v></c><c r="F3" s="3" t="s"><v>10</v></c><c r="G3" s="3" t="s"><v>11</v></c><c r="H3" s="3" t="s"><v>12</v></c><c r="I3" s="3" t="s"><v>13</v></c><c r="J3" s="3" t="s"><v>14</v></c></row><row r="4"><c r="A4" s="1"/><c r="B4" t="s"><v>15</v></c><c r="C4" t="s"><v>16</v></c><c r="D4" t="s"><v>17</v></c><c r="E4" t="s"><v>18</v></c><c r="F4" t="s"><v>19</v></c><c r="G4" t="s"><v>20</v></c><c r="H4" t="s"><v>21</v></c><c r="I4" t="s"><v>22</v></c><c r="J4" t="s"><v>23</v></c></row><row r="5" outlineLevel="1" hidden="1"><c r="B5" s="3" t="s"><v>3</v></c><c r="C5" s="3" t="s"><v>4</v></c><c r="D5" s="3" /><c r="E5" s="3" t="s"><v>5</v></c><c r="F5" s="3" /><c r="G5" s="3" /><c r="H5" s="3" /><c r="I5" s="3" t="s"><v>6</v></c><c r="J5" s="3" /></row><row r="6" outlineLevel="1" hidden="1"><c r="B6" t="s" s="3"><v>3</v></c><c r="C6" t="s" s="3"><v>7</v></c><c r="D6" t="s" s="3"><v>8</v></c><c r="E6" t="s" s="3"><v>9</v></c><c r="F6" t="s" s="3"><v>10</v></c><c r="G6" t="s" s="3"><v>11</v></c><c r="H6" t="s" s="3"><v>12</v></c><c r="I6" t="s" s="3"><v>13</v></c><c r="J6" t="s" s="3"><v>14</v></c></row><row r="7" outlineLevel="1" hidden="1"><c r="B7" t="s"><v>24</v></c><c r="C7" t="s"><v>25</v></c><c r="D7" t="s"><v>26</v></c><c r="E7" t="s"><v>27</v></c><c r="F7" t="s"><v>28</v></c><c r="G7" t="s"><v>29</v></c><c r="H7" t="s"><v>30</v></c><c r="I7" t="s"><v>31</v></c><c r="J7" t="s"><v>32</v></c></row><row r="8" outlineLevel="1" hidden="1"><c r="B8" t="s"><v>33</v></c><c r="C8" t="s"><v>34</v></c><c r="D8" t="s"><v>26</v></c><c r="E8" t="s"><v>35</v></c><c r="F8" t="s"><v>28</v></c><c r="G8" t="s"><v>36</v></c><c r="H8" t="s"><v>30</v></c><c r="I8" t="s"><v>37</v></c><c r="J8" s="1"/></row><row r="9"><c r="A9" s="1"/><c r="B9" t="s"><v>38</v></c><c r="C9" t="s"><v>39</v></c><c r="D9" t="s"><v>40</v></c><c r="E9" t="s"><v>41</v></c><c r="F9" t="s"><v>42</v></c><c r="G9" t="s"><v>43</v></c><c r="H9" t="s"><v>44</v></c><c r="I9" t="s"><v>45</v></c><c r="J9" s="1"/></row><row r="10" outlineLevel="1" hidden="1"><c r="B10" s="3" t="s"><v>3</v></c><c r="C10" s="3" t="s"><v>4</v></c><c r="D10" s="3" /><c r="E10" s="3" t="s"><v>5</v></c><c r="F10" s="3" /><c r="G10" s="3" /><c r="H10" s="3" /><c r="I10" s="3" t="s"><v>6</v></c><c r="J10" s="3" /></row><row r="11" outlineLevel="1" hidden="1"><c r="B11" t="s" s="3"><v>3</v></c><c r="C11" t="s" s="3"><v>7</v></c><c r="D11" t="s" s="3"><v>8</v></c><c r="E11" t="s" s="3"><v>9</v></c><c r="F11" t="s" s="3"><v>10</v></c><c r="G11" t="s" s="3"><v>11</v></c><c r="H11" t="s" s="3"><v>12</v></c><c r="I11" t="s" s="3"><v>13</v></c><c r="J11" t="s" s="3"><v>14</v></c></row><row r="12" outlineLevel="1" hidden="1"><c r="B12" t="s"><v>46</v></c><c r="C12" t="s"><v>47</v></c><c r="D12" t="s"><v>17</v></c><c r="E12" t="s"><v>48</v></c><c r="F12" t="s"><v>49</v></c><c r="G12" t="s"><v>50</v></c><c r="H12" t="s"><v>51</v></c><c r="I12" t="s"><v>52</v></c><c r="J12" t="s"><v>53</v></c></row><row r="13" outlineLevel="1" hidden="1"><c r="B13" t="s"><v>54</v></c><c r="C13" t="s"><v>55</v></c><c r="D13" t="s"><v>56</v></c><c r="E13" t="s"><v>57</v></c><c r="F13" t="s"><v>58</v></c><c r="G13" t="s"><v>59</v></c><c r="H13" t="s"><v>21</v></c><c r="I13" t="s"><v>60</v></c><c r="J13" t="s"><v>61</v></c></row><row r="14" outlineLevel="1" hidden="1"><c r="B14" t="s"><v>62</v></c><c r="C14" t="s"><v>63</v></c><c r="D14" t="s"><v>26</v></c><c r="E14" t="s"><v>64</v></c><c r="F14" t="s"><v>65</v></c><c r="G14" t="s"><v>66</v></c><c r="H14" t="s"><v>67</v></c><c r="I14" t="s"><v>68</v></c><c r="J14" t="s"><v>69</v></c></row><row r="15"><c r="A15" s="1"/><c r="B15" t="s"><v>70</v></c><c r="C15" t="s"><v>71</v></c><c r="D15" t="s"><v>72</v></c><c r="E15" t="s"><v>73</v></c><c r="F15" t="s"><v>74</v></c><c r="G15" t="s"><v>75</v></c><c r="H15" t="s"><v>76</v></c><c r="I15" t="s"><v>77</v></c><c r="J15" t="s"><v>78</v></c></row><row r="16" outlineLevel="1" hidden="1"><c r="B16" s="3" t="s"><v>3</v></c><c r="C16" s="3" t="s"><v>4</v></c><c r="D16" s="3" /><c r="E16" s="3" t="s"><v>5</v></c><c r="F16" s="3" /><c r="G16" s="3" /><c r="H16" s="3" /><c r="I16" s="3" t="s"><v>6</v></c><c r="J16" s="3" /></row><row r="17" outlineLevel="1" hidden="1"><c r="B17" t="s" s="3"><v>3</v></c><c r="C17" t="s" s="3"><v>7</v></c><c r="D17" t="s" s="3"><v>8</v></c><c r="E17" t="s" s="3"><v>9</v></c><c r="F17" t="s" s="3"><v>10</v></c><c r="G17" t="s" s="3"><v>11</v></c><c r="H17" t="s" s="3"><v>12</v></c><c r="I17" t="s" s="3"><v>13</v></c><c r="J17" t="s" s="3"><v>14</v></c></row><row r="18" outlineLevel="1" hidden="1"><c r="B18" t="s"><v>79</v></c><c r="C18" t="s"><v>80</v></c><c r="D18" t="s"><v>81</v></c><c r="E18" t="s"><v>82</v></c><c r="F18" t="s"><v>83</v></c><c r="G18" t="s"><v>84</v></c><c r="H18" t="s"><v>67</v></c><c r="I18" t="s"><v>85</v></c><c r="J18" t="s"><v>86</v></c></row><row r="19" outlineLevel="1" hidden="1"><c r="B19" t="s"><v>87</v></c><c r="C19" t="s"><v>88</v></c><c r="D19" t="s"><v>26</v></c><c r="E19" t="s"><v>89</v></c><c r="F19" t="s"><v>90</v></c><c r="G19" t="s"><v>91</v></c><c r="H19" t="s"><v>92</v></c><c r="I19" t="s"><v>93</v></c><c r="J19" s="1"/></row><row r="20" outlineLevel="1" hidden="1"><c r="B20" t="s"><v>94</v></c><c r="C20" t="s"><v>95</v></c><c r="D20" t="s"><v>96</v></c><c r="E20" t="s"><v>97</v></c><c r="F20" t="s"><v>98</v></c><c r="G20" t="s"><v>99</v></c><c r="H20" t="s"><v>21</v></c><c r="I20" t="s"><v>100</v></c><c r="J20" t="s"><v>101</v></c></row><row r="21" outlineLevel="1" hidden="1"><c r="B21" t="s"><v>102</v></c><c r="C21" t="s"><v>103</v></c><c r="D21" t="s"><v>96</v></c><c r="E21" t="s"><v>104</v></c><c r="F21" t="s"><v>65</v></c><c r="G21" t="s"><v>66</v></c><c r="H21" t="s"><v>67</v></c><c r="I21" t="s"><v>105</v></c><c r="J21" t="s"><v>106</v></c></row><row r="22"><c r="A22" s="1"/><c r="B22" t="s"><v>107</v></c><c r="C22" t="s"><v>108</v></c><c r="D22" t="s"><v>17</v></c><c r="E22" t="s"><v>109</v></c><c r="F22" t="s"><v>110</v></c><c r="G22" t="s"><v>111</v></c><c r="H22" t="s"><v>112</v></c><c r="I22" t="s"><v>113</v></c><c r="J22" t="s"><v>114</v></c></row></sheetData><mergeCells count="19"> <mergeCell ref="A1:A3" /> <mergeCell ref="B1:D1" /> <mergeCell ref="E1:J1" /> <mergeCell ref="B2:B3" /> <mergeCell ref="C2:D2" /> <mergeCell ref="E2:H2" /> <mergeCell ref="I2:J2" /> <mergeCell ref="B5:B6" /> <mergeCell ref="C5:D5" /> <mergeCell ref="E5:H5" /> <mergeCell ref="I5:J5" /> <mergeCell ref="B10:B11" /> <mergeCell ref="C10:D10" /> <mergeCell ref="E10:H10" /> <mergeCell ref="I10:J10" /> <mergeCell ref="B16:B17" /> <mergeCell ref="C16:D16" /> <mergeCell ref="E16:H16" /> <mergeCell ref="I16:J16" /></mergeCells>`;

        return this.createData();
    }

    public get exportMultiColumnHeadersData() {
        this._sharedStringsData =
            `count="195" uniqueCount="162"><si><t>ID</t></si><si><t>General Information</t></si><si><t>Address Information</t></si><si><t>Personal Details</t></si><si><t>Location</t></si><si><t>Contact Information</t></si><si><t>ContactName</t></si><si><t>ContactTitle</t></si><si><t>Country</t></si><si><t>Phone</t></si><si><t>Fax</t></si><si><t>PostalCode</t></si><si><t>ALFKI</t></si><si><t>Maria Anders</t></si><si><t>Sales Representative</t></si><si><t>Germany</t></si><si><t>030-0074321</t></si><si><t>030-0076545</t></si><si><t>12209</t></si><si><t>ANATR</t></si><si><t>Ana Trujillo</t></si><si><t>Owner</t></si><si><t>Mexico</t></si><si><t>(5) 555-4729</t></si><si><t>(5) 555-3745</t></si><si><t>05021</t></si><si><t>ANTON</t></si><si><t>Antonio Moreno</t></si><si><t>(5) 555-3932</t></si><si><t>05023</t></si><si><t>AROUT</t></si><si><t>Thomas Hardy</t></si><si><t>UK</t></si><si><t>(171) 555-7788</t></si><si><t>(171) 555-6750</t></si><si><t>WA1 1DP</t></si><si><t>BERGS</t></si><si><t>Christina Berglund</t></si><si><t>Order Administrator</t></si><si><t>Sweden</t></si><si><t>0921-12 34 65</t></si><si><t>0921-12 34 67</t></si><si><t>S-958 22</t></si><si><t>BLAUS</t></si><si><t>Hanna Moos</t></si><si><t>0621-08460</t></si><si><t>0621-08924</t></si><si><t>68306</t></si><si><t>BLONP</t></si><si><t>Frédérique Citeaux</t></si><si><t>Marketing Manager</t></si><si><t>France</t></si><si><t>88.60.15.31</t></si><si><t>88.60.15.32</t></si><si><t>67000</t></si><si><t>BOLID</t></si><si><t>Martín Sommer</t></si><si><t>Spain</t></si><si><t>(91) 555 22 82</t></si><si><t>(91) 555 91 99</t></si><si><t>28023</t></si><si><t>BONAP</t></si><si><t>Laurence Lebihan</t></si><si><t>91.24.45.40</t></si><si><t>91.24.45.41</t></si><si><t>13008</t></si><si><t>BOTTM</t></si><si><t>Elizabeth Lincoln</t></si><si><t>Accounting Manager</t></si><si><t>Canada</t></si><si><t>(604) 555-4729</t></si><si><t>(604) 555-3745</t></si><si><t>T2F 8M4</t></si><si><t>BSBEV</t></si><si><t>Victoria Ashworth</t></si><si><t>(171) 555-1212</t></si><si><t>EC2 5NT</t></si><si><t>CACTU</t></si><si><t>Patricio Simpson</t></si><si><t>Sales Agent</t></si><si><t>Argentina</t></si><si><t>(1) 135-5555</t></si><si><t>(1) 135-4892</t></si><si><t>1010</t></si><si><t>CENTC</t></si><si><t>Francisco Chang</t></si><si><t>(5) 555-3392</t></si><si><t>(5) 555-7293</t></si><si><t>05022</t></si><si><t>CHOPS</t></si><si><t>Yang Wang</t></si><si><t>Switzerland</t></si><si><t>0452-076545</t></si><si><t>3012</t></si><si><t>COMMI</t></si><si><t>Pedro Afonso</t></si><si><t>Sales Associate</t></si><si><t>Brazil</t></si><si><t>(11) 555-7647</t></si><si><t>05432-043</t></si><si><t>CONSH</t></si><si><t>Elizabeth Brown</t></si><si><t>(171) 555-2282</t></si><si><t>(171) 555-9199</t></si><si><t>WX1 6LT</t></si><si><t>DRACD</t></si><si><t>Sven Ottlieb</t></si><si><t>0241-039123</t></si><si><t>0241-059428</t></si><si><t>52066</t></si><si><t>DUMON</t></si><si><t>Janine Labrune</t></si><si><t>40.67.88.88</t></si><si><t>40.67.89.89</t></si><si><t>44000</t></si><si><t>EASTC</t></si><si><t>Ann Devon</t></si><si><t>(171) 555-0297</t></si><si><t>(171) 555-3373</t></si><si><t>WX3 6FW</t></si><si><t>ERNSH</t></si><si><t>Roland Mendel</t></si><si><t>Sales Manager</t></si><si><t>Austria</t></si><si><t>7675-3425</t></si><si><t>7675-3426</t></si><si><t>8010</t></si><si><t>FAMIA</t></si><si><t>Aria Cruz</t></si><si><t>Marketing Assistant</t></si><si><t>(11) 555-9857</t></si><si><t>05442-030</t></si><si><t>FISSA</t></si><si><t>Diego Roel</t></si><si><t>(91) 555 94 44</t></si><si><t>(91) 555 55 93</t></si><si><t>28034</t></si><si><t>FOLIG</t></si><si><t>Martine Rancé</t></si><si><t>Assistant Sales Agent</t></si><si><t>20.16.10.16</t></si><si><t>20.16.10.17</t></si><si><t>59000</t></si><si><t>FOLKO</t></si><si><t>Maria Larsson</t></si><si><t>0695-34 67 21</t></si><si><t>S-844 67</t></si><si><t>FRANK</t></si><si><t>Peter Franken</t></si><si><t>089-0877310</t></si><si><t>089-0877451</t></si><si><t>80805</t></si><si><t>FRANR</t></si><si><t>Carine Schmitt</t></si><si><t>40.32.21.21</t></si><si><t>40.32.21.20</t></si><si><t>FRANS</t></si><si><t>Paolo Accorti</t></si><si><t>Italy</t></si><si><t>011-4988260</t></si><si><t>011-4988261</t></si><si><t>10100</t></si>`;

        this._worksheetData =
            `<dimension ref="A1:G30"/>
            <sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>
            <sheetFormatPr defaultRowHeight="15"  x14ac:dyDescent="0.25"/>
            <cols><col min="1" max="7" width="15" customWidth="1"/></cols>
            <sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" /><c r="D1" t="s"><v>2</v></c><c r="E1" /><c r="F1" /><c r="G1" /></row><row r="2"><c r="B2" t="s"><v>3</v></c><c r="C2" /><c r="D2" t="s"><v>4</v></c><c r="E2" t="s"><v>5</v></c><c r="F2" /><c r="G2" /></row><row r="3"><c r="B3" t="s"><v>6</v></c><c r="C3" t="s"><v>7</v></c><c r="D3" t="s"><v>8</v></c><c r="E3" t="s"><v>9</v></c><c r="F3" t="s"><v>10</v></c><c r="G3" t="s"><v>11</v></c></row><row r="4"><c r="A4" t="s"><v>12</v></c><c r="B4" t="s"><v>13</v></c><c r="C4" t="s"><v>14</v></c><c r="D4" t="s"><v>15</v></c><c r="E4" t="s"><v>16</v></c><c r="F4" t="s"><v>17</v></c><c r="G4" t="s"><v>18</v></c></row><row r="5"><c r="A5" t="s"><v>19</v></c><c r="B5" t="s"><v>20</v></c><c r="C5" t="s"><v>21</v></c><c r="D5" t="s"><v>22</v></c><c r="E5" t="s"><v>23</v></c><c r="F5" t="s"><v>24</v></c><c r="G5" t="s"><v>25</v></c></row><row r="6"><c r="A6" t="s"><v>26</v></c><c r="B6" t="s"><v>27</v></c><c r="C6" t="s"><v>21</v></c><c r="D6" t="s"><v>22</v></c><c r="E6" t="s"><v>28</v></c><c r="F6" s="1"/><c r="G6" t="s"><v>29</v></c></row><row r="7"><c r="A7" t="s"><v>30</v></c><c r="B7" t="s"><v>31</v></c><c r="C7" t="s"><v>14</v></c><c r="D7" t="s"><v>32</v></c><c r="E7" t="s"><v>33</v></c><c r="F7" t="s"><v>34</v></c><c r="G7" t="s"><v>35</v></c></row><row r="8"><c r="A8" t="s"><v>36</v></c><c r="B8" t="s"><v>37</v></c><c r="C8" t="s"><v>38</v></c><c r="D8" t="s"><v>39</v></c><c r="E8" t="s"><v>40</v></c><c r="F8" t="s"><v>41</v></c><c r="G8" t="s"><v>42</v></c></row><row r="9"><c r="A9" t="s"><v>43</v></c><c r="B9" t="s"><v>44</v></c><c r="C9" t="s"><v>14</v></c><c r="D9" t="s"><v>15</v></c><c r="E9" t="s"><v>45</v></c><c r="F9" t="s"><v>46</v></c><c r="G9" t="s"><v>47</v></c></row><row r="10"><c r="A10" t="s"><v>48</v></c><c r="B10" t="s"><v>49</v></c><c r="C10" t="s"><v>50</v></c><c r="D10" t="s"><v>51</v></c><c r="E10" t="s"><v>52</v></c><c r="F10" t="s"><v>53</v></c><c r="G10" t="s"><v>54</v></c></row><row r="11"><c r="A11" t="s"><v>55</v></c><c r="B11" t="s"><v>56</v></c><c r="C11" t="s"><v>21</v></c><c r="D11" t="s"><v>57</v></c><c r="E11" t="s"><v>58</v></c><c r="F11" t="s"><v>59</v></c><c r="G11" t="s"><v>60</v></c></row><row r="12"><c r="A12" t="s"><v>61</v></c><c r="B12" t="s"><v>62</v></c><c r="C12" t="s"><v>21</v></c><c r="D12" t="s"><v>51</v></c><c r="E12" t="s"><v>63</v></c><c r="F12" t="s"><v>64</v></c><c r="G12" t="s"><v>65</v></c></row><row r="13"><c r="A13" t="s"><v>66</v></c><c r="B13" t="s"><v>67</v></c><c r="C13" t="s"><v>68</v></c><c r="D13" t="s"><v>69</v></c><c r="E13" t="s"><v>70</v></c><c r="F13" t="s"><v>71</v></c><c r="G13" t="s"><v>72</v></c></row><row r="14"><c r="A14" t="s"><v>73</v></c><c r="B14" t="s"><v>74</v></c><c r="C14" t="s"><v>14</v></c><c r="D14" t="s"><v>32</v></c><c r="E14" t="s"><v>75</v></c><c r="F14" s="1"/><c r="G14" t="s"><v>76</v></c></row><row r="15"><c r="A15" t="s"><v>77</v></c><c r="B15" t="s"><v>78</v></c><c r="C15" t="s"><v>79</v></c><c r="D15" t="s"><v>80</v></c><c r="E15" t="s"><v>81</v></c><c r="F15" t="s"><v>82</v></c><c r="G15" t="s"><v>83</v></c></row><row r="16"><c r="A16" t="s"><v>84</v></c><c r="B16" t="s"><v>85</v></c><c r="C16" t="s"><v>50</v></c><c r="D16" t="s"><v>22</v></c><c r="E16" t="s"><v>86</v></c><c r="F16" t="s"><v>87</v></c><c r="G16" t="s"><v>88</v></c></row><row r="17"><c r="A17" t="s"><v>89</v></c><c r="B17" t="s"><v>90</v></c><c r="C17" t="s"><v>21</v></c><c r="D17" t="s"><v>91</v></c><c r="E17" t="s"><v>92</v></c><c r="F17" s="1"/><c r="G17" t="s"><v>93</v></c></row><row r="18"><c r="A18" t="s"><v>94</v></c><c r="B18" t="s"><v>95</v></c><c r="C18" t="s"><v>96</v></c><c r="D18" t="s"><v>97</v></c><c r="E18" t="s"><v>98</v></c><c r="F18" s="1"/><c r="G18" t="s"><v>99</v></c></row><row r="19"><c r="A19" t="s"><v>100</v></c><c r="B19" t="s"><v>101</v></c><c r="C19" t="s"><v>14</v></c><c r="D19" t="s"><v>32</v></c><c r="E19" t="s"><v>102</v></c><c r="F19" t="s"><v>103</v></c><c r="G19" t="s"><v>104</v></c></row><row r="20"><c r="A20" t="s"><v>105</v></c><c r="B20" t="s"><v>106</v></c><c r="C20" t="s"><v>38</v></c><c r="D20" t="s"><v>15</v></c><c r="E20" t="s"><v>107</v></c><c r="F20" t="s"><v>108</v></c><c r="G20" t="s"><v>109</v></c></row><row r="21"><c r="A21" t="s"><v>110</v></c><c r="B21" t="s"><v>111</v></c><c r="C21" t="s"><v>21</v></c><c r="D21" t="s"><v>51</v></c><c r="E21" t="s"><v>112</v></c><c r="F21" t="s"><v>113</v></c><c r="G21" t="s"><v>114</v></c></row><row r="22"><c r="A22" t="s"><v>115</v></c><c r="B22" t="s"><v>116</v></c><c r="C22" t="s"><v>79</v></c><c r="D22" t="s"><v>32</v></c><c r="E22" t="s"><v>117</v></c><c r="F22" t="s"><v>118</v></c><c r="G22" t="s"><v>119</v></c></row><row r="23"><c r="A23" t="s"><v>120</v></c><c r="B23" t="s"><v>121</v></c><c r="C23" t="s"><v>122</v></c><c r="D23" t="s"><v>123</v></c><c r="E23" t="s"><v>124</v></c><c r="F23" t="s"><v>125</v></c><c r="G23" t="s"><v>126</v></c></row><row r="24"><c r="A24" t="s"><v>127</v></c><c r="B24" t="s"><v>128</v></c><c r="C24" t="s"><v>129</v></c><c r="D24" t="s"><v>97</v></c><c r="E24" t="s"><v>130</v></c><c r="F24" s="1"/><c r="G24" t="s"><v>131</v></c></row><row r="25"><c r="A25" t="s"><v>132</v></c><c r="B25" t="s"><v>133</v></c><c r="C25" t="s"><v>68</v></c><c r="D25" t="s"><v>57</v></c><c r="E25" t="s"><v>134</v></c><c r="F25" t="s"><v>135</v></c><c r="G25" t="s"><v>136</v></c></row><row r="26"><c r="A26" t="s"><v>137</v></c><c r="B26" t="s"><v>138</v></c><c r="C26" t="s"><v>139</v></c><c r="D26" t="s"><v>51</v></c><c r="E26" t="s"><v>140</v></c><c r="F26" t="s"><v>141</v></c><c r="G26" t="s"><v>142</v></c></row><row r="27"><c r="A27" t="s"><v>143</v></c><c r="B27" t="s"><v>144</v></c><c r="C27" t="s"><v>21</v></c><c r="D27" t="s"><v>39</v></c><c r="E27" t="s"><v>145</v></c><c r="F27" s="1"/><c r="G27" t="s"><v>146</v></c></row><row r="28"><c r="A28" t="s"><v>147</v></c><c r="B28" t="s"><v>148</v></c><c r="C28" t="s"><v>50</v></c><c r="D28" t="s"><v>15</v></c><c r="E28" t="s"><v>149</v></c><c r="F28" t="s"><v>150</v></c><c r="G28" t="s"><v>151</v></c></row><row r="29"><c r="A29" t="s"><v>152</v></c><c r="B29" t="s"><v>153</v></c><c r="C29" t="s"><v>50</v></c><c r="D29" t="s"><v>51</v></c><c r="E29" t="s"><v>154</v></c><c r="F29" t="s"><v>155</v></c><c r="G29" t="s"><v>114</v></c></row><row r="30"><c r="A30" t="s"><v>156</v></c><c r="B30" t="s"><v>157</v></c><c r="C30" t="s"><v>14</v></c><c r="D30" t="s"><v>158</v></c><c r="E30" t="s"><v>159</v></c><c r="F30" t="s"><v>160</v></c><c r="G30" t="s"><v>161</v></c></row></sheetData>
            <mergeCells count="6"> <mergeCell ref="A1:A3" /> <mergeCell ref="B1:C1" /> <mergeCell ref="D1:G1" /> <mergeCell ref="B2:C2" /> <mergeCell ref="D2:D2" /> <mergeCell ref="E2:G2" /></mergeCells>`;

        return this.createData();
    }

    public get exportMultiColumnHeadersDataWithMovedColumn() {
        this._sharedStringsData =
            `count="195" uniqueCount="162"><si><t>General Information</t></si><si><t>ID</t></si><si><t>Address Information</t></si><si><t>Personal Details</t></si><si><t>Location</t></si><si><t>Contact Information</t></si><si><t>ContactName</t></si><si><t>ContactTitle</t></si><si><t>Country</t></si><si><t>Phone</t></si><si><t>Fax</t></si><si><t>PostalCode</t></si><si><t>Maria Anders</t></si><si><t>Sales Representative</t></si><si><t>ALFKI</t></si><si><t>Germany</t></si><si><t>030-0074321</t></si><si><t>030-0076545</t></si><si><t>12209</t></si><si><t>Ana Trujillo</t></si><si><t>Owner</t></si><si><t>ANATR</t></si><si><t>Mexico</t></si><si><t>(5) 555-4729</t></si><si><t>(5) 555-3745</t></si><si><t>05021</t></si><si><t>Antonio Moreno</t></si><si><t>ANTON</t></si><si><t>(5) 555-3932</t></si><si><t>05023</t></si><si><t>Thomas Hardy</t></si><si><t>AROUT</t></si><si><t>UK</t></si><si><t>(171) 555-7788</t></si><si><t>(171) 555-6750</t></si><si><t>WA1 1DP</t></si><si><t>Christina Berglund</t></si><si><t>Order Administrator</t></si><si><t>BERGS</t></si><si><t>Sweden</t></si><si><t>0921-12 34 65</t></si><si><t>0921-12 34 67</t></si><si><t>S-958 22</t></si><si><t>Hanna Moos</t></si><si><t>BLAUS</t></si><si><t>0621-08460</t></si><si><t>0621-08924</t></si><si><t>68306</t></si><si><t>Frédérique Citeaux</t></si><si><t>Marketing Manager</t></si><si><t>BLONP</t></si><si><t>France</t></si><si><t>88.60.15.31</t></si><si><t>88.60.15.32</t></si><si><t>67000</t></si><si><t>Martín Sommer</t></si><si><t>BOLID</t></si><si><t>Spain</t></si><si><t>(91) 555 22 82</t></si><si><t>(91) 555 91 99</t></si><si><t>28023</t></si><si><t>Laurence Lebihan</t></si><si><t>BONAP</t></si><si><t>91.24.45.40</t></si><si><t>91.24.45.41</t></si><si><t>13008</t></si><si><t>Elizabeth Lincoln</t></si><si><t>Accounting Manager</t></si><si><t>BOTTM</t></si><si><t>Canada</t></si><si><t>(604) 555-4729</t></si><si><t>(604) 555-3745</t></si><si><t>T2F 8M4</t></si><si><t>Victoria Ashworth</t></si><si><t>BSBEV</t></si><si><t>(171) 555-1212</t></si><si><t>EC2 5NT</t></si><si><t>Patricio Simpson</t></si><si><t>Sales Agent</t></si><si><t>CACTU</t></si><si><t>Argentina</t></si><si><t>(1) 135-5555</t></si><si><t>(1) 135-4892</t></si><si><t>1010</t></si><si><t>Francisco Chang</t></si><si><t>CENTC</t></si><si><t>(5) 555-3392</t></si><si><t>(5) 555-7293</t></si><si><t>05022</t></si><si><t>Yang Wang</t></si><si><t>CHOPS</t></si><si><t>Switzerland</t></si><si><t>0452-076545</t></si><si><t>3012</t></si><si><t>Pedro Afonso</t></si><si><t>Sales Associate</t></si><si><t>COMMI</t></si><si><t>Brazil</t></si><si><t>(11) 555-7647</t></si><si><t>05432-043</t></si><si><t>Elizabeth Brown</t></si><si><t>CONSH</t></si><si><t>(171) 555-2282</t></si><si><t>(171) 555-9199</t></si><si><t>WX1 6LT</t></si><si><t>Sven Ottlieb</t></si><si><t>DRACD</t></si><si><t>0241-039123</t></si><si><t>0241-059428</t></si><si><t>52066</t></si><si><t>Janine Labrune</t></si><si><t>DUMON</t></si><si><t>40.67.88.88</t></si><si><t>40.67.89.89</t></si><si><t>44000</t></si><si><t>Ann Devon</t></si><si><t>EASTC</t></si><si><t>(171) 555-0297</t></si><si><t>(171) 555-3373</t></si><si><t>WX3 6FW</t></si><si><t>Roland Mendel</t></si><si><t>Sales Manager</t></si><si><t>ERNSH</t></si><si><t>Austria</t></si><si><t>7675-3425</t></si><si><t>7675-3426</t></si><si><t>8010</t></si><si><t>Aria Cruz</t></si><si><t>Marketing Assistant</t></si><si><t>FAMIA</t></si><si><t>(11) 555-9857</t></si><si><t>05442-030</t></si><si><t>Diego Roel</t></si><si><t>FISSA</t></si><si><t>(91) 555 94 44</t></si><si><t>(91) 555 55 93</t></si><si><t>28034</t></si><si><t>Martine Rancé</t></si><si><t>Assistant Sales Agent</t></si><si><t>FOLIG</t></si><si><t>20.16.10.16</t></si><si><t>20.16.10.17</t></si><si><t>59000</t></si><si><t>Maria Larsson</t></si><si><t>FOLKO</t></si><si><t>0695-34 67 21</t></si><si><t>S-844 67</t></si><si><t>Peter Franken</t></si><si><t>FRANK</t></si><si><t>089-0877310</t></si><si><t>089-0877451</t></si><si><t>80805</t></si><si><t>Carine Schmitt</t></si><si><t>FRANR</t></si><si><t>40.32.21.21</t></si><si><t>40.32.21.20</t></si><si><t>Paolo Accorti</t></si><si><t>FRANS</t></si><si><t>Italy</t></si><si><t>011-4988260</t></si><si><t>011-4988261</t></si><si><t>10100</t></si>`;

        this._worksheetData =
            `<dimension ref="A1:G30"/>
            <sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>
            <sheetFormatPr defaultRowHeight="15"  x14ac:dyDescent="0.25"/>
            <cols><col min="1" max="7" width="15" customWidth="1"/></cols>
            <sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" /><c r="C1" t="s"><v>1</v></c><c r="D1" t="s"><v>2</v></c><c r="E1" /><c r="F1" /><c r="G1" /></row><row r="2"><c r="A2" t="s"><v>3</v></c><c r="B2" /><c r="D2" t="s"><v>4</v></c><c r="E2" t="s"><v>5</v></c><c r="F2" /><c r="G2" /></row><row r="3"><c r="A3" t="s"><v>6</v></c><c r="B3" t="s"><v>7</v></c><c r="D3" t="s"><v>8</v></c><c r="E3" t="s"><v>9</v></c><c r="F3" t="s"><v>10</v></c><c r="G3" t="s"><v>11</v></c></row><row r="4"><c r="A4" t="s"><v>12</v></c><c r="B4" t="s"><v>13</v></c><c r="C4" t="s"><v>14</v></c><c r="D4" t="s"><v>15</v></c><c r="E4" t="s"><v>16</v></c><c r="F4" t="s"><v>17</v></c><c r="G4" t="s"><v>18</v></c></row><row r="5"><c r="A5" t="s"><v>19</v></c><c r="B5" t="s"><v>20</v></c><c r="C5" t="s"><v>21</v></c><c r="D5" t="s"><v>22</v></c><c r="E5" t="s"><v>23</v></c><c r="F5" t="s"><v>24</v></c><c r="G5" t="s"><v>25</v></c></row><row r="6"><c r="A6" t="s"><v>26</v></c><c r="B6" t="s"><v>20</v></c><c r="C6" t="s"><v>27</v></c><c r="D6" t="s"><v>22</v></c><c r="E6" t="s"><v>28</v></c><c r="F6" s="1"/><c r="G6" t="s"><v>29</v></c></row><row r="7"><c r="A7" t="s"><v>30</v></c><c r="B7" t="s"><v>13</v></c><c r="C7" t="s"><v>31</v></c><c r="D7" t="s"><v>32</v></c><c r="E7" t="s"><v>33</v></c><c r="F7" t="s"><v>34</v></c><c r="G7" t="s"><v>35</v></c></row><row r="8"><c r="A8" t="s"><v>36</v></c><c r="B8" t="s"><v>37</v></c><c r="C8" t="s"><v>38</v></c><c r="D8" t="s"><v>39</v></c><c r="E8" t="s"><v>40</v></c><c r="F8" t="s"><v>41</v></c><c r="G8" t="s"><v>42</v></c></row><row r="9"><c r="A9" t="s"><v>43</v></c><c r="B9" t="s"><v>13</v></c><c r="C9" t="s"><v>44</v></c><c r="D9" t="s"><v>15</v></c><c r="E9" t="s"><v>45</v></c><c r="F9" t="s"><v>46</v></c><c r="G9" t="s"><v>47</v></c></row><row r="10"><c r="A10" t="s"><v>48</v></c><c r="B10" t="s"><v>49</v></c><c r="C10" t="s"><v>50</v></c><c r="D10" t="s"><v>51</v></c><c r="E10" t="s"><v>52</v></c><c r="F10" t="s"><v>53</v></c><c r="G10" t="s"><v>54</v></c></row><row r="11"><c r="A11" t="s"><v>55</v></c><c r="B11" t="s"><v>20</v></c><c r="C11" t="s"><v>56</v></c><c r="D11" t="s"><v>57</v></c><c r="E11" t="s"><v>58</v></c><c r="F11" t="s"><v>59</v></c><c r="G11" t="s"><v>60</v></c></row><row r="12"><c r="A12" t="s"><v>61</v></c><c r="B12" t="s"><v>20</v></c><c r="C12" t="s"><v>62</v></c><c r="D12" t="s"><v>51</v></c><c r="E12" t="s"><v>63</v></c><c r="F12" t="s"><v>64</v></c><c r="G12" t="s"><v>65</v></c></row><row r="13"><c r="A13" t="s"><v>66</v></c><c r="B13" t="s"><v>67</v></c><c r="C13" t="s"><v>68</v></c><c r="D13" t="s"><v>69</v></c><c r="E13" t="s"><v>70</v></c><c r="F13" t="s"><v>71</v></c><c r="G13" t="s"><v>72</v></c></row><row r="14"><c r="A14" t="s"><v>73</v></c><c r="B14" t="s"><v>13</v></c><c r="C14" t="s"><v>74</v></c><c r="D14" t="s"><v>32</v></c><c r="E14" t="s"><v>75</v></c><c r="F14" s="1"/><c r="G14" t="s"><v>76</v></c></row><row r="15"><c r="A15" t="s"><v>77</v></c><c r="B15" t="s"><v>78</v></c><c r="C15" t="s"><v>79</v></c><c r="D15" t="s"><v>80</v></c><c r="E15" t="s"><v>81</v></c><c r="F15" t="s"><v>82</v></c><c r="G15" t="s"><v>83</v></c></row><row r="16"><c r="A16" t="s"><v>84</v></c><c r="B16" t="s"><v>49</v></c><c r="C16" t="s"><v>85</v></c><c r="D16" t="s"><v>22</v></c><c r="E16" t="s"><v>86</v></c><c r="F16" t="s"><v>87</v></c><c r="G16" t="s"><v>88</v></c></row><row r="17"><c r="A17" t="s"><v>89</v></c><c r="B17" t="s"><v>20</v></c><c r="C17" t="s"><v>90</v></c><c r="D17" t="s"><v>91</v></c><c r="E17" t="s"><v>92</v></c><c r="F17" s="1"/><c r="G17" t="s"><v>93</v></c></row><row r="18"><c r="A18" t="s"><v>94</v></c><c r="B18" t="s"><v>95</v></c><c r="C18" t="s"><v>96</v></c><c r="D18" t="s"><v>97</v></c><c r="E18" t="s"><v>98</v></c><c r="F18" s="1"/><c r="G18" t="s"><v>99</v></c></row><row r="19"><c r="A19" t="s"><v>100</v></c><c r="B19" t="s"><v>13</v></c><c r="C19" t="s"><v>101</v></c><c r="D19" t="s"><v>32</v></c><c r="E19" t="s"><v>102</v></c><c r="F19" t="s"><v>103</v></c><c r="G19" t="s"><v>104</v></c></row><row r="20"><c r="A20" t="s"><v>105</v></c><c r="B20" t="s"><v>37</v></c><c r="C20" t="s"><v>106</v></c><c r="D20" t="s"><v>15</v></c><c r="E20" t="s"><v>107</v></c><c r="F20" t="s"><v>108</v></c><c r="G20" t="s"><v>109</v></c></row><row r="21"><c r="A21" t="s"><v>110</v></c><c r="B21" t="s"><v>20</v></c><c r="C21" t="s"><v>111</v></c><c r="D21" t="s"><v>51</v></c><c r="E21" t="s"><v>112</v></c><c r="F21" t="s"><v>113</v></c><c r="G21" t="s"><v>114</v></c></row><row r="22"><c r="A22" t="s"><v>115</v></c><c r="B22" t="s"><v>78</v></c><c r="C22" t="s"><v>116</v></c><c r="D22" t="s"><v>32</v></c><c r="E22" t="s"><v>117</v></c><c r="F22" t="s"><v>118</v></c><c r="G22" t="s"><v>119</v></c></row><row r="23"><c r="A23" t="s"><v>120</v></c><c r="B23" t="s"><v>121</v></c><c r="C23" t="s"><v>122</v></c><c r="D23" t="s"><v>123</v></c><c r="E23" t="s"><v>124</v></c><c r="F23" t="s"><v>125</v></c><c r="G23" t="s"><v>126</v></c></row><row r="24"><c r="A24" t="s"><v>127</v></c><c r="B24" t="s"><v>128</v></c><c r="C24" t="s"><v>129</v></c><c r="D24" t="s"><v>97</v></c><c r="E24" t="s"><v>130</v></c><c r="F24" s="1"/><c r="G24" t="s"><v>131</v></c></row><row r="25"><c r="A25" t="s"><v>132</v></c><c r="B25" t="s"><v>67</v></c><c r="C25" t="s"><v>133</v></c><c r="D25" t="s"><v>57</v></c><c r="E25" t="s"><v>134</v></c><c r="F25" t="s"><v>135</v></c><c r="G25" t="s"><v>136</v></c></row><row r="26"><c r="A26" t="s"><v>137</v></c><c r="B26" t="s"><v>138</v></c><c r="C26" t="s"><v>139</v></c><c r="D26" t="s"><v>51</v></c><c r="E26" t="s"><v>140</v></c><c r="F26" t="s"><v>141</v></c><c r="G26" t="s"><v>142</v></c></row><row r="27"><c r="A27" t="s"><v>143</v></c><c r="B27" t="s"><v>20</v></c><c r="C27" t="s"><v>144</v></c><c r="D27" t="s"><v>39</v></c><c r="E27" t="s"><v>145</v></c><c r="F27" s="1"/><c r="G27" t="s"><v>146</v></c></row><row r="28"><c r="A28" t="s"><v>147</v></c><c r="B28" t="s"><v>49</v></c><c r="C28" t="s"><v>148</v></c><c r="D28" t="s"><v>15</v></c><c r="E28" t="s"><v>149</v></c><c r="F28" t="s"><v>150</v></c><c r="G28" t="s"><v>151</v></c></row><row r="29"><c r="A29" t="s"><v>152</v></c><c r="B29" t="s"><v>49</v></c><c r="C29" t="s"><v>153</v></c><c r="D29" t="s"><v>51</v></c><c r="E29" t="s"><v>154</v></c><c r="F29" t="s"><v>155</v></c><c r="G29" t="s"><v>114</v></c></row><row r="30"><c r="A30" t="s"><v>156</v></c><c r="B30" t="s"><v>13</v></c><c r="C30" t="s"><v>157</v></c><c r="D30" t="s"><v>158</v></c><c r="E30" t="s"><v>159</v></c><c r="F30" t="s"><v>160</v></c><c r="G30" t="s"><v>161</v></c></row></sheetData>
            <mergeCells count="6"> <mergeCell ref="A1:B1" /> <mergeCell ref="C1:C3" /> <mergeCell ref="D1:G1" /> <mergeCell ref="A2:B2" /> <mergeCell ref="D2:D2" /> <mergeCell ref="E2:G2" /></mergeCells>`;

        return this.createData();
    }

    public get exportMultiColumnHeadersDataWithHiddenColumn() {
        this._sharedStringsData =
            `count="167" uniqueCount="134"><si><t>General Information</t></si><si><t>Address Information</t></si><si><t>Personal Details</t></si><si><t>Location</t></si><si><t>Contact Information</t></si><si><t>ContactName</t></si><si><t>ContactTitle</t></si><si><t>Country</t></si><si><t>Phone</t></si><si><t>Fax</t></si><si><t>PostalCode</t></si><si><t>Maria Anders</t></si><si><t>Sales Representative</t></si><si><t>Germany</t></si><si><t>030-0074321</t></si><si><t>030-0076545</t></si><si><t>12209</t></si><si><t>Ana Trujillo</t></si><si><t>Owner</t></si><si><t>Mexico</t></si><si><t>(5) 555-4729</t></si><si><t>(5) 555-3745</t></si><si><t>05021</t></si><si><t>Antonio Moreno</t></si><si><t>(5) 555-3932</t></si><si><t>05023</t></si><si><t>Thomas Hardy</t></si><si><t>UK</t></si><si><t>(171) 555-7788</t></si><si><t>(171) 555-6750</t></si><si><t>WA1 1DP</t></si><si><t>Christina Berglund</t></si><si><t>Order Administrator</t></si><si><t>Sweden</t></si><si><t>0921-12 34 65</t></si><si><t>0921-12 34 67</t></si><si><t>S-958 22</t></si><si><t>Hanna Moos</t></si><si><t>0621-08460</t></si><si><t>0621-08924</t></si><si><t>68306</t></si><si><t>Frédérique Citeaux</t></si><si><t>Marketing Manager</t></si><si><t>France</t></si><si><t>88.60.15.31</t></si><si><t>88.60.15.32</t></si><si><t>67000</t></si><si><t>Martín Sommer</t></si><si><t>Spain</t></si><si><t>(91) 555 22 82</t></si><si><t>(91) 555 91 99</t></si><si><t>28023</t></si><si><t>Laurence Lebihan</t></si><si><t>91.24.45.40</t></si><si><t>91.24.45.41</t></si><si><t>13008</t></si><si><t>Elizabeth Lincoln</t></si><si><t>Accounting Manager</t></si><si><t>Canada</t></si><si><t>(604) 555-4729</t></si><si><t>(604) 555-3745</t></si><si><t>T2F 8M4</t></si><si><t>Victoria Ashworth</t></si><si><t>(171) 555-1212</t></si><si><t>EC2 5NT</t></si><si><t>Patricio Simpson</t></si><si><t>Sales Agent</t></si><si><t>Argentina</t></si><si><t>(1) 135-5555</t></si><si><t>(1) 135-4892</t></si><si><t>1010</t></si><si><t>Francisco Chang</t></si><si><t>(5) 555-3392</t></si><si><t>(5) 555-7293</t></si><si><t>05022</t></si><si><t>Yang Wang</t></si><si><t>Switzerland</t></si><si><t>0452-076545</t></si><si><t>3012</t></si><si><t>Pedro Afonso</t></si><si><t>Sales Associate</t></si><si><t>Brazil</t></si><si><t>(11) 555-7647</t></si><si><t>05432-043</t></si><si><t>Elizabeth Brown</t></si><si><t>(171) 555-2282</t></si><si><t>(171) 555-9199</t></si><si><t>WX1 6LT</t></si><si><t>Sven Ottlieb</t></si><si><t>0241-039123</t></si><si><t>0241-059428</t></si><si><t>52066</t></si><si><t>Janine Labrune</t></si><si><t>40.67.88.88</t></si><si><t>40.67.89.89</t></si><si><t>44000</t></si><si><t>Ann Devon</t></si><si><t>(171) 555-0297</t></si><si><t>(171) 555-3373</t></si><si><t>WX3 6FW</t></si><si><t>Roland Mendel</t></si><si><t>Sales Manager</t></si><si><t>Austria</t></si><si><t>7675-3425</t></si><si><t>7675-3426</t></si><si><t>8010</t></si><si><t>Aria Cruz</t></si><si><t>Marketing Assistant</t></si><si><t>(11) 555-9857</t></si><si><t>05442-030</t></si><si><t>Diego Roel</t></si><si><t>(91) 555 94 44</t></si><si><t>(91) 555 55 93</t></si><si><t>28034</t></si><si><t>Martine Rancé</t></si><si><t>Assistant Sales Agent</t></si><si><t>20.16.10.16</t></si><si><t>20.16.10.17</t></si><si><t>59000</t></si><si><t>Maria Larsson</t></si><si><t>0695-34 67 21</t></si><si><t>S-844 67</t></si><si><t>Peter Franken</t></si><si><t>089-0877310</t></si><si><t>089-0877451</t></si><si><t>80805</t></si><si><t>Carine Schmitt</t></si><si><t>40.32.21.21</t></si><si><t>40.32.21.20</t></si><si><t>Paolo Accorti</t></si><si><t>Italy</t></si><si><t>011-4988260</t></si><si><t>011-4988261</t></si><si><t>10100</t></si>`;

        this._worksheetData =
            `<dimension ref="A1:F30"/>
            <sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>
            <sheetFormatPr defaultRowHeight="15"  x14ac:dyDescent="0.25"/>
            <cols><col min="1" max="6" width="15" customWidth="1"/></cols>
            <sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" /><c r="C1" t="s"><v>1</v></c><c r="D1" /><c r="E1" /><c r="F1" /></row><row r="2"><c r="A2" t="s"><v>2</v></c><c r="B2" /><c r="C2" t="s"><v>3</v></c><c r="D2" t="s"><v>4</v></c><c r="E2" /><c r="F2" /></row><row r="3"><c r="A3" t="s"><v>5</v></c><c r="B3" t="s"><v>6</v></c><c r="C3" t="s"><v>7</v></c><c r="D3" t="s"><v>8</v></c><c r="E3" t="s"><v>9</v></c><c r="F3" t="s"><v>10</v></c></row><row r="4"><c r="A4" t="s"><v>11</v></c><c r="B4" t="s"><v>12</v></c><c r="C4" t="s"><v>13</v></c><c r="D4" t="s"><v>14</v></c><c r="E4" t="s"><v>15</v></c><c r="F4" t="s"><v>16</v></c></row><row r="5"><c r="A5" t="s"><v>17</v></c><c r="B5" t="s"><v>18</v></c><c r="C5" t="s"><v>19</v></c><c r="D5" t="s"><v>20</v></c><c r="E5" t="s"><v>21</v></c><c r="F5" t="s"><v>22</v></c></row><row r="6"><c r="A6" t="s"><v>23</v></c><c r="B6" t="s"><v>18</v></c><c r="C6" t="s"><v>19</v></c><c r="D6" t="s"><v>24</v></c><c r="E6" s="1"/><c r="F6" t="s"><v>25</v></c></row><row r="7"><c r="A7" t="s"><v>26</v></c><c r="B7" t="s"><v>12</v></c><c r="C7" t="s"><v>27</v></c><c r="D7" t="s"><v>28</v></c><c r="E7" t="s"><v>29</v></c><c r="F7" t="s"><v>30</v></c></row><row r="8"><c r="A8" t="s"><v>31</v></c><c r="B8" t="s"><v>32</v></c><c r="C8" t="s"><v>33</v></c><c r="D8" t="s"><v>34</v></c><c r="E8" t="s"><v>35</v></c><c r="F8" t="s"><v>36</v></c></row><row r="9"><c r="A9" t="s"><v>37</v></c><c r="B9" t="s"><v>12</v></c><c r="C9" t="s"><v>13</v></c><c r="D9" t="s"><v>38</v></c><c r="E9" t="s"><v>39</v></c><c r="F9" t="s"><v>40</v></c></row><row r="10"><c r="A10" t="s"><v>41</v></c><c r="B10" t="s"><v>42</v></c><c r="C10" t="s"><v>43</v></c><c r="D10" t="s"><v>44</v></c><c r="E10" t="s"><v>45</v></c><c r="F10" t="s"><v>46</v></c></row><row r="11"><c r="A11" t="s"><v>47</v></c><c r="B11" t="s"><v>18</v></c><c r="C11" t="s"><v>48</v></c><c r="D11" t="s"><v>49</v></c><c r="E11" t="s"><v>50</v></c><c r="F11" t="s"><v>51</v></c></row><row r="12"><c r="A12" t="s"><v>52</v></c><c r="B12" t="s"><v>18</v></c><c r="C12" t="s"><v>43</v></c><c r="D12" t="s"><v>53</v></c><c r="E12" t="s"><v>54</v></c><c r="F12" t="s"><v>55</v></c></row><row r="13"><c r="A13" t="s"><v>56</v></c><c r="B13" t="s"><v>57</v></c><c r="C13" t="s"><v>58</v></c><c r="D13" t="s"><v>59</v></c><c r="E13" t="s"><v>60</v></c><c r="F13" t="s"><v>61</v></c></row><row r="14"><c r="A14" t="s"><v>62</v></c><c r="B14" t="s"><v>12</v></c><c r="C14" t="s"><v>27</v></c><c r="D14" t="s"><v>63</v></c><c r="E14" s="1"/><c r="F14" t="s"><v>64</v></c></row><row r="15"><c r="A15" t="s"><v>65</v></c><c r="B15" t="s"><v>66</v></c><c r="C15" t="s"><v>67</v></c><c r="D15" t="s"><v>68</v></c><c r="E15" t="s"><v>69</v></c><c r="F15" t="s"><v>70</v></c></row><row r="16"><c r="A16" t="s"><v>71</v></c><c r="B16" t="s"><v>42</v></c><c r="C16" t="s"><v>19</v></c><c r="D16" t="s"><v>72</v></c><c r="E16" t="s"><v>73</v></c><c r="F16" t="s"><v>74</v></c></row><row r="17"><c r="A17" t="s"><v>75</v></c><c r="B17" t="s"><v>18</v></c><c r="C17" t="s"><v>76</v></c><c r="D17" t="s"><v>77</v></c><c r="E17" s="1"/><c r="F17" t="s"><v>78</v></c></row><row r="18"><c r="A18" t="s"><v>79</v></c><c r="B18" t="s"><v>80</v></c><c r="C18" t="s"><v>81</v></c><c r="D18" t="s"><v>82</v></c><c r="E18" s="1"/><c r="F18" t="s"><v>83</v></c></row><row r="19"><c r="A19" t="s"><v>84</v></c><c r="B19" t="s"><v>12</v></c><c r="C19" t="s"><v>27</v></c><c r="D19" t="s"><v>85</v></c><c r="E19" t="s"><v>86</v></c><c r="F19" t="s"><v>87</v></c></row><row r="20"><c r="A20" t="s"><v>88</v></c><c r="B20" t="s"><v>32</v></c><c r="C20" t="s"><v>13</v></c><c r="D20" t="s"><v>89</v></c><c r="E20" t="s"><v>90</v></c><c r="F20" t="s"><v>91</v></c></row><row r="21"><c r="A21" t="s"><v>92</v></c><c r="B21" t="s"><v>18</v></c><c r="C21" t="s"><v>43</v></c><c r="D21" t="s"><v>93</v></c><c r="E21" t="s"><v>94</v></c><c r="F21" t="s"><v>95</v></c></row><row r="22"><c r="A22" t="s"><v>96</v></c><c r="B22" t="s"><v>66</v></c><c r="C22" t="s"><v>27</v></c><c r="D22" t="s"><v>97</v></c><c r="E22" t="s"><v>98</v></c><c r="F22" t="s"><v>99</v></c></row><row r="23"><c r="A23" t="s"><v>100</v></c><c r="B23" t="s"><v>101</v></c><c r="C23" t="s"><v>102</v></c><c r="D23" t="s"><v>103</v></c><c r="E23" t="s"><v>104</v></c><c r="F23" t="s"><v>105</v></c></row><row r="24"><c r="A24" t="s"><v>106</v></c><c r="B24" t="s"><v>107</v></c><c r="C24" t="s"><v>81</v></c><c r="D24" t="s"><v>108</v></c><c r="E24" s="1"/><c r="F24" t="s"><v>109</v></c></row><row r="25"><c r="A25" t="s"><v>110</v></c><c r="B25" t="s"><v>57</v></c><c r="C25" t="s"><v>48</v></c><c r="D25" t="s"><v>111</v></c><c r="E25" t="s"><v>112</v></c><c r="F25" t="s"><v>113</v></c></row><row r="26"><c r="A26" t="s"><v>114</v></c><c r="B26" t="s"><v>115</v></c><c r="C26" t="s"><v>43</v></c><c r="D26" t="s"><v>116</v></c><c r="E26" t="s"><v>117</v></c><c r="F26" t="s"><v>118</v></c></row><row r="27"><c r="A27" t="s"><v>119</v></c><c r="B27" t="s"><v>18</v></c><c r="C27" t="s"><v>33</v></c><c r="D27" t="s"><v>120</v></c><c r="E27" s="1"/><c r="F27" t="s"><v>121</v></c></row><row r="28"><c r="A28" t="s"><v>122</v></c><c r="B28" t="s"><v>42</v></c><c r="C28" t="s"><v>13</v></c><c r="D28" t="s"><v>123</v></c><c r="E28" t="s"><v>124</v></c><c r="F28" t="s"><v>125</v></c></row><row r="29"><c r="A29" t="s"><v>126</v></c><c r="B29" t="s"><v>42</v></c><c r="C29" t="s"><v>43</v></c><c r="D29" t="s"><v>127</v></c><c r="E29" t="s"><v>128</v></c><c r="F29" t="s"><v>95</v></c></row><row r="30"><c r="A30" t="s"><v>129</v></c><c r="B30" t="s"><v>12</v></c><c r="C30" t="s"><v>130</v></c><c r="D30" t="s"><v>131</v></c><c r="E30" t="s"><v>132</v></c><c r="F30" t="s"><v>133</v></c></row></sheetData>
            <mergeCells count="5"> <mergeCell ref="A1:B1" /> <mergeCell ref="C1:F1" /> <mergeCell ref="A2:B2" /> <mergeCell ref="C2:C2" /> <mergeCell ref="D2:F2" /></mergeCells>`;

        return this.createData();
    }

    public get exportMultiColumnHeadersDataWithPinnedColumn() {
        this._sharedStringsData =
            `count="195" uniqueCount="162"><si><t>General Information</t></si><si><t>ID</t></si><si><t>Address Information</t></si><si><t>Personal Details</t></si><si><t>Location</t></si><si><t>Contact Information</t></si><si><t>ContactName</t></si><si><t>ContactTitle</t></si><si><t>Country</t></si><si><t>Phone</t></si><si><t>Fax</t></si><si><t>PostalCode</t></si><si><t>Maria Anders</t></si><si><t>Sales Representative</t></si><si><t>ALFKI</t></si><si><t>Germany</t></si><si><t>030-0074321</t></si><si><t>030-0076545</t></si><si><t>12209</t></si><si><t>Ana Trujillo</t></si><si><t>Owner</t></si><si><t>ANATR</t></si><si><t>Mexico</t></si><si><t>(5) 555-4729</t></si><si><t>(5) 555-3745</t></si><si><t>05021</t></si><si><t>Antonio Moreno</t></si><si><t>ANTON</t></si><si><t>(5) 555-3932</t></si><si><t>05023</t></si><si><t>Thomas Hardy</t></si><si><t>AROUT</t></si><si><t>UK</t></si><si><t>(171) 555-7788</t></si><si><t>(171) 555-6750</t></si><si><t>WA1 1DP</t></si><si><t>Christina Berglund</t></si><si><t>Order Administrator</t></si><si><t>BERGS</t></si><si><t>Sweden</t></si><si><t>0921-12 34 65</t></si><si><t>0921-12 34 67</t></si><si><t>S-958 22</t></si><si><t>Hanna Moos</t></si><si><t>BLAUS</t></si><si><t>0621-08460</t></si><si><t>0621-08924</t></si><si><t>68306</t></si><si><t>Frédérique Citeaux</t></si><si><t>Marketing Manager</t></si><si><t>BLONP</t></si><si><t>France</t></si><si><t>88.60.15.31</t></si><si><t>88.60.15.32</t></si><si><t>67000</t></si><si><t>Martín Sommer</t></si><si><t>BOLID</t></si><si><t>Spain</t></si><si><t>(91) 555 22 82</t></si><si><t>(91) 555 91 99</t></si><si><t>28023</t></si><si><t>Laurence Lebihan</t></si><si><t>BONAP</t></si><si><t>91.24.45.40</t></si><si><t>91.24.45.41</t></si><si><t>13008</t></si><si><t>Elizabeth Lincoln</t></si><si><t>Accounting Manager</t></si><si><t>BOTTM</t></si><si><t>Canada</t></si><si><t>(604) 555-4729</t></si><si><t>(604) 555-3745</t></si><si><t>T2F 8M4</t></si><si><t>Victoria Ashworth</t></si><si><t>BSBEV</t></si><si><t>(171) 555-1212</t></si><si><t>EC2 5NT</t></si><si><t>Patricio Simpson</t></si><si><t>Sales Agent</t></si><si><t>CACTU</t></si><si><t>Argentina</t></si><si><t>(1) 135-5555</t></si><si><t>(1) 135-4892</t></si><si><t>1010</t></si><si><t>Francisco Chang</t></si><si><t>CENTC</t></si><si><t>(5) 555-3392</t></si><si><t>(5) 555-7293</t></si><si><t>05022</t></si><si><t>Yang Wang</t></si><si><t>CHOPS</t></si><si><t>Switzerland</t></si><si><t>0452-076545</t></si><si><t>3012</t></si><si><t>Pedro Afonso</t></si><si><t>Sales Associate</t></si><si><t>COMMI</t></si><si><t>Brazil</t></si><si><t>(11) 555-7647</t></si><si><t>05432-043</t></si><si><t>Elizabeth Brown</t></si><si><t>CONSH</t></si><si><t>(171) 555-2282</t></si><si><t>(171) 555-9199</t></si><si><t>WX1 6LT</t></si><si><t>Sven Ottlieb</t></si><si><t>DRACD</t></si><si><t>0241-039123</t></si><si><t>0241-059428</t></si><si><t>52066</t></si><si><t>Janine Labrune</t></si><si><t>DUMON</t></si><si><t>40.67.88.88</t></si><si><t>40.67.89.89</t></si><si><t>44000</t></si><si><t>Ann Devon</t></si><si><t>EASTC</t></si><si><t>(171) 555-0297</t></si><si><t>(171) 555-3373</t></si><si><t>WX3 6FW</t></si><si><t>Roland Mendel</t></si><si><t>Sales Manager</t></si><si><t>ERNSH</t></si><si><t>Austria</t></si><si><t>7675-3425</t></si><si><t>7675-3426</t></si><si><t>8010</t></si><si><t>Aria Cruz</t></si><si><t>Marketing Assistant</t></si><si><t>FAMIA</t></si><si><t>(11) 555-9857</t></si><si><t>05442-030</t></si><si><t>Diego Roel</t></si><si><t>FISSA</t></si><si><t>(91) 555 94 44</t></si><si><t>(91) 555 55 93</t></si><si><t>28034</t></si><si><t>Martine Rancé</t></si><si><t>Assistant Sales Agent</t></si><si><t>FOLIG</t></si><si><t>20.16.10.16</t></si><si><t>20.16.10.17</t></si><si><t>59000</t></si><si><t>Maria Larsson</t></si><si><t>FOLKO</t></si><si><t>0695-34 67 21</t></si><si><t>S-844 67</t></si><si><t>Peter Franken</t></si><si><t>FRANK</t></si><si><t>089-0877310</t></si><si><t>089-0877451</t></si><si><t>80805</t></si><si><t>Carine Schmitt</t></si><si><t>FRANR</t></si><si><t>40.32.21.21</t></si><si><t>40.32.21.20</t></si><si><t>Paolo Accorti</t></si><si><t>FRANS</t></si><si><t>Italy</t></si><si><t>011-4988260</t></si><si><t>011-4988261</t></si><si><t>10100</t></si>`;

        this._worksheetData =
            `<dimension ref="A1:G30"/>
            <sheetViews><sheetView tabSelected="1" workbookViewId="0"><pane xSplit="2" topLeftCell="C1" activePane="topRight" state="frozen"/></sheetView></sheetViews>
            <sheetFormatPr defaultRowHeight="15"  x14ac:dyDescent="0.25"/>
            <cols><col min="1" max="7" width="15" customWidth="1"/></cols>
            <sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" /><c r="C1" t="s"><v>1</v></c><c r="D1" t="s"><v>2</v></c><c r="E1" /><c r="F1" /><c r="G1" /></row><row r="2"><c r="A2" t="s"><v>3</v></c><c r="B2" /><c r="D2" t="s"><v>4</v></c><c r="E2" t="s"><v>5</v></c><c r="F2" /><c r="G2" /></row><row r="3"><c r="A3" t="s"><v>6</v></c><c r="B3" t="s"><v>7</v></c><c r="D3" t="s"><v>8</v></c><c r="E3" t="s"><v>9</v></c><c r="F3" t="s"><v>10</v></c><c r="G3" t="s"><v>11</v></c></row><row r="4"><c r="A4" t="s"><v>12</v></c><c r="B4" t="s"><v>13</v></c><c r="C4" t="s"><v>14</v></c><c r="D4" t="s"><v>15</v></c><c r="E4" t="s"><v>16</v></c><c r="F4" t="s"><v>17</v></c><c r="G4" t="s"><v>18</v></c></row><row r="5"><c r="A5" t="s"><v>19</v></c><c r="B5" t="s"><v>20</v></c><c r="C5" t="s"><v>21</v></c><c r="D5" t="s"><v>22</v></c><c r="E5" t="s"><v>23</v></c><c r="F5" t="s"><v>24</v></c><c r="G5" t="s"><v>25</v></c></row><row r="6"><c r="A6" t="s"><v>26</v></c><c r="B6" t="s"><v>20</v></c><c r="C6" t="s"><v>27</v></c><c r="D6" t="s"><v>22</v></c><c r="E6" t="s"><v>28</v></c><c r="F6" s="1"/><c r="G6" t="s"><v>29</v></c></row><row r="7"><c r="A7" t="s"><v>30</v></c><c r="B7" t="s"><v>13</v></c><c r="C7" t="s"><v>31</v></c><c r="D7" t="s"><v>32</v></c><c r="E7" t="s"><v>33</v></c><c r="F7" t="s"><v>34</v></c><c r="G7" t="s"><v>35</v></c></row><row r="8"><c r="A8" t="s"><v>36</v></c><c r="B8" t="s"><v>37</v></c><c r="C8" t="s"><v>38</v></c><c r="D8" t="s"><v>39</v></c><c r="E8" t="s"><v>40</v></c><c r="F8" t="s"><v>41</v></c><c r="G8" t="s"><v>42</v></c></row><row r="9"><c r="A9" t="s"><v>43</v></c><c r="B9" t="s"><v>13</v></c><c r="C9" t="s"><v>44</v></c><c r="D9" t="s"><v>15</v></c><c r="E9" t="s"><v>45</v></c><c r="F9" t="s"><v>46</v></c><c r="G9" t="s"><v>47</v></c></row><row r="10"><c r="A10" t="s"><v>48</v></c><c r="B10" t="s"><v>49</v></c><c r="C10" t="s"><v>50</v></c><c r="D10" t="s"><v>51</v></c><c r="E10" t="s"><v>52</v></c><c r="F10" t="s"><v>53</v></c><c r="G10" t="s"><v>54</v></c></row><row r="11"><c r="A11" t="s"><v>55</v></c><c r="B11" t="s"><v>20</v></c><c r="C11" t="s"><v>56</v></c><c r="D11" t="s"><v>57</v></c><c r="E11" t="s"><v>58</v></c><c r="F11" t="s"><v>59</v></c><c r="G11" t="s"><v>60</v></c></row><row r="12"><c r="A12" t="s"><v>61</v></c><c r="B12" t="s"><v>20</v></c><c r="C12" t="s"><v>62</v></c><c r="D12" t="s"><v>51</v></c><c r="E12" t="s"><v>63</v></c><c r="F12" t="s"><v>64</v></c><c r="G12" t="s"><v>65</v></c></row><row r="13"><c r="A13" t="s"><v>66</v></c><c r="B13" t="s"><v>67</v></c><c r="C13" t="s"><v>68</v></c><c r="D13" t="s"><v>69</v></c><c r="E13" t="s"><v>70</v></c><c r="F13" t="s"><v>71</v></c><c r="G13" t="s"><v>72</v></c></row><row r="14"><c r="A14" t="s"><v>73</v></c><c r="B14" t="s"><v>13</v></c><c r="C14" t="s"><v>74</v></c><c r="D14" t="s"><v>32</v></c><c r="E14" t="s"><v>75</v></c><c r="F14" s="1"/><c r="G14" t="s"><v>76</v></c></row><row r="15"><c r="A15" t="s"><v>77</v></c><c r="B15" t="s"><v>78</v></c><c r="C15" t="s"><v>79</v></c><c r="D15" t="s"><v>80</v></c><c r="E15" t="s"><v>81</v></c><c r="F15" t="s"><v>82</v></c><c r="G15" t="s"><v>83</v></c></row><row r="16"><c r="A16" t="s"><v>84</v></c><c r="B16" t="s"><v>49</v></c><c r="C16" t="s"><v>85</v></c><c r="D16" t="s"><v>22</v></c><c r="E16" t="s"><v>86</v></c><c r="F16" t="s"><v>87</v></c><c r="G16" t="s"><v>88</v></c></row><row r="17"><c r="A17" t="s"><v>89</v></c><c r="B17" t="s"><v>20</v></c><c r="C17" t="s"><v>90</v></c><c r="D17" t="s"><v>91</v></c><c r="E17" t="s"><v>92</v></c><c r="F17" s="1"/><c r="G17" t="s"><v>93</v></c></row><row r="18"><c r="A18" t="s"><v>94</v></c><c r="B18" t="s"><v>95</v></c><c r="C18" t="s"><v>96</v></c><c r="D18" t="s"><v>97</v></c><c r="E18" t="s"><v>98</v></c><c r="F18" s="1"/><c r="G18" t="s"><v>99</v></c></row><row r="19"><c r="A19" t="s"><v>100</v></c><c r="B19" t="s"><v>13</v></c><c r="C19" t="s"><v>101</v></c><c r="D19" t="s"><v>32</v></c><c r="E19" t="s"><v>102</v></c><c r="F19" t="s"><v>103</v></c><c r="G19" t="s"><v>104</v></c></row><row r="20"><c r="A20" t="s"><v>105</v></c><c r="B20" t="s"><v>37</v></c><c r="C20" t="s"><v>106</v></c><c r="D20" t="s"><v>15</v></c><c r="E20" t="s"><v>107</v></c><c r="F20" t="s"><v>108</v></c><c r="G20" t="s"><v>109</v></c></row><row r="21"><c r="A21" t="s"><v>110</v></c><c r="B21" t="s"><v>20</v></c><c r="C21" t="s"><v>111</v></c><c r="D21" t="s"><v>51</v></c><c r="E21" t="s"><v>112</v></c><c r="F21" t="s"><v>113</v></c><c r="G21" t="s"><v>114</v></c></row><row r="22"><c r="A22" t="s"><v>115</v></c><c r="B22" t="s"><v>78</v></c><c r="C22" t="s"><v>116</v></c><c r="D22" t="s"><v>32</v></c><c r="E22" t="s"><v>117</v></c><c r="F22" t="s"><v>118</v></c><c r="G22" t="s"><v>119</v></c></row><row r="23"><c r="A23" t="s"><v>120</v></c><c r="B23" t="s"><v>121</v></c><c r="C23" t="s"><v>122</v></c><c r="D23" t="s"><v>123</v></c><c r="E23" t="s"><v>124</v></c><c r="F23" t="s"><v>125</v></c><c r="G23" t="s"><v>126</v></c></row><row r="24"><c r="A24" t="s"><v>127</v></c><c r="B24" t="s"><v>128</v></c><c r="C24" t="s"><v>129</v></c><c r="D24" t="s"><v>97</v></c><c r="E24" t="s"><v>130</v></c><c r="F24" s="1"/><c r="G24" t="s"><v>131</v></c></row><row r="25"><c r="A25" t="s"><v>132</v></c><c r="B25" t="s"><v>67</v></c><c r="C25" t="s"><v>133</v></c><c r="D25" t="s"><v>57</v></c><c r="E25" t="s"><v>134</v></c><c r="F25" t="s"><v>135</v></c><c r="G25" t="s"><v>136</v></c></row><row r="26"><c r="A26" t="s"><v>137</v></c><c r="B26" t="s"><v>138</v></c><c r="C26" t="s"><v>139</v></c><c r="D26" t="s"><v>51</v></c><c r="E26" t="s"><v>140</v></c><c r="F26" t="s"><v>141</v></c><c r="G26" t="s"><v>142</v></c></row><row r="27"><c r="A27" t="s"><v>143</v></c><c r="B27" t="s"><v>20</v></c><c r="C27" t="s"><v>144</v></c><c r="D27" t="s"><v>39</v></c><c r="E27" t="s"><v>145</v></c><c r="F27" s="1"/><c r="G27" t="s"><v>146</v></c></row><row r="28"><c r="A28" t="s"><v>147</v></c><c r="B28" t="s"><v>49</v></c><c r="C28" t="s"><v>148</v></c><c r="D28" t="s"><v>15</v></c><c r="E28" t="s"><v>149</v></c><c r="F28" t="s"><v>150</v></c><c r="G28" t="s"><v>151</v></c></row><row r="29"><c r="A29" t="s"><v>152</v></c><c r="B29" t="s"><v>49</v></c><c r="C29" t="s"><v>153</v></c><c r="D29" t="s"><v>51</v></c><c r="E29" t="s"><v>154</v></c><c r="F29" t="s"><v>155</v></c><c r="G29" t="s"><v>114</v></c></row><row r="30"><c r="A30" t="s"><v>156</v></c><c r="B30" t="s"><v>13</v></c><c r="C30" t="s"><v>157</v></c><c r="D30" t="s"><v>158</v></c><c r="E30" t="s"><v>159</v></c><c r="F30" t="s"><v>160</v></c><c r="G30" t="s"><v>161</v></c></row></sheetData>
            <mergeCells count="6"> <mergeCell ref="A1:B1" /> <mergeCell ref="C1:C3" /> <mergeCell ref="D1:G1" /> <mergeCell ref="A2:B2" /> <mergeCell ref="D2:D2" /> <mergeCell ref="E2:G2" /></mergeCells>`;

        return this.createData();
    }

    public get exportCollapsedAndExpandedMultiColumnHeadersData() {
        this._sharedStringsData =
            `count="198" uniqueCount="188"><si><t>ID</t></si><si><t>General Information</t></si><si><t>Address Information</t></si><si><t>CompanyName</t></si><si><t>Location</t></si><si><t>Contact Information</t></si><si><t>Region</t></si><si><t>City</t></si><si><t>Address</t></si><si><t>Phone</t></si><si><t>Fax</t></si><si><t>PostalCode</t></si><si><t>ALFKI</t></si><si><t>Alfreds Futterkiste</t></si><si><t>Berlin</t></si><si><t>Obere Str. 57</t></si><si><t>030-0074321</t></si><si><t>030-0076545</t></si><si><t>12209</t></si><si><t>ANATR</t></si><si><t>Ana Trujillo Emparedados y helados</t></si><si><t>México D.F.</t></si><si><t>Avda. de la Constitución 2222</t></si><si><t>(5) 555-4729</t></si><si><t>(5) 555-3745</t></si><si><t>05021</t></si><si><t>ANTON</t></si><si><t>Antonio Moreno Taquería</t></si><si><t>Mataderos 2312</t></si><si><t>(5) 555-3932</t></si><si><t>05023</t></si><si><t>AROUT</t></si><si><t>Around the Horn</t></si><si><t>London</t></si><si><t>120 Hanover Sq.</t></si><si><t>(171) 555-7788</t></si><si><t>(171) 555-6750</t></si><si><t>WA1 1DP</t></si><si><t>BERGS</t></si><si><t>Berglunds snabbköp</t></si><si><t>Luleå</t></si><si><t>Berguvsvägen 8</t></si><si><t>0921-12 34 65</t></si><si><t>0921-12 34 67</t></si><si><t>S-958 22</t></si><si><t>BLAUS</t></si><si><t>Blauer See Delikatessen</t></si><si><t>Mannheim</t></si><si><t>Forsterstr. 57</t></si><si><t>0621-08460</t></si><si><t>0621-08924</t></si><si><t>68306</t></si><si><t>BLONP</t></si><si><t>Blondesddsl père et fils</t></si><si><t>Strasbourg</t></si><si><t>24, place Kléber</t></si><si><t>88.60.15.31</t></si><si><t>88.60.15.32</t></si><si><t>67000</t></si><si><t>BOLID</t></si><si><t>Bólido Comidas preparadas</t></si><si><t>Madrid</t></si><si><t>C/ Araquil, 67</t></si><si><t>(91) 555 22 82</t></si><si><t>(91) 555 91 99</t></si><si><t>28023</t></si><si><t>BONAP</t></si><si><t>Bon app&apos;</t></si><si><t>Marseille</t></si><si><t>12, rue des Bouchers</t></si><si><t>91.24.45.40</t></si><si><t>91.24.45.41</t></si><si><t>13008</t></si><si><t>BOTTM</t></si><si><t>Bottom-Dollar Markets</t></si><si><t>BC</t></si><si><t>Tsawassen</t></si><si><t>23 Tsawassen Blvd.</t></si><si><t>(604) 555-4729</t></si><si><t>(604) 555-3745</t></si><si><t>T2F 8M4</t></si><si><t>BSBEV</t></si><si><t>B&apos;s Beverages</t></si><si><t>Fauntleroy Circus</t></si><si><t>(171) 555-1212</t></si><si><t>EC2 5NT</t></si><si><t>CACTU</t></si><si><t>Cactus Comidas para llevar</t></si><si><t>Buenos Aires</t></si><si><t>Cerrito 333</t></si><si><t>(1) 135-5555</t></si><si><t>(1) 135-4892</t></si><si><t>1010</t></si><si><t>CENTC</t></si><si><t>Centro comercial Moctezuma</t></si><si><t>Sierras de Granada 9993</t></si><si><t>(5) 555-3392</t></si><si><t>(5) 555-7293</t></si><si><t>05022</t></si><si><t>CHOPS</t></si><si><t>Chop-suey Chinese</t></si><si><t>Bern</t></si><si><t>Hauptstr. 29</t></si><si><t>0452-076545</t></si><si><t>3012</t></si><si><t>COMMI</t></si><si><t>Comércio Mineiro</t></si><si><t>SP</t></si><si><t>Sao Paulo</t></si><si><t>Av. dos Lusíadas, 23</t></si><si><t>(11) 555-7647</t></si><si><t>05432-043</t></si><si><t>CONSH</t></si><si><t>Consolidated Holdings</t></si><si><t>Berkeley Gardens 12 Brewery</t></si><si><t>(171) 555-2282</t></si><si><t>(171) 555-9199</t></si><si><t>WX1 6LT</t></si><si><t>DRACD</t></si><si><t>Drachenblut Delikatessen</t></si><si><t>Aachen</t></si><si><t>Walserweg 21</t></si><si><t>0241-039123</t></si><si><t>0241-059428</t></si><si><t>52066</t></si><si><t>DUMON</t></si><si><t>Du monde entier</t></si><si><t>Nantes</t></si><si><t>67, rue des Cinquante Otages</t></si><si><t>40.67.88.88</t></si><si><t>40.67.89.89</t></si><si><t>44000</t></si><si><t>EASTC</t></si><si><t>Eastern Connection</t></si><si><t>35 King George</t></si><si><t>(171) 555-0297</t></si><si><t>(171) 555-3373</t></si><si><t>WX3 6FW</t></si><si><t>ERNSH</t></si><si><t>Ernst Handel</t></si><si><t>Graz</t></si><si><t>Kirchgasse 6</t></si><si><t>7675-3425</t></si><si><t>7675-3426</t></si><si><t>8010</t></si><si><t>FAMIA</t></si><si><t>Familia Arquibaldo</t></si><si><t>Rua Orós, 92</t></si><si><t>(11) 555-9857</t></si><si><t>05442-030</t></si><si><t>FISSA</t></si><si><t>FISSA Fabrica Inter. Salchichas S.A.</t></si><si><t>C/ Moralzarzal, 86</t></si><si><t>(91) 555 94 44</t></si><si><t>(91) 555 55 93</t></si><si><t>28034</t></si><si><t>FOLIG</t></si><si><t>Folies gourmandes</t></si><si><t>Lille</t></si><si><t>184, chaussée de Tournai</t></si><si><t>20.16.10.16</t></si><si><t>20.16.10.17</t></si><si><t>59000</t></si><si><t>FOLKO</t></si><si><t>Folk och fä HB</t></si><si><t>Bräcke</t></si><si><t>Åkergatan 24</t></si><si><t>0695-34 67 21</t></si><si><t>S-844 67</t></si><si><t>FRANK</t></si><si><t>Frankenversand</t></si><si><t>München</t></si><si><t>Berliner Platz 43</t></si><si><t>089-0877310</t></si><si><t>089-0877451</t></si><si><t>80805</t></si><si><t>FRANR</t></si><si><t>France restauration</t></si><si><t>54, rue Royale</t></si><si><t>40.32.21.21</t></si><si><t>40.32.21.20</t></si><si><t>FRANS</t></si><si><t>Franchi S.p.A.</t></si><si><t>Torino</t></si><si><t>Via Monte Bianco 34</t></si><si><t>011-4988260</t></si><si><t>011-4988261</t></si><si><t>10100</t></si>`;

        this._worksheetData =
            `<dimension ref="A1:H30"/>
            <sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>
            <sheetFormatPr defaultRowHeight="15"  x14ac:dyDescent="0.25"/>
            <cols><col min="1" max="8" width="15" customWidth="1"/></cols>
            <sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c><c r="D1" /><c r="E1" /><c r="F1" /><c r="G1" /><c r="H1" /></row><row r="2"><c r="B2" t="s"><v>3</v></c><c r="C2" t="s"><v>4</v></c><c r="D2" /><c r="E2" /><c r="F2" t="s"><v>5</v></c><c r="G2" /><c r="H2" /></row><row r="3"><c r="C3" t="s"><v>6</v></c><c r="D3" t="s"><v>7</v></c><c r="E3" t="s"><v>8</v></c><c r="F3" t="s"><v>9</v></c><c r="G3" t="s"><v>10</v></c><c r="H3" t="s"><v>11</v></c></row><row r="4"><c r="A4" t="s"><v>12</v></c><c r="B4" t="s"><v>13</v></c><c r="C4" s="1"/><c r="D4" t="s"><v>14</v></c><c r="E4" t="s"><v>15</v></c><c r="F4" t="s"><v>16</v></c><c r="G4" t="s"><v>17</v></c><c r="H4" t="s"><v>18</v></c></row><row r="5"><c r="A5" t="s"><v>19</v></c><c r="B5" t="s"><v>20</v></c><c r="C5" s="1"/><c r="D5" t="s"><v>21</v></c><c r="E5" t="s"><v>22</v></c><c r="F5" t="s"><v>23</v></c><c r="G5" t="s"><v>24</v></c><c r="H5" t="s"><v>25</v></c></row><row r="6"><c r="A6" t="s"><v>26</v></c><c r="B6" t="s"><v>27</v></c><c r="C6" s="1"/><c r="D6" t="s"><v>21</v></c><c r="E6" t="s"><v>28</v></c><c r="F6" t="s"><v>29</v></c><c r="G6" s="1"/><c r="H6" t="s"><v>30</v></c></row><row r="7"><c r="A7" t="s"><v>31</v></c><c r="B7" t="s"><v>32</v></c><c r="C7" s="1"/><c r="D7" t="s"><v>33</v></c><c r="E7" t="s"><v>34</v></c><c r="F7" t="s"><v>35</v></c><c r="G7" t="s"><v>36</v></c><c r="H7" t="s"><v>37</v></c></row><row r="8"><c r="A8" t="s"><v>38</v></c><c r="B8" t="s"><v>39</v></c><c r="C8" s="1"/><c r="D8" t="s"><v>40</v></c><c r="E8" t="s"><v>41</v></c><c r="F8" t="s"><v>42</v></c><c r="G8" t="s"><v>43</v></c><c r="H8" t="s"><v>44</v></c></row><row r="9"><c r="A9" t="s"><v>45</v></c><c r="B9" t="s"><v>46</v></c><c r="C9" s="1"/><c r="D9" t="s"><v>47</v></c><c r="E9" t="s"><v>48</v></c><c r="F9" t="s"><v>49</v></c><c r="G9" t="s"><v>50</v></c><c r="H9" t="s"><v>51</v></c></row><row r="10"><c r="A10" t="s"><v>52</v></c><c r="B10" t="s"><v>53</v></c><c r="C10" s="1"/><c r="D10" t="s"><v>54</v></c><c r="E10" t="s"><v>55</v></c><c r="F10" t="s"><v>56</v></c><c r="G10" t="s"><v>57</v></c><c r="H10" t="s"><v>58</v></c></row><row r="11"><c r="A11" t="s"><v>59</v></c><c r="B11" t="s"><v>60</v></c><c r="C11" s="1"/><c r="D11" t="s"><v>61</v></c><c r="E11" t="s"><v>62</v></c><c r="F11" t="s"><v>63</v></c><c r="G11" t="s"><v>64</v></c><c r="H11" t="s"><v>65</v></c></row><row r="12"><c r="A12" t="s"><v>66</v></c><c r="B12" t="s"><v>67</v></c><c r="C12" s="1"/><c r="D12" t="s"><v>68</v></c><c r="E12" t="s"><v>69</v></c><c r="F12" t="s"><v>70</v></c><c r="G12" t="s"><v>71</v></c><c r="H12" t="s"><v>72</v></c></row><row r="13"><c r="A13" t="s"><v>73</v></c><c r="B13" t="s"><v>74</v></c><c r="C13" t="s"><v>75</v></c><c r="D13" t="s"><v>76</v></c><c r="E13" t="s"><v>77</v></c><c r="F13" t="s"><v>78</v></c><c r="G13" t="s"><v>79</v></c><c r="H13" t="s"><v>80</v></c></row><row r="14"><c r="A14" t="s"><v>81</v></c><c r="B14" t="s"><v>82</v></c><c r="C14" s="1"/><c r="D14" t="s"><v>33</v></c><c r="E14" t="s"><v>83</v></c><c r="F14" t="s"><v>84</v></c><c r="G14" s="1"/><c r="H14" t="s"><v>85</v></c></row><row r="15"><c r="A15" t="s"><v>86</v></c><c r="B15" t="s"><v>87</v></c><c r="C15" s="1"/><c r="D15" t="s"><v>88</v></c><c r="E15" t="s"><v>89</v></c><c r="F15" t="s"><v>90</v></c><c r="G15" t="s"><v>91</v></c><c r="H15" t="s"><v>92</v></c></row><row r="16"><c r="A16" t="s"><v>93</v></c><c r="B16" t="s"><v>94</v></c><c r="C16" s="1"/><c r="D16" t="s"><v>21</v></c><c r="E16" t="s"><v>95</v></c><c r="F16" t="s"><v>96</v></c><c r="G16" t="s"><v>97</v></c><c r="H16" t="s"><v>98</v></c></row><row r="17"><c r="A17" t="s"><v>99</v></c><c r="B17" t="s"><v>100</v></c><c r="C17" s="1"/><c r="D17" t="s"><v>101</v></c><c r="E17" t="s"><v>102</v></c><c r="F17" t="s"><v>103</v></c><c r="G17" s="1"/><c r="H17" t="s"><v>104</v></c></row><row r="18"><c r="A18" t="s"><v>105</v></c><c r="B18" t="s"><v>106</v></c><c r="C18" t="s"><v>107</v></c><c r="D18" t="s"><v>108</v></c><c r="E18" t="s"><v>109</v></c><c r="F18" t="s"><v>110</v></c><c r="G18" s="1"/><c r="H18" t="s"><v>111</v></c></row><row r="19"><c r="A19" t="s"><v>112</v></c><c r="B19" t="s"><v>113</v></c><c r="C19" s="1"/><c r="D19" t="s"><v>33</v></c><c r="E19" t="s"><v>114</v></c><c r="F19" t="s"><v>115</v></c><c r="G19" t="s"><v>116</v></c><c r="H19" t="s"><v>117</v></c></row><row r="20"><c r="A20" t="s"><v>118</v></c><c r="B20" t="s"><v>119</v></c><c r="C20" s="1"/><c r="D20" t="s"><v>120</v></c><c r="E20" t="s"><v>121</v></c><c r="F20" t="s"><v>122</v></c><c r="G20" t="s"><v>123</v></c><c r="H20" t="s"><v>124</v></c></row><row r="21"><c r="A21" t="s"><v>125</v></c><c r="B21" t="s"><v>126</v></c><c r="C21" s="1"/><c r="D21" t="s"><v>127</v></c><c r="E21" t="s"><v>128</v></c><c r="F21" t="s"><v>129</v></c><c r="G21" t="s"><v>130</v></c><c r="H21" t="s"><v>131</v></c></row><row r="22"><c r="A22" t="s"><v>132</v></c><c r="B22" t="s"><v>133</v></c><c r="C22" s="1"/><c r="D22" t="s"><v>33</v></c><c r="E22" t="s"><v>134</v></c><c r="F22" t="s"><v>135</v></c><c r="G22" t="s"><v>136</v></c><c r="H22" t="s"><v>137</v></c></row><row r="23"><c r="A23" t="s"><v>138</v></c><c r="B23" t="s"><v>139</v></c><c r="C23" s="1"/><c r="D23" t="s"><v>140</v></c><c r="E23" t="s"><v>141</v></c><c r="F23" t="s"><v>142</v></c><c r="G23" t="s"><v>143</v></c><c r="H23" t="s"><v>144</v></c></row><row r="24"><c r="A24" t="s"><v>145</v></c><c r="B24" t="s"><v>146</v></c><c r="C24" t="s"><v>107</v></c><c r="D24" t="s"><v>108</v></c><c r="E24" t="s"><v>147</v></c><c r="F24" t="s"><v>148</v></c><c r="G24" s="1"/><c r="H24" t="s"><v>149</v></c></row><row r="25"><c r="A25" t="s"><v>150</v></c><c r="B25" t="s"><v>151</v></c><c r="C25" s="1"/><c r="D25" t="s"><v>61</v></c><c r="E25" t="s"><v>152</v></c><c r="F25" t="s"><v>153</v></c><c r="G25" t="s"><v>154</v></c><c r="H25" t="s"><v>155</v></c></row><row r="26"><c r="A26" t="s"><v>156</v></c><c r="B26" t="s"><v>157</v></c><c r="C26" s="1"/><c r="D26" t="s"><v>158</v></c><c r="E26" t="s"><v>159</v></c><c r="F26" t="s"><v>160</v></c><c r="G26" t="s"><v>161</v></c><c r="H26" t="s"><v>162</v></c></row><row r="27"><c r="A27" t="s"><v>163</v></c><c r="B27" t="s"><v>164</v></c><c r="C27" s="1"/><c r="D27" t="s"><v>165</v></c><c r="E27" t="s"><v>166</v></c><c r="F27" t="s"><v>167</v></c><c r="G27" s="1"/><c r="H27" t="s"><v>168</v></c></row><row r="28"><c r="A28" t="s"><v>169</v></c><c r="B28" t="s"><v>170</v></c><c r="C28" s="1"/><c r="D28" t="s"><v>171</v></c><c r="E28" t="s"><v>172</v></c><c r="F28" t="s"><v>173</v></c><c r="G28" t="s"><v>174</v></c><c r="H28" t="s"><v>175</v></c></row><row r="29"><c r="A29" t="s"><v>176</v></c><c r="B29" t="s"><v>177</v></c><c r="C29" s="1"/><c r="D29" t="s"><v>127</v></c><c r="E29" t="s"><v>178</v></c><c r="F29" t="s"><v>179</v></c><c r="G29" t="s"><v>180</v></c><c r="H29" t="s"><v>131</v></c></row><row r="30"><c r="A30" t="s"><v>181</v></c><c r="B30" t="s"><v>182</v></c><c r="C30" s="1"/><c r="D30" t="s"><v>183</v></c><c r="E30" t="s"><v>184</v></c><c r="F30" t="s"><v>185</v></c><c r="G30" t="s"><v>186</v></c><c r="H30" t="s"><v>187</v></c></row></sheetData>
            <mergeCells count="6"> <mergeCell ref="A1:A3" /> <mergeCell ref="B1:B1" /> <mergeCell ref="C1:H1" /> <mergeCell ref="B2:B3" /> <mergeCell ref="C2:E2" /> <mergeCell ref="F2:H2" /></mergeCells>`;

        return this.createData();
    }

    public get exportMultiColumnHeadersDataWithIgnoreColumnVisibility() {
        this._sharedStringsData =
            `count="283" uniqueCount="241"><si><t>ID</t></si><si><t>General Information</t></si><si><t>Address Information</t></si><si><t>CompanyName</t></si><si><t>Personal Details</t></si><si><t>Location</t></si><si><t>Contact Information</t></si><si><t>ContactName</t></si><si><t>ContactTitle</t></si><si><t>Country</t></si><si><t>Region</t></si><si><t>City</t></si><si><t>Address</t></si><si><t>Phone</t></si><si><t>Fax</t></si><si><t>PostalCode</t></si><si><t>ALFKI</t></si><si><t>Alfreds Futterkiste</t></si><si><t>Maria Anders</t></si><si><t>Sales Representative</t></si><si><t>Germany</t></si><si><t>Berlin</t></si><si><t>Obere Str. 57</t></si><si><t>030-0074321</t></si><si><t>030-0076545</t></si><si><t>12209</t></si><si><t>ANATR</t></si><si><t>Ana Trujillo Emparedados y helados</t></si><si><t>Ana Trujillo</t></si><si><t>Owner</t></si><si><t>Mexico</t></si><si><t>México D.F.</t></si><si><t>Avda. de la Constitución 2222</t></si><si><t>(5) 555-4729</t></si><si><t>(5) 555-3745</t></si><si><t>05021</t></si><si><t>ANTON</t></si><si><t>Antonio Moreno Taquería</t></si><si><t>Antonio Moreno</t></si><si><t>Mataderos 2312</t></si><si><t>(5) 555-3932</t></si><si><t>05023</t></si><si><t>AROUT</t></si><si><t>Around the Horn</t></si><si><t>Thomas Hardy</t></si><si><t>UK</t></si><si><t>London</t></si><si><t>120 Hanover Sq.</t></si><si><t>(171) 555-7788</t></si><si><t>(171) 555-6750</t></si><si><t>WA1 1DP</t></si><si><t>BERGS</t></si><si><t>Berglunds snabbköp</t></si><si><t>Christina Berglund</t></si><si><t>Order Administrator</t></si><si><t>Sweden</t></si><si><t>Luleå</t></si><si><t>Berguvsvägen 8</t></si><si><t>0921-12 34 65</t></si><si><t>0921-12 34 67</t></si><si><t>S-958 22</t></si><si><t>BLAUS</t></si><si><t>Blauer See Delikatessen</t></si><si><t>Hanna Moos</t></si><si><t>Mannheim</t></si><si><t>Forsterstr. 57</t></si><si><t>0621-08460</t></si><si><t>0621-08924</t></si><si><t>68306</t></si><si><t>BLONP</t></si><si><t>Blondesddsl père et fils</t></si><si><t>Frédérique Citeaux</t></si><si><t>Marketing Manager</t></si><si><t>France</t></si><si><t>Strasbourg</t></si><si><t>24, place Kléber</t></si><si><t>88.60.15.31</t></si><si><t>88.60.15.32</t></si><si><t>67000</t></si><si><t>BOLID</t></si><si><t>Bólido Comidas preparadas</t></si><si><t>Martín Sommer</t></si><si><t>Spain</t></si><si><t>Madrid</t></si><si><t>C/ Araquil, 67</t></si><si><t>(91) 555 22 82</t></si><si><t>(91) 555 91 99</t></si><si><t>28023</t></si><si><t>BONAP</t></si><si><t>Bon app&apos;</t></si><si><t>Laurence Lebihan</t></si><si><t>Marseille</t></si><si><t>12, rue des Bouchers</t></si><si><t>91.24.45.40</t></si><si><t>91.24.45.41</t></si><si><t>13008</t></si><si><t>BOTTM</t></si><si><t>Bottom-Dollar Markets</t></si><si><t>Elizabeth Lincoln</t></si><si><t>Accounting Manager</t></si><si><t>Canada</t></si><si><t>BC</t></si><si><t>Tsawassen</t></si><si><t>23 Tsawassen Blvd.</t></si><si><t>(604) 555-4729</t></si><si><t>(604) 555-3745</t></si><si><t>T2F 8M4</t></si><si><t>BSBEV</t></si><si><t>B&apos;s Beverages</t></si><si><t>Victoria Ashworth</t></si><si><t>Fauntleroy Circus</t></si><si><t>(171) 555-1212</t></si><si><t>EC2 5NT</t></si><si><t>CACTU</t></si><si><t>Cactus Comidas para llevar</t></si><si><t>Patricio Simpson</t></si><si><t>Sales Agent</t></si><si><t>Argentina</t></si><si><t>Buenos Aires</t></si><si><t>Cerrito 333</t></si><si><t>(1) 135-5555</t></si><si><t>(1) 135-4892</t></si><si><t>1010</t></si><si><t>CENTC</t></si><si><t>Centro comercial Moctezuma</t></si><si><t>Francisco Chang</t></si><si><t>Sierras de Granada 9993</t></si><si><t>(5) 555-3392</t></si><si><t>(5) 555-7293</t></si><si><t>05022</t></si><si><t>CHOPS</t></si><si><t>Chop-suey Chinese</t></si><si><t>Yang Wang</t></si><si><t>Switzerland</t></si><si><t>Bern</t></si><si><t>Hauptstr. 29</t></si><si><t>0452-076545</t></si><si><t>3012</t></si><si><t>COMMI</t></si><si><t>Comércio Mineiro</t></si><si><t>Pedro Afonso</t></si><si><t>Sales Associate</t></si><si><t>Brazil</t></si><si><t>SP</t></si><si><t>Sao Paulo</t></si><si><t>Av. dos Lusíadas, 23</t></si><si><t>(11) 555-7647</t></si><si><t>05432-043</t></si><si><t>CONSH</t></si><si><t>Consolidated Holdings</t></si><si><t>Elizabeth Brown</t></si><si><t>Berkeley Gardens 12 Brewery</t></si><si><t>(171) 555-2282</t></si><si><t>(171) 555-9199</t></si><si><t>WX1 6LT</t></si><si><t>DRACD</t></si><si><t>Drachenblut Delikatessen</t></si><si><t>Sven Ottlieb</t></si><si><t>Aachen</t></si><si><t>Walserweg 21</t></si><si><t>0241-039123</t></si><si><t>0241-059428</t></si><si><t>52066</t></si><si><t>DUMON</t></si><si><t>Du monde entier</t></si><si><t>Janine Labrune</t></si><si><t>Nantes</t></si><si><t>67, rue des Cinquante Otages</t></si><si><t>40.67.88.88</t></si><si><t>40.67.89.89</t></si><si><t>44000</t></si><si><t>EASTC</t></si><si><t>Eastern Connection</t></si><si><t>Ann Devon</t></si><si><t>35 King George</t></si><si><t>(171) 555-0297</t></si><si><t>(171) 555-3373</t></si><si><t>WX3 6FW</t></si><si><t>ERNSH</t></si><si><t>Ernst Handel</t></si><si><t>Roland Mendel</t></si><si><t>Sales Manager</t></si><si><t>Austria</t></si><si><t>Graz</t></si><si><t>Kirchgasse 6</t></si><si><t>7675-3425</t></si><si><t>7675-3426</t></si><si><t>8010</t></si><si><t>FAMIA</t></si><si><t>Familia Arquibaldo</t></si><si><t>Aria Cruz</t></si><si><t>Marketing Assistant</t></si><si><t>Rua Orós, 92</t></si><si><t>(11) 555-9857</t></si><si><t>05442-030</t></si><si><t>FISSA</t></si><si><t>FISSA Fabrica Inter. Salchichas S.A.</t></si><si><t>Diego Roel</t></si><si><t>C/ Moralzarzal, 86</t></si><si><t>(91) 555 94 44</t></si><si><t>(91) 555 55 93</t></si><si><t>28034</t></si><si><t>FOLIG</t></si><si><t>Folies gourmandes</t></si><si><t>Martine Rancé</t></si><si><t>Assistant Sales Agent</t></si><si><t>Lille</t></si><si><t>184, chaussée de Tournai</t></si><si><t>20.16.10.16</t></si><si><t>20.16.10.17</t></si><si><t>59000</t></si><si><t>FOLKO</t></si><si><t>Folk och fä HB</t></si><si><t>Maria Larsson</t></si><si><t>Bräcke</t></si><si><t>Åkergatan 24</t></si><si><t>0695-34 67 21</t></si><si><t>S-844 67</t></si><si><t>FRANK</t></si><si><t>Frankenversand</t></si><si><t>Peter Franken</t></si><si><t>München</t></si><si><t>Berliner Platz 43</t></si><si><t>089-0877310</t></si><si><t>089-0877451</t></si><si><t>80805</t></si><si><t>FRANR</t></si><si><t>France restauration</t></si><si><t>Carine Schmitt</t></si><si><t>54, rue Royale</t></si><si><t>40.32.21.21</t></si><si><t>40.32.21.20</t></si><si><t>FRANS</t></si><si><t>Franchi S.p.A.</t></si><si><t>Paolo Accorti</t></si><si><t>Italy</t></si><si><t>Torino</t></si><si><t>Via Monte Bianco 34</t></si><si><t>011-4988260</t></si><si><t>011-4988261</t></si><si><t>10100</t></si>`;

        this._worksheetData =
            `<dimension ref="A1:K30"/>
            <sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>
            <sheetFormatPr defaultRowHeight="15"  x14ac:dyDescent="0.25"/>
            <cols><col min="1" max="11" width="15" customWidth="1"/></cols>
            <sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" /><c r="D1" /><c r="E1" t="s"><v>2</v></c><c r="F1" /><c r="G1" /><c r="H1" /><c r="I1" /><c r="J1" /><c r="K1" /></row><row r="2"><c r="B2" t="s"><v>3</v></c><c r="C2" t="s"><v>4</v></c><c r="D2" /><c r="E2" t="s"><v>5</v></c><c r="F2" /><c r="G2" /><c r="H2" /><c r="I2" t="s"><v>6</v></c><c r="J2" /><c r="K2" /></row><row r="3"><c r="C3" t="s"><v>7</v></c><c r="D3" t="s"><v>8</v></c><c r="E3" t="s"><v>9</v></c><c r="F3" t="s"><v>10</v></c><c r="G3" t="s"><v>11</v></c><c r="H3" t="s"><v>12</v></c><c r="I3" t="s"><v>13</v></c><c r="J3" t="s"><v>14</v></c><c r="K3" t="s"><v>15</v></c></row><row r="4"><c r="A4" t="s"><v>16</v></c><c r="B4" t="s"><v>17</v></c><c r="C4" t="s"><v>18</v></c><c r="D4" t="s"><v>19</v></c><c r="E4" t="s"><v>20</v></c><c r="F4" s="1"/><c r="G4" t="s"><v>21</v></c><c r="H4" t="s"><v>22</v></c><c r="I4" t="s"><v>23</v></c><c r="J4" t="s"><v>24</v></c><c r="K4" t="s"><v>25</v></c></row><row r="5"><c r="A5" t="s"><v>26</v></c><c r="B5" t="s"><v>27</v></c><c r="C5" t="s"><v>28</v></c><c r="D5" t="s"><v>29</v></c><c r="E5" t="s"><v>30</v></c><c r="F5" s="1"/><c r="G5" t="s"><v>31</v></c><c r="H5" t="s"><v>32</v></c><c r="I5" t="s"><v>33</v></c><c r="J5" t="s"><v>34</v></c><c r="K5" t="s"><v>35</v></c></row><row r="6"><c r="A6" t="s"><v>36</v></c><c r="B6" t="s"><v>37</v></c><c r="C6" t="s"><v>38</v></c><c r="D6" t="s"><v>29</v></c><c r="E6" t="s"><v>30</v></c><c r="F6" s="1"/><c r="G6" t="s"><v>31</v></c><c r="H6" t="s"><v>39</v></c><c r="I6" t="s"><v>40</v></c><c r="J6" s="1"/><c r="K6" t="s"><v>41</v></c></row><row r="7"><c r="A7" t="s"><v>42</v></c><c r="B7" t="s"><v>43</v></c><c r="C7" t="s"><v>44</v></c><c r="D7" t="s"><v>19</v></c><c r="E7" t="s"><v>45</v></c><c r="F7" s="1"/><c r="G7" t="s"><v>46</v></c><c r="H7" t="s"><v>47</v></c><c r="I7" t="s"><v>48</v></c><c r="J7" t="s"><v>49</v></c><c r="K7" t="s"><v>50</v></c></row><row r="8"><c r="A8" t="s"><v>51</v></c><c r="B8" t="s"><v>52</v></c><c r="C8" t="s"><v>53</v></c><c r="D8" t="s"><v>54</v></c><c r="E8" t="s"><v>55</v></c><c r="F8" s="1"/><c r="G8" t="s"><v>56</v></c><c r="H8" t="s"><v>57</v></c><c r="I8" t="s"><v>58</v></c><c r="J8" t="s"><v>59</v></c><c r="K8" t="s"><v>60</v></c></row><row r="9"><c r="A9" t="s"><v>61</v></c><c r="B9" t="s"><v>62</v></c><c r="C9" t="s"><v>63</v></c><c r="D9" t="s"><v>19</v></c><c r="E9" t="s"><v>20</v></c><c r="F9" s="1"/><c r="G9" t="s"><v>64</v></c><c r="H9" t="s"><v>65</v></c><c r="I9" t="s"><v>66</v></c><c r="J9" t="s"><v>67</v></c><c r="K9" t="s"><v>68</v></c></row><row r="10"><c r="A10" t="s"><v>69</v></c><c r="B10" t="s"><v>70</v></c><c r="C10" t="s"><v>71</v></c><c r="D10" t="s"><v>72</v></c><c r="E10" t="s"><v>73</v></c><c r="F10" s="1"/><c r="G10" t="s"><v>74</v></c><c r="H10" t="s"><v>75</v></c><c r="I10" t="s"><v>76</v></c><c r="J10" t="s"><v>77</v></c><c r="K10" t="s"><v>78</v></c></row><row r="11"><c r="A11" t="s"><v>79</v></c><c r="B11" t="s"><v>80</v></c><c r="C11" t="s"><v>81</v></c><c r="D11" t="s"><v>29</v></c><c r="E11" t="s"><v>82</v></c><c r="F11" s="1"/><c r="G11" t="s"><v>83</v></c><c r="H11" t="s"><v>84</v></c><c r="I11" t="s"><v>85</v></c><c r="J11" t="s"><v>86</v></c><c r="K11" t="s"><v>87</v></c></row><row r="12"><c r="A12" t="s"><v>88</v></c><c r="B12" t="s"><v>89</v></c><c r="C12" t="s"><v>90</v></c><c r="D12" t="s"><v>29</v></c><c r="E12" t="s"><v>73</v></c><c r="F12" s="1"/><c r="G12" t="s"><v>91</v></c><c r="H12" t="s"><v>92</v></c><c r="I12" t="s"><v>93</v></c><c r="J12" t="s"><v>94</v></c><c r="K12" t="s"><v>95</v></c></row><row r="13"><c r="A13" t="s"><v>96</v></c><c r="B13" t="s"><v>97</v></c><c r="C13" t="s"><v>98</v></c><c r="D13" t="s"><v>99</v></c><c r="E13" t="s"><v>100</v></c><c r="F13" t="s"><v>101</v></c><c r="G13" t="s"><v>102</v></c><c r="H13" t="s"><v>103</v></c><c r="I13" t="s"><v>104</v></c><c r="J13" t="s"><v>105</v></c><c r="K13" t="s"><v>106</v></c></row><row r="14"><c r="A14" t="s"><v>107</v></c><c r="B14" t="s"><v>108</v></c><c r="C14" t="s"><v>109</v></c><c r="D14" t="s"><v>19</v></c><c r="E14" t="s"><v>45</v></c><c r="F14" s="1"/><c r="G14" t="s"><v>46</v></c><c r="H14" t="s"><v>110</v></c><c r="I14" t="s"><v>111</v></c><c r="J14" s="1"/><c r="K14" t="s"><v>112</v></c></row><row r="15"><c r="A15" t="s"><v>113</v></c><c r="B15" t="s"><v>114</v></c><c r="C15" t="s"><v>115</v></c><c r="D15" t="s"><v>116</v></c><c r="E15" t="s"><v>117</v></c><c r="F15" s="1"/><c r="G15" t="s"><v>118</v></c><c r="H15" t="s"><v>119</v></c><c r="I15" t="s"><v>120</v></c><c r="J15" t="s"><v>121</v></c><c r="K15" t="s"><v>122</v></c></row><row r="16"><c r="A16" t="s"><v>123</v></c><c r="B16" t="s"><v>124</v></c><c r="C16" t="s"><v>125</v></c><c r="D16" t="s"><v>72</v></c><c r="E16" t="s"><v>30</v></c><c r="F16" s="1"/><c r="G16" t="s"><v>31</v></c><c r="H16" t="s"><v>126</v></c><c r="I16" t="s"><v>127</v></c><c r="J16" t="s"><v>128</v></c><c r="K16" t="s"><v>129</v></c></row><row r="17"><c r="A17" t="s"><v>130</v></c><c r="B17" t="s"><v>131</v></c><c r="C17" t="s"><v>132</v></c><c r="D17" t="s"><v>29</v></c><c r="E17" t="s"><v>133</v></c><c r="F17" s="1"/><c r="G17" t="s"><v>134</v></c><c r="H17" t="s"><v>135</v></c><c r="I17" t="s"><v>136</v></c><c r="J17" s="1"/><c r="K17" t="s"><v>137</v></c></row><row r="18"><c r="A18" t="s"><v>138</v></c><c r="B18" t="s"><v>139</v></c><c r="C18" t="s"><v>140</v></c><c r="D18" t="s"><v>141</v></c><c r="E18" t="s"><v>142</v></c><c r="F18" t="s"><v>143</v></c><c r="G18" t="s"><v>144</v></c><c r="H18" t="s"><v>145</v></c><c r="I18" t="s"><v>146</v></c><c r="J18" s="1"/><c r="K18" t="s"><v>147</v></c></row><row r="19"><c r="A19" t="s"><v>148</v></c><c r="B19" t="s"><v>149</v></c><c r="C19" t="s"><v>150</v></c><c r="D19" t="s"><v>19</v></c><c r="E19" t="s"><v>45</v></c><c r="F19" s="1"/><c r="G19" t="s"><v>46</v></c><c r="H19" t="s"><v>151</v></c><c r="I19" t="s"><v>152</v></c><c r="J19" t="s"><v>153</v></c><c r="K19" t="s"><v>154</v></c></row><row r="20"><c r="A20" t="s"><v>155</v></c><c r="B20" t="s"><v>156</v></c><c r="C20" t="s"><v>157</v></c><c r="D20" t="s"><v>54</v></c><c r="E20" t="s"><v>20</v></c><c r="F20" s="1"/><c r="G20" t="s"><v>158</v></c><c r="H20" t="s"><v>159</v></c><c r="I20" t="s"><v>160</v></c><c r="J20" t="s"><v>161</v></c><c r="K20" t="s"><v>162</v></c></row><row r="21"><c r="A21" t="s"><v>163</v></c><c r="B21" t="s"><v>164</v></c><c r="C21" t="s"><v>165</v></c><c r="D21" t="s"><v>29</v></c><c r="E21" t="s"><v>73</v></c><c r="F21" s="1"/><c r="G21" t="s"><v>166</v></c><c r="H21" t="s"><v>167</v></c><c r="I21" t="s"><v>168</v></c><c r="J21" t="s"><v>169</v></c><c r="K21" t="s"><v>170</v></c></row><row r="22"><c r="A22" t="s"><v>171</v></c><c r="B22" t="s"><v>172</v></c><c r="C22" t="s"><v>173</v></c><c r="D22" t="s"><v>116</v></c><c r="E22" t="s"><v>45</v></c><c r="F22" s="1"/><c r="G22" t="s"><v>46</v></c><c r="H22" t="s"><v>174</v></c><c r="I22" t="s"><v>175</v></c><c r="J22" t="s"><v>176</v></c><c r="K22" t="s"><v>177</v></c></row><row r="23"><c r="A23" t="s"><v>178</v></c><c r="B23" t="s"><v>179</v></c><c r="C23" t="s"><v>180</v></c><c r="D23" t="s"><v>181</v></c><c r="E23" t="s"><v>182</v></c><c r="F23" s="1"/><c r="G23" t="s"><v>183</v></c><c r="H23" t="s"><v>184</v></c><c r="I23" t="s"><v>185</v></c><c r="J23" t="s"><v>186</v></c><c r="K23" t="s"><v>187</v></c></row><row r="24"><c r="A24" t="s"><v>188</v></c><c r="B24" t="s"><v>189</v></c><c r="C24" t="s"><v>190</v></c><c r="D24" t="s"><v>191</v></c><c r="E24" t="s"><v>142</v></c><c r="F24" t="s"><v>143</v></c><c r="G24" t="s"><v>144</v></c><c r="H24" t="s"><v>192</v></c><c r="I24" t="s"><v>193</v></c><c r="J24" s="1"/><c r="K24" t="s"><v>194</v></c></row><row r="25"><c r="A25" t="s"><v>195</v></c><c r="B25" t="s"><v>196</v></c><c r="C25" t="s"><v>197</v></c><c r="D25" t="s"><v>99</v></c><c r="E25" t="s"><v>82</v></c><c r="F25" s="1"/><c r="G25" t="s"><v>83</v></c><c r="H25" t="s"><v>198</v></c><c r="I25" t="s"><v>199</v></c><c r="J25" t="s"><v>200</v></c><c r="K25" t="s"><v>201</v></c></row><row r="26"><c r="A26" t="s"><v>202</v></c><c r="B26" t="s"><v>203</v></c><c r="C26" t="s"><v>204</v></c><c r="D26" t="s"><v>205</v></c><c r="E26" t="s"><v>73</v></c><c r="F26" s="1"/><c r="G26" t="s"><v>206</v></c><c r="H26" t="s"><v>207</v></c><c r="I26" t="s"><v>208</v></c><c r="J26" t="s"><v>209</v></c><c r="K26" t="s"><v>210</v></c></row><row r="27"><c r="A27" t="s"><v>211</v></c><c r="B27" t="s"><v>212</v></c><c r="C27" t="s"><v>213</v></c><c r="D27" t="s"><v>29</v></c><c r="E27" t="s"><v>55</v></c><c r="F27" s="1"/><c r="G27" t="s"><v>214</v></c><c r="H27" t="s"><v>215</v></c><c r="I27" t="s"><v>216</v></c><c r="J27" s="1"/><c r="K27" t="s"><v>217</v></c></row><row r="28"><c r="A28" t="s"><v>218</v></c><c r="B28" t="s"><v>219</v></c><c r="C28" t="s"><v>220</v></c><c r="D28" t="s"><v>72</v></c><c r="E28" t="s"><v>20</v></c><c r="F28" s="1"/><c r="G28" t="s"><v>221</v></c><c r="H28" t="s"><v>222</v></c><c r="I28" t="s"><v>223</v></c><c r="J28" t="s"><v>224</v></c><c r="K28" t="s"><v>225</v></c></row><row r="29"><c r="A29" t="s"><v>226</v></c><c r="B29" t="s"><v>227</v></c><c r="C29" t="s"><v>228</v></c><c r="D29" t="s"><v>72</v></c><c r="E29" t="s"><v>73</v></c><c r="F29" s="1"/><c r="G29" t="s"><v>166</v></c><c r="H29" t="s"><v>229</v></c><c r="I29" t="s"><v>230</v></c><c r="J29" t="s"><v>231</v></c><c r="K29" t="s"><v>170</v></c></row><row r="30"><c r="A30" t="s"><v>232</v></c><c r="B30" t="s"><v>233</v></c><c r="C30" t="s"><v>234</v></c><c r="D30" t="s"><v>19</v></c><c r="E30" t="s"><v>235</v></c><c r="F30" s="1"/><c r="G30" t="s"><v>236</v></c><c r="H30" t="s"><v>237</v></c><c r="I30" t="s"><v>238</v></c><c r="J30" t="s"><v>239</v></c><c r="K30" t="s"><v>240</v></c></row></sheetData>
            <mergeCells count="7"> <mergeCell ref="A1:A3" /> <mergeCell ref="B1:D1" /> <mergeCell ref="E1:K1" /> <mergeCell ref="B2:B3" /> <mergeCell ref="C2:D2" /> <mergeCell ref="E2:H2" /> <mergeCell ref="I2:K2" /></mergeCells>`;

        return this.createData();
    }

    public get exportMultiColumnHeadersDataWithoutMultiColumnHeaders() {
        this._sharedStringsData =
            `count="190" uniqueCount="157"><si><t>ID</t></si><si><t>ContactName</t></si><si><t>ContactTitle</t></si><si><t>Country</t></si><si><t>Phone</t></si><si><t>Fax</t></si><si><t>PostalCode</t></si><si><t>ALFKI</t></si><si><t>Maria Anders</t></si><si><t>Sales Representative</t></si><si><t>Germany</t></si><si><t>030-0074321</t></si><si><t>030-0076545</t></si><si><t>12209</t></si><si><t>ANATR</t></si><si><t>Ana Trujillo</t></si><si><t>Owner</t></si><si><t>Mexico</t></si><si><t>(5) 555-4729</t></si><si><t>(5) 555-3745</t></si><si><t>05021</t></si><si><t>ANTON</t></si><si><t>Antonio Moreno</t></si><si><t>(5) 555-3932</t></si><si><t>05023</t></si><si><t>AROUT</t></si><si><t>Thomas Hardy</t></si><si><t>UK</t></si><si><t>(171) 555-7788</t></si><si><t>(171) 555-6750</t></si><si><t>WA1 1DP</t></si><si><t>BERGS</t></si><si><t>Christina Berglund</t></si><si><t>Order Administrator</t></si><si><t>Sweden</t></si><si><t>0921-12 34 65</t></si><si><t>0921-12 34 67</t></si><si><t>S-958 22</t></si><si><t>BLAUS</t></si><si><t>Hanna Moos</t></si><si><t>0621-08460</t></si><si><t>0621-08924</t></si><si><t>68306</t></si><si><t>BLONP</t></si><si><t>Frédérique Citeaux</t></si><si><t>Marketing Manager</t></si><si><t>France</t></si><si><t>88.60.15.31</t></si><si><t>88.60.15.32</t></si><si><t>67000</t></si><si><t>BOLID</t></si><si><t>Martín Sommer</t></si><si><t>Spain</t></si><si><t>(91) 555 22 82</t></si><si><t>(91) 555 91 99</t></si><si><t>28023</t></si><si><t>BONAP</t></si><si><t>Laurence Lebihan</t></si><si><t>91.24.45.40</t></si><si><t>91.24.45.41</t></si><si><t>13008</t></si><si><t>BOTTM</t></si><si><t>Elizabeth Lincoln</t></si><si><t>Accounting Manager</t></si><si><t>Canada</t></si><si><t>(604) 555-4729</t></si><si><t>(604) 555-3745</t></si><si><t>T2F 8M4</t></si><si><t>BSBEV</t></si><si><t>Victoria Ashworth</t></si><si><t>(171) 555-1212</t></si><si><t>EC2 5NT</t></si><si><t>CACTU</t></si><si><t>Patricio Simpson</t></si><si><t>Sales Agent</t></si><si><t>Argentina</t></si><si><t>(1) 135-5555</t></si><si><t>(1) 135-4892</t></si><si><t>1010</t></si><si><t>CENTC</t></si><si><t>Francisco Chang</t></si><si><t>(5) 555-3392</t></si><si><t>(5) 555-7293</t></si><si><t>05022</t></si><si><t>CHOPS</t></si><si><t>Yang Wang</t></si><si><t>Switzerland</t></si><si><t>0452-076545</t></si><si><t>3012</t></si><si><t>COMMI</t></si><si><t>Pedro Afonso</t></si><si><t>Sales Associate</t></si><si><t>Brazil</t></si><si><t>(11) 555-7647</t></si><si><t>05432-043</t></si><si><t>CONSH</t></si><si><t>Elizabeth Brown</t></si><si><t>(171) 555-2282</t></si><si><t>(171) 555-9199</t></si><si><t>WX1 6LT</t></si><si><t>DRACD</t></si><si><t>Sven Ottlieb</t></si><si><t>0241-039123</t></si><si><t>0241-059428</t></si><si><t>52066</t></si><si><t>DUMON</t></si><si><t>Janine Labrune</t></si><si><t>40.67.88.88</t></si><si><t>40.67.89.89</t></si><si><t>44000</t></si><si><t>EASTC</t></si><si><t>Ann Devon</t></si><si><t>(171) 555-0297</t></si><si><t>(171) 555-3373</t></si><si><t>WX3 6FW</t></si><si><t>ERNSH</t></si><si><t>Roland Mendel</t></si><si><t>Sales Manager</t></si><si><t>Austria</t></si><si><t>7675-3425</t></si><si><t>7675-3426</t></si><si><t>8010</t></si><si><t>FAMIA</t></si><si><t>Aria Cruz</t></si><si><t>Marketing Assistant</t></si><si><t>(11) 555-9857</t></si><si><t>05442-030</t></si><si><t>FISSA</t></si><si><t>Diego Roel</t></si><si><t>(91) 555 94 44</t></si><si><t>(91) 555 55 93</t></si><si><t>28034</t></si><si><t>FOLIG</t></si><si><t>Martine Rancé</t></si><si><t>Assistant Sales Agent</t></si><si><t>20.16.10.16</t></si><si><t>20.16.10.17</t></si><si><t>59000</t></si><si><t>FOLKO</t></si><si><t>Maria Larsson</t></si><si><t>0695-34 67 21</t></si><si><t>S-844 67</t></si><si><t>FRANK</t></si><si><t>Peter Franken</t></si><si><t>089-0877310</t></si><si><t>089-0877451</t></si><si><t>80805</t></si><si><t>FRANR</t></si><si><t>Carine Schmitt</t></si><si><t>40.32.21.21</t></si><si><t>40.32.21.20</t></si><si><t>FRANS</t></si><si><t>Paolo Accorti</t></si><si><t>Italy</t></si><si><t>011-4988260</t></si><si><t>011-4988261</t></si><si><t>10100</t></si>`;

        this._worksheetData =
            `<dimension ref="A1:G28"/>
            <sheetViews><sheetView tabSelected="1" workbookViewId="0"></sheetView></sheetViews>
            <sheetFormatPr defaultRowHeight="15"  x14ac:dyDescent="0.25"/>
            <cols><col min="1" max="1" width="20.400000000000002" customWidth="1"/><col min="2" max="2" width="20.400000000000002" customWidth="1"/><col min="3" max="3" width="20.400000000000002" customWidth="1"/><col min="4" max="4" width="20.400000000000002" customWidth="1"/><col min="5" max="5" width="20.400000000000002" customWidth="1"/><col min="6" max="6" width="20.400000000000002" customWidth="1"/><col min="7" max="7" width="20.400000000000002" customWidth="1"/></cols>
            <sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="s"><v>1</v></c><c r="C1" t="s"><v>2</v></c><c r="D1" t="s"><v>3</v></c><c r="E1" t="s"><v>4</v></c><c r="F1" t="s"><v>5</v></c><c r="G1" t="s"><v>6</v></c></row><row r="2"><c r="A2" t="s"><v>7</v></c><c r="B2" t="s"><v>8</v></c><c r="C2" t="s"><v>9</v></c><c r="D2" t="s"><v>10</v></c><c r="E2" t="s"><v>11</v></c><c r="F2" t="s"><v>12</v></c><c r="G2" t="s"><v>13</v></c></row><row r="3"><c r="A3" t="s"><v>14</v></c><c r="B3" t="s"><v>15</v></c><c r="C3" t="s"><v>16</v></c><c r="D3" t="s"><v>17</v></c><c r="E3" t="s"><v>18</v></c><c r="F3" t="s"><v>19</v></c><c r="G3" t="s"><v>20</v></c></row><row r="4"><c r="A4" t="s"><v>21</v></c><c r="B4" t="s"><v>22</v></c><c r="C4" t="s"><v>16</v></c><c r="D4" t="s"><v>17</v></c><c r="E4" t="s"><v>23</v></c><c r="F4" s="1"/><c r="G4" t="s"><v>24</v></c></row><row r="5"><c r="A5" t="s"><v>25</v></c><c r="B5" t="s"><v>26</v></c><c r="C5" t="s"><v>9</v></c><c r="D5" t="s"><v>27</v></c><c r="E5" t="s"><v>28</v></c><c r="F5" t="s"><v>29</v></c><c r="G5" t="s"><v>30</v></c></row><row r="6"><c r="A6" t="s"><v>31</v></c><c r="B6" t="s"><v>32</v></c><c r="C6" t="s"><v>33</v></c><c r="D6" t="s"><v>34</v></c><c r="E6" t="s"><v>35</v></c><c r="F6" t="s"><v>36</v></c><c r="G6" t="s"><v>37</v></c></row><row r="7"><c r="A7" t="s"><v>38</v></c><c r="B7" t="s"><v>39</v></c><c r="C7" t="s"><v>9</v></c><c r="D7" t="s"><v>10</v></c><c r="E7" t="s"><v>40</v></c><c r="F7" t="s"><v>41</v></c><c r="G7" t="s"><v>42</v></c></row><row r="8"><c r="A8" t="s"><v>43</v></c><c r="B8" t="s"><v>44</v></c><c r="C8" t="s"><v>45</v></c><c r="D8" t="s"><v>46</v></c><c r="E8" t="s"><v>47</v></c><c r="F8" t="s"><v>48</v></c><c r="G8" t="s"><v>49</v></c></row><row r="9"><c r="A9" t="s"><v>50</v></c><c r="B9" t="s"><v>51</v></c><c r="C9" t="s"><v>16</v></c><c r="D9" t="s"><v>52</v></c><c r="E9" t="s"><v>53</v></c><c r="F9" t="s"><v>54</v></c><c r="G9" t="s"><v>55</v></c></row><row r="10"><c r="A10" t="s"><v>56</v></c><c r="B10" t="s"><v>57</v></c><c r="C10" t="s"><v>16</v></c><c r="D10" t="s"><v>46</v></c><c r="E10" t="s"><v>58</v></c><c r="F10" t="s"><v>59</v></c><c r="G10" t="s"><v>60</v></c></row><row r="11"><c r="A11" t="s"><v>61</v></c><c r="B11" t="s"><v>62</v></c><c r="C11" t="s"><v>63</v></c><c r="D11" t="s"><v>64</v></c><c r="E11" t="s"><v>65</v></c><c r="F11" t="s"><v>66</v></c><c r="G11" t="s"><v>67</v></c></row><row r="12"><c r="A12" t="s"><v>68</v></c><c r="B12" t="s"><v>69</v></c><c r="C12" t="s"><v>9</v></c><c r="D12" t="s"><v>27</v></c><c r="E12" t="s"><v>70</v></c><c r="F12" s="1"/><c r="G12" t="s"><v>71</v></c></row><row r="13"><c r="A13" t="s"><v>72</v></c><c r="B13" t="s"><v>73</v></c><c r="C13" t="s"><v>74</v></c><c r="D13" t="s"><v>75</v></c><c r="E13" t="s"><v>76</v></c><c r="F13" t="s"><v>77</v></c><c r="G13" t="s"><v>78</v></c></row><row r="14"><c r="A14" t="s"><v>79</v></c><c r="B14" t="s"><v>80</v></c><c r="C14" t="s"><v>45</v></c><c r="D14" t="s"><v>17</v></c><c r="E14" t="s"><v>81</v></c><c r="F14" t="s"><v>82</v></c><c r="G14" t="s"><v>83</v></c></row><row r="15"><c r="A15" t="s"><v>84</v></c><c r="B15" t="s"><v>85</v></c><c r="C15" t="s"><v>16</v></c><c r="D15" t="s"><v>86</v></c><c r="E15" t="s"><v>87</v></c><c r="F15" s="1"/><c r="G15" t="s"><v>88</v></c></row><row r="16"><c r="A16" t="s"><v>89</v></c><c r="B16" t="s"><v>90</v></c><c r="C16" t="s"><v>91</v></c><c r="D16" t="s"><v>92</v></c><c r="E16" t="s"><v>93</v></c><c r="F16" s="1"/><c r="G16" t="s"><v>94</v></c></row><row r="17"><c r="A17" t="s"><v>95</v></c><c r="B17" t="s"><v>96</v></c><c r="C17" t="s"><v>9</v></c><c r="D17" t="s"><v>27</v></c><c r="E17" t="s"><v>97</v></c><c r="F17" t="s"><v>98</v></c><c r="G17" t="s"><v>99</v></c></row><row r="18"><c r="A18" t="s"><v>100</v></c><c r="B18" t="s"><v>101</v></c><c r="C18" t="s"><v>33</v></c><c r="D18" t="s"><v>10</v></c><c r="E18" t="s"><v>102</v></c><c r="F18" t="s"><v>103</v></c><c r="G18" t="s"><v>104</v></c></row><row r="19"><c r="A19" t="s"><v>105</v></c><c r="B19" t="s"><v>106</v></c><c r="C19" t="s"><v>16</v></c><c r="D19" t="s"><v>46</v></c><c r="E19" t="s"><v>107</v></c><c r="F19" t="s"><v>108</v></c><c r="G19" t="s"><v>109</v></c></row><row r="20"><c r="A20" t="s"><v>110</v></c><c r="B20" t="s"><v>111</v></c><c r="C20" t="s"><v>74</v></c><c r="D20" t="s"><v>27</v></c><c r="E20" t="s"><v>112</v></c><c r="F20" t="s"><v>113</v></c><c r="G20" t="s"><v>114</v></c></row><row r="21"><c r="A21" t="s"><v>115</v></c><c r="B21" t="s"><v>116</v></c><c r="C21" t="s"><v>117</v></c><c r="D21" t="s"><v>118</v></c><c r="E21" t="s"><v>119</v></c><c r="F21" t="s"><v>120</v></c><c r="G21" t="s"><v>121</v></c></row><row r="22"><c r="A22" t="s"><v>122</v></c><c r="B22" t="s"><v>123</v></c><c r="C22" t="s"><v>124</v></c><c r="D22" t="s"><v>92</v></c><c r="E22" t="s"><v>125</v></c><c r="F22" s="1"/><c r="G22" t="s"><v>126</v></c></row><row r="23"><c r="A23" t="s"><v>127</v></c><c r="B23" t="s"><v>128</v></c><c r="C23" t="s"><v>63</v></c><c r="D23" t="s"><v>52</v></c><c r="E23" t="s"><v>129</v></c><c r="F23" t="s"><v>130</v></c><c r="G23" t="s"><v>131</v></c></row><row r="24"><c r="A24" t="s"><v>132</v></c><c r="B24" t="s"><v>133</v></c><c r="C24" t="s"><v>134</v></c><c r="D24" t="s"><v>46</v></c><c r="E24" t="s"><v>135</v></c><c r="F24" t="s"><v>136</v></c><c r="G24" t="s"><v>137</v></c></row><row r="25"><c r="A25" t="s"><v>138</v></c><c r="B25" t="s"><v>139</v></c><c r="C25" t="s"><v>16</v></c><c r="D25" t="s"><v>34</v></c><c r="E25" t="s"><v>140</v></c><c r="F25" s="1"/><c r="G25" t="s"><v>141</v></c></row><row r="26"><c r="A26" t="s"><v>142</v></c><c r="B26" t="s"><v>143</v></c><c r="C26" t="s"><v>45</v></c><c r="D26" t="s"><v>10</v></c><c r="E26" t="s"><v>144</v></c><c r="F26" t="s"><v>145</v></c><c r="G26" t="s"><v>146</v></c></row><row r="27"><c r="A27" t="s"><v>147</v></c><c r="B27" t="s"><v>148</v></c><c r="C27" t="s"><v>45</v></c><c r="D27" t="s"><v>46</v></c><c r="E27" t="s"><v>149</v></c><c r="F27" t="s"><v>150</v></c><c r="G27" t="s"><v>109</v></c></row><row r="28"><c r="A28" t="s"><v>151</v></c><c r="B28" t="s"><v>152</v></c><c r="C28" t="s"><v>9</v></c><c r="D28" t="s"><v>153</v></c><c r="E28" t="s"><v>154</v></c><c r="F28" t="s"><v>155</v></c><c r="G28" t="s"><v>156</v></c></row></sheetData>`;

        this._tableData =
            `ref="A1:G28" totalsRowShown="0">
            <autoFilter ref="A1:G28"/><tableColumns count="7"><tableColumn id="1" name="ID"/><tableColumn id="2" name="ContactName"/><tableColumn id="3" name="ContactTitle"/><tableColumn id="4" name="Country"/><tableColumn id="5" name="Phone"/><tableColumn id="6" name="Fax"/><tableColumn id="7" name="PostalCode"/></tableColumns>`;

        return this.createData();
    }
}
