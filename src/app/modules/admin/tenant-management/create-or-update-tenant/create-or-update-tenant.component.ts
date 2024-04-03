import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-create-or-update-tenant',
  templateUrl: './create-or-update-tenant.component.html',
  styleUrls: ['./create-or-update-tenant.component.scss']
})
export class CreateOrUpdateTenantComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateOrUpdateTenantComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

}
