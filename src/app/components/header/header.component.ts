import { Component, Inject, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile.interface';
import { ProfileService } from 'src/app/services/profile.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  profile: Profile | undefined;

  constructor(private profileService: ProfileService, public dialog: MatDialog){}

  ngOnInit(): void 
  {
    this.profileService.getProfile(1)?.subscribe( profile => this.profile = profile);
  }

  openEditDialog(): void 
  {
    let matDialogConfig = this.dialog
    .open(HeaderEditDialogComponent, { data: this.profile });
  }
}

@Component({
  selector: 'app-header-edit-dialog',
  templateUrl: 'header-edit-dialog.html',
})
export class HeaderEditDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public profile: Profile | undefined) {}
}

