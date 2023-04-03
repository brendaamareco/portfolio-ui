import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
        description: [owner.description],
        country: [owner.country, Validators.required],
        province: [owner.province, Validators.required]
      });
    }

    submitAbout() 
    {
      this.owner.description = this.aboutForm.get('description')?.value;
      this.owner.country = this.aboutForm.get('country')?.value;
      this.owner.province = this.aboutForm.get('province')?.value;

      this.ownerService.update(this.owner).subscribe(response => {});
      this.dialogRef.close();
    }
  
    get country()
    {
      return this.aboutForm.get('country');
    }

    get province()
    {
      return this.aboutForm.get('province');
    }
}
