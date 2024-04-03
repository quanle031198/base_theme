import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantManagementRoutingModule } from './tenant-management-routing.module';
import { TenantManagementComponent } from './tenant-management.component';
import {SharedModule} from "../../../shared/shared.module";
import {DataTableModule} from "../../../layout/common/data-table/data-table.module";
import {MatMenuModule} from "@angular/material/menu";
import { CreateOrUpdateTenantComponent } from './create-or-update-tenant/create-or-update-tenant.component';


@NgModule({
  declarations: [
    TenantManagementComponent,
    CreateOrUpdateTenantComponent
  ],
    imports: [
        CommonModule,
        TenantManagementRoutingModule,
        SharedModule,
        DataTableModule,
        MatMenuModule
    ]
})
export class TenantManagementModule { }
