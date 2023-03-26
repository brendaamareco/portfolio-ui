import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/models/profile.interface';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  owner: Owner | undefined;
  
  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this
    .profileService.getProfile(1)
    .subscribe( profile => { this.owner = profile.owner; });
  }

}
