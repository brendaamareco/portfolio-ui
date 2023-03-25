import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile.interface';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  profile: Profile | undefined;

  constructor(private profileService: ProfileService){}

  ngOnInit(): void {
    this.profileService.getProfile(1)?.subscribe( profile => this.profile = profile);
  }


}
