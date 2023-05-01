import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private authService: AuthService, private router: Router) 
  {
    this.userForm = new FormGroup(
    {
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }

  ngOnInit(): void 
  {
    if (this.authService.loggedIn)
    {
      this.router.navigateByUrl('/')
      .then(() => { window.location.reload(); });
    }
  }

  login(): void
  { this.authService.login(this.username.value, this.password.value) }

  get username(): FormControl
  { return this.userForm.get('username') as FormControl }

  get password(): FormControl
  { return this.userForm.get('password') as FormControl }
}
