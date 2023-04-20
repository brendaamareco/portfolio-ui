import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Owner } from 'src/app/models/owner.interface';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  owner: Owner | undefined;
  
  constructor(private ownerService: OwnerService, private router: Router) {}

  ngOnInit(): void {
    this
    .ownerService.getAll()
    .subscribe( owners => { this.owner = owners[0]; });
  }

  goToLogin(): void 
  {
    this.router.navigateByUrl('/login');
  }
}
