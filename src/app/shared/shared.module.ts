import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HasAnyAuthorityDirective} from "./directives/has-any-authority.directive";
import {NgDynamicBreadcrumbModule} from "ng-dynamic-breadcrumb";
import {BreadcrumbComponent} from "../layout/common/breadcrumb/breadcrumb.component";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {TranslocoModule} from "@ngneat/transloco";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {MatRadioModule} from "@angular/material/radio";
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import {PageHeaderComponent} from "../layout/common/page-header/page-header.component";
import {FilterComponent} from "../layout/common/filter/filter.component";
import {FilterDialogComponent} from "../layout/common/filter/filter-dialog/filter-dialog.component";
import {MatMenuModule} from "@angular/material/menu";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSortModule} from "@angular/material/sort";
import {MatBadgeModule} from "@angular/material/badge";
export const MatModules = [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    TranslocoModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatRadioModule,
    MatSortModule
]

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        ...MatModules,
        MatMenuModule,
        MatDatepickerModule,
        MatBadgeModule
    ],
    declarations: [
        HasAnyAuthorityDirective,
        BreadcrumbComponent,
        ConfirmDialogComponent,
        PageHeaderComponent,
        FilterComponent,
        FilterDialogComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HasAnyAuthorityDirective,
        BreadcrumbComponent,
        PageHeaderComponent,
        FilterComponent,
        FilterDialogComponent,
        ...MatModules
    ]
})
export class SharedModule {
}
