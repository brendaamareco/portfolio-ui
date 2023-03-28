import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Profile, Owner } from 'src/app/models/profile.interface';
import { ProfileService } from 'src/app/services/profile.service';
import { AboutEditDialogComponent } from './about-edit-dialog/about-edit-dialog.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  profile: Profile | undefined;
  owner: Owner | undefined;
  
  constructor(private profileService: ProfileService, public dialog: MatDialog){}

  ngOnInit(): void {
    this.profileService.getProfile(1).subscribe(
      profile => { this.profile = profile;
                    this.owner = profile.owner }
    )
  }

  openEditDialog() 
  {
    this.dialog.open(AboutEditDialogComponent, { data: this.profile })
  }

}
