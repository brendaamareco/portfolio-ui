import { Component, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-header-edit-dialog',
  templateUrl: './header-edit-dialog.component.html',
  styleUrls: ['./header-edit-dialog.component.scss']
})
export class HeaderEditDialogComponent 
{

  profileForm: FormGroup = new FormGroup({});

  constructor( public dialogRef: MatDialogRef<HeaderEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public profile: Profile, private formBuilder: FormBuilder, private profileService: ProfileService) 
  {
    this.profileForm = this.formBuilder.group(
      {
        thumbnail: [profile.thumbnail],
        welcomeText: [profile.welcomeText],
        role: [profile.role, Validators.required]
      }
    )
  }

  submitProfile(): void
  {
    this.profile.thumbnail = this.profileForm.get("thumbnail")?.value;
    this.profile.welcomeText = this.profileForm.get("welcomeText")?.value;
    this.profile.role = this.profileForm.get("role")?.value;

    this.profileService.updateProfile(this.profile).subscribe( response => {});
    this.dialogRef.close();
  }

  get role()
  {
    return this.profileForm.get("role");
  }
}
