import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TenantManagementComponent} from "./tenant-management.component";

const routes: Routes = [
    {
        path: '',
        component: TenantManagementComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantManagementRoutingModule { }
