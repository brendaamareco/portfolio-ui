import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogInfoComponent } from 'src/app/components/dialog-info/dialog-info.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit
{
  userForm: FormGroup = new FormGroup({});
  loggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router, private dialog: MatDialog) 
  {
    this.userForm = new FormGroup(
    {
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }

  ngOnInit(): void 
  { if (this.authService.loggedIn) {this.reloadPage();} }

  login(): void
  { 
    this.authService
    .login(this.username.value, this.password.value)
    .subscribe(
      {
        next: (logged) => 
        {
          if (logged) {this.handleSuccessfulLogin();}
          else {this.handleUnsuccessfulLogin();}
        },
        error: (error) => { this.handleLoginError(error); }
      }
    );
  }

  reloadPage(): void
  { this.router.navigateByUrl('/').then(() => window.location.reload()); }

  handleSuccessfulLogin(): void
  { this.reloadPage(); }

  handleUnsuccessfulLogin(): void
  { this.displayDialog("Los datos ingresados no corresponden a ningún usuario"); }

  handleLoginError(error: any): void
  { this.displayDialog(`Ha ocurrido un error ${error}`); }

  displayDialog(message: any)
  {
    this.dialog.open(DialogInfoComponent, 
      { data: message });
  }

  get username(): FormControl
  { return this.userForm.get('username') as FormControl }

  get password(): FormControl
  { return this.userForm.get('password') as FormControl }
}
