import {
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges, TemplateRef,
    ViewChild
} from '@angular/core';
import {MatTable, MatTableDataSource} from "@angular/material/table";

@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, OnChanges {
    @Input() rows: any = [];
    @Input() rowTemplate: TemplateRef<any>;
    @Input() columns: any = [];
    @Input() sort: any = {};
    @Output() sortChange: EventEmitter<any> = new EventEmitter<any>();
    @Input() limit: any = 10;
    @Input() count: any = 0;
    @Input() paginate: boolean = true;
    @Output() pageChange = new EventEmitter<any>();

    get displayedColumns() {
        return this.columns.map(c => c.columnDef);
    }

    constructor(private cdk: ChangeDetectorRef) {
    }

    ngOnInit(): void {
    }
    ngOnChanges(changes: SimpleChanges) {
        // this.getListActions()
    }

    changePage(e: any) {
        this.pageChange.emit(e);
    }

    calcColumnWidth(column: any) {
        const totalFlex = this.columns?.reduce((total, col) => (col.flex ?? 1) + total, 0);
        return (column.flex ?? 1) / totalFlex + '%';
    }


    getRowIndex(row: any) {
        return this.rows.indexOf(row);
    }

    handleChangeSort(column) {
        let orderBy = "ASC";
        if (column.columnDef === this.sort.sortBy) {
            if (this.sort.orderBy === "ASC") {
                orderBy = "DESC";
            } else if (this.sort.orderBy === "DESC") {
                orderBy = "";
            }
        }
        const result = {
            sortBy: column.columnDef,
            orderBy: orderBy,
        }
        this.sortChange.emit(result);
    }
}
