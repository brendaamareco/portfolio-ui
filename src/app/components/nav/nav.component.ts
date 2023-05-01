import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Owner } from 'src/app/models/owner.interface';
import { AuthService } from 'src/app/services/auth.service';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit 
{
  owner: Owner | undefined;
  loggedIn: boolean = false;
  
  constructor(private ownerService: OwnerService, private router: Router, private authService: AuthService) {}

  ngOnInit(): void 
  {
    this
    .ownerService.getAll()
    .subscribe( owners => { this.owner = owners[0]; });

    this.loggedIn = this.authService.loggedIn;
  }

  goToLogin(): void 
  { this.router.navigateByUrl('/login'); }

  logOut(): void
  { 
    this.authService.logOut(); 
    this.router.navigateByUrl('/')
    .then(() => 
    { window.location.reload(); });
  }
}
