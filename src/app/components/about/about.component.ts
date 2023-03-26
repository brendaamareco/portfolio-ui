import { Component, OnInit } from '@angular/core';
import { Profile, Owner } from 'src/app/models/profile.interface';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  profile: Profile | undefined;
  owner: Owner | undefined;
  
  constructor(private profileService: ProfileService){}

  ngOnInit(): void {
    this.profileService.getProfile(1).subscribe(
      profile => { this.profile = profile;
                    this.owner = profile.owner }
    )
  }

}
