import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-info',
  templateUrl: './dialog-info.component.html',
  styleUrls: ['./dialog-info.component.scss']
})
export class DialogInfoComponent 
{
  constructor(private dialogRef: MatDialogRef<DialogInfoComponent>, @Inject(MAT_DIALOG_DATA) public message: string) {}
}
