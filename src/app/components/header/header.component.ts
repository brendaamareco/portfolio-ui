import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile.interface';
import { ProfileService } from 'src/app/services/profile.service';
import { MatDialog } from '@angular/material/dialog';
import { HeaderEditDialogComponent } from './header-edit-dialog/header-edit-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  profile: Profile | undefined;

  constructor(private profileService: ProfileService, public dialog: MatDialog) {}

  ngOnInit(): void 
  {
    this.loadProfile();
  }

  openEditDialog(): void 
  {
    this.dialog.open(HeaderEditDialogComponent, {
      data: this.profile,
    });
  }

  loadProfile(): void
  {
    this.profileService
      .getProfile(1)
      ?.subscribe((profile) => (this.profile = profile));
  }
}