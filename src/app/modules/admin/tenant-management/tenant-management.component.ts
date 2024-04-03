import {Component, Injector, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BaseComponent} from "../../../core/base.component";
import {CreateOrUpdateTenantComponent} from "./create-or-update-tenant/create-or-update-tenant.component";

@Component({
    selector: 'app-tenant-management',
    templateUrl: './tenant-management.component.html',
    styleUrls: ['./tenant-management.component.scss']
})
export class TenantManagementComponent extends BaseComponent implements OnInit {
    filterDataSource = [
        {
            title: "Tenant name",
            field: "tenantName",
            type: "text",
        },
        {
            title: "Customer",
            field: "customer",
            type: "rangePicker",
        },
        {
            title: "Contracts no.",
            field: "contractNo",
            type: "select",
            data: [
                {
                    label: "data 1",
                    value: 'data1'
                },
                {
                    label: "data 2",
                    value: 'data2'
                },
                {
                    label: "data 3",
                    value: 'data3'
                },
                {
                    label: "data 4",
                    value: 'data4'
                }
            ]
        },
    ]
    filter: any = [];

    listTenant: any = [
        {
            name: "VSDS",
            contractNo: "0001",
            cpu: 1,
            ram: 128,
            storage: 267,
            maxUser: 111,
            fe: "1.1.1.1",
            be: "1.2.2.3",
            status: 1
        },
        {
            name: "VSDS",
            contractNo: "0001",
            cpu: 1,
            ram: 128,
            storage: 267,
            maxUser: 111,
            fe: "1.1.1.1",
            be: "1.2.2.3",
            status: 0
        },
        {
            name: "VSDS",
            contractNo: "0001",
            cpu: 1,
            ram: 128,
            storage: 267,
            maxUser: 111,
            fe: "1.1.1.1",
            be: "1.2.2.3",
            status: 1
        },
        {
            name: "VSDS",
            contractNo: "0001",
            cpu: 1,
            ram: 128,
            storage: 267,
            maxUser: 111,
            fe: "1.1.1.1",
            be: "1.2.2.3",
            status: 1
        },
        {
            name: "VSDS",
            contractNo: "0001",
            cpu: 1,
            ram: 128,
            storage: 267,
            maxUser: 111,
            fe: "1.1.1.1",
            be: "1.2.2.3",
            status: 1
        },
        {
            name: "VSDS",
            contractNo: "0001",
            cpu: 1,
            ram: 128,
            storage: 267,
            maxUser: 111,
            fe: "1.1.1.1",
            be: "1.2.2.3",
            status: 1
        },
        {
            name: "VSDS",
            contractNo: "0001",
            cpu: 1,
            ram: 128,
            storage: 267,
            maxUser: 111,
            fe: "1.1.1.1",
            be: "1.2.2.3",
            status: 1
        },
        {
            name: "VSDS",
            contractNo: "0001",
            cpu: 1,
            ram: 128,
            storage: 267,
            maxUser: 111,
            fe: "1.1.1.1",
            be: "1.2.2.3",
            status: 1
        },
        {
            name: "VSDS",
            contractNo: "0001",
            cpu: 1,
            ram: 128,
            storage: 267,
            maxUser: 111,
            fe: "1.1.1.1",
            be: "1.2.2.3",
            status: 1
        },
        {
            name: "VSDS",
            contractNo: "0001",
            cpu: 1,
            ram: 128,
            storage: 267,
            maxUser: 111,
            fe: "1.1.1.1",
            be: "1.2.2.3",
            status: 1
        }
    ]

    tableHeader: any = [
        {
            header: "No.",
            columnDef: 'stt',
            flex: 0.3
        },
        {
            header: "Name",
            columnDef: 'name',
            flex: 1,
            sort: true
        },
        {
            header: "Contracts no.",
            columnDef: 'contractNo',
            flex: 1,
            sort: true
        },
        {
            header: "CPU (Core)",
            columnDef: 'cpu',
            flex: 1,
            sort: true
        },
        {
            header: "RAM (GB)",
            columnDef: 'ram',
            flex: 1,
            sort: true
        },
        {
            header: "Storage (GB)",
            columnDef: 'storage',
            flex: 1,
            sort: true
        },
        {
            header: "Max User",
            columnDef: 'maxUser',
            flex: 1,
            sort: true
        },
        {
            header: "FE",
            columnDef: 'fe',
            flex: 1,
            sort: true
        },
        {
            header: "BE",
            columnDef: 'be',
            flex: 1,
            sort: true
        },
        {
            header: "Status",
            columnDef: 'status',
            flex: 1,
            sort: true,
        },
        {
            header: "Action",
            columnDef: 'action',
            flex: 1,

        },
    ]

    paginate: any = {
        page: 0,
        size: 0,
        pageSize: 10
    }
    sort: any = {
        sortBy: "",
        orderBy: ""
    };

    constructor(injector: Injector) {
        super(injector);
    }

    ngOnInit(): void {
    }

    handleFilter(e: any) {
        console.log(e);
    }

    onPageChange(e: any) {
        console.log(e)
    }

    onSortChange(e: any) {
        console.log(e)
    }


    getRowIndex(row: any) {
        const number = (this.paginate.page) * this.paginate.pageSize;
        return number + this.listTenant.indexOf(row);
    }

    openCreatePopup() {
        this.showDialog(CreateOrUpdateTenantComponent, {
            width: "50vw",
            disableClose: true
        });
    }
}
