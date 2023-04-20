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
    @Inject(MAT_DIALOG_DATA) public owner: Owner, private ownerService: OwnerService) 
  {
    this.ownerForm = new FormGroup(
      {
        thumbnail: new FormControl(owner.thumbnail, [Validators.maxLength(2048)]),
        welcomeText: new FormControl(owner.welcomeText, [Validators.maxLength(1024)]),
        role: new FormControl(owner.role, [Validators.required, Validators.maxLength(45)])
      }
    )
  }

  get thumbnail(): FormControl
  { return this.ownerForm.get("thumbnail") as FormControl; }

  get welcomeText(): FormControl
  { return this.ownerForm.get("welcomeText") as FormControl; }

  get role(): FormControl
  { return this.ownerForm.get("role") as FormControl; }

  submit(): void
  {
    const ownerToUpdate =
    {
      id: this.owner.id,
      name: this.owner.name,
      lastName: this.owner.lastName,
      country: this.owner.country,
      province: this.owner.province,
      description: this.owner.description,
      thumbnail: this.thumbnail?.value,
      role: this.role?.value,
      welcomeText: this.welcomeText?.value
    }

    this.ownerService
    .update(this.owner)
    .subscribe( () => {});
    this.dialogRef.close();
  }
}
