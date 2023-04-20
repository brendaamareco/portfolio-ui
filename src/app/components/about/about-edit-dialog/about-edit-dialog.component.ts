import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(public dialogRef: MatDialogRef<AboutEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public owner: Owner, private formBuilder: FormBuilder, private ownerService: OwnerService) 
    {
      this.aboutForm = this.formBuilder.group(
      {
        description: [owner.description, Validators.maxLength(1024)],
        country: [owner.country, Validators.compose([Validators.required, Validators.maxLength(45)])],
        province: [owner.province, Validators.compose([Validators.required, Validators.maxLength(45)])]
      });
    }

    submitAbout() 
    {
      this.owner.description = this.description?.value;
      this.owner.country = this.country?.value;
      this.owner.province = this.province?.value;

      this.ownerService
      .update(this.owner)
      .subscribe(() => {});

      this.dialogRef.close();
    }
  
    get country(): FormControl
    { return this.aboutForm.get('country') as FormControl; }

    get province(): FormControl
    { return this.aboutForm.get('province') as FormControl; }

    get description(): FormControl
    { return this.aboutForm.get('description') as FormControl; }
}
