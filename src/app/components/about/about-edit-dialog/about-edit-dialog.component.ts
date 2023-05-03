import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Owner } from 'src/app/models/owner.interface';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-about-edit-dialog',
  templateUrl: './about-edit-dialog.component.html',
  styleUrls: ['./about-edit-dialog.component.scss']
})
export class AboutEditDialogComponent 
{
  aboutForm: FormGroup = new FormGroup({});
  loading: boolean = false;

  constructor(public dialogRef: MatDialogRef<AboutEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public owner: Owner, private ownerService: OwnerService) 
    {
      this.aboutForm = new FormGroup(
      {
        description: new FormControl(owner.description, [Validators.maxLength(1024)]),
        country: new FormControl(owner.country, [Validators.required, Validators.maxLength(45)]),
        province: new FormControl(owner.province, [Validators.required, Validators.maxLength(45)])
      });
    }

    submitAbout() 
    {
      this.loading = true;

      const ownerToUpdate =
      {
        id: this.owner.id,
        name: this.owner.name,
        lastName: this.owner.lastName,
        thumbnail: this.owner.thumbnail,
        role: this.owner.role,
        welcomeText: this.owner.welcomeText,
        country: this.country?.value,
        province: this.province?.value,
        description: this.description?.value,
      }

      this.ownerService
      .update(ownerToUpdate)
      .subscribe(() => 
      {
        this.loading = false;
        this.dialogRef.close(); 
      });
    }
  
    get country(): FormControl
    { return this.aboutForm.get('country') as FormControl; }

    get province(): FormControl
    { return this.aboutForm.get('province') as FormControl; }

    get description(): FormControl
    { return this.aboutForm.get('description') as FormControl; }
}
