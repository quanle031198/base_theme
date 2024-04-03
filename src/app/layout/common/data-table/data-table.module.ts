import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataTableComponent} from './data-table.component';
import {MatTableModule} from "@angular/material/table";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
    declarations: [
        DataTableComponent
    ],
    exports: [
        DataTableComponent
    ],
    imports: [
        CommonModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatPaginatorModule
    ]
})
export class DataTableModule {
}
