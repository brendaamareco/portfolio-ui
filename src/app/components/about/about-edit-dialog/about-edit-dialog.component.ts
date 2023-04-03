import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Profile } from 'src/app/models/profile.interface';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-about-edit-dialog',
  templateUrl: './about-edit-dialog.component.html',
  styleUrls: ['./about-edit-dialog.component.scss']
})
export class AboutEditDialogComponent 
{
  aboutForm: FormGroup = new FormGroup({});

  constructor(public dialogRef: MatDialogRef<AboutEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public profile: Profile, private formBuilder: FormBuilder, private profileService: ProfileService) 
    {
      this.aboutForm = this.formBuilder.group(
      {
        description: [profile.description],
        country: [profile.owner.country, Validators.required],
        province: [profile.owner.province, Validators.required]
      });
    }

    submitAbout() 
    {
      this.profile.description = this.aboutForm.get('description')?.value;
      this.profile.owner.country = this.aboutForm.get('country')?.value;
      this.profile.owner.province = this.aboutForm.get('province')?.value;

      this.profileService.updateProfile(this.profile).subscribe(response => {});
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
