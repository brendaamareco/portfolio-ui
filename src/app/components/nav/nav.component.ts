import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/models/owner.interface';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  owner: Owner | undefined;
  
  constructor(private ownerService: OwnerService) {}

  ngOnInit(): void {
    this
    .ownerService.get()
    .subscribe( owners => { this.owner = owners[0]; });
  }

}
