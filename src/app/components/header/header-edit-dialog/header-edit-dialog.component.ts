import { Component, Inject } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Owner } from 'src/app/models/owner.interface';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-header-edit-dialog',
  templateUrl: './header-edit-dialog.component.html',
  styleUrls: ['./header-edit-dialog.component.scss']
})
export class HeaderEditDialogComponent 
{
  ownerForm: FormGroup = new FormGroup({});

  constructor( public dialogRef: MatDialogRef<HeaderEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public owner: Owner, private formBuilder: FormBuilder, private ownerService: OwnerService) 
  {
    this.ownerForm = this.formBuilder.group(
      {
        thumbnail: [owner.thumbnail, Validators.maxLength(2048)],
        welcomeText: [owner.welcomeText, Validators.maxLength(1024)],
        role: [owner.role, Validators.compose([Validators.required, Validators.maxLength(45)])]
      }
    )
  }

  get thumbnail(): FormControl
  {
    return this.ownerForm.get("thumbnail") as FormControl;
  }

  get welcomeText(): FormControl
  {
    return this.ownerForm.get("welcomeText") as FormControl;
  }

  get role(): FormControl
  {
    return this.ownerForm.get("role") as FormControl;
  }

  submit(): void
  {
    this.owner.thumbnail = this.thumbnail?.value;
    this.owner.welcomeText = this.welcomeText?.value;
    this.owner.role = this.role?.value;

    this.ownerService
    .update(this.owner)
    .subscribe( response => {});
    this.dialogRef.close();
  }
}
