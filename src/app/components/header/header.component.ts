import { Component, Inject, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile.interface';
import { ProfileService } from 'src/app/services/profile.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  profile: Profile | undefined;

  constructor(
    private profileService: ProfileService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.profileService
      .getProfile(1)
      ?.subscribe((profile) => (this.profile = profile));
  }

  openEditDialog(): void {
    let matDialogConfig = this.dialog.open(HeaderEditDialogComponent, {
      data: this.profile,
    });

    matDialogConfig.afterClosed().subscribe((result) => {
      console.log(this.profile);
      console.log(result);
    });
  }
}

@Component({
  selector: 'app-header-edit-dialog',
  templateUrl: 'header-edit-dialog.html',
})
export class HeaderEditDialogComponent {
  profileForm: FormGroup = new FormGroup({});

  constructor( public dialogRef: MatDialogRef<HeaderEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public profile: Profile, private formBuilder: FormBuilder
  ) 
  {
    this.profileForm = this.formBuilder.group(
      {
        thumbnail: [profile.thumbnail],
        welcomeText: [profile.welcomeText],
        role: [profile.role, Validators.required]
      }
    )
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submitProfile(): void
  {
    alert("Perfil editado " + this.profileForm.controls);

  }
}
