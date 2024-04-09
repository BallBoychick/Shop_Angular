import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

import { SignUpModel } from '../register-page/register-page.component';
@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  constructor(private router: Router) {}
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email])
  });
  loginObj: LoginModel = new LoginModel();
  get f(){
    return this.form.controls;
  }

  submit(){
    const localUser = localStorage.getItem('angular17users');
    if (localUser != null) {
      const users = JSON.parse(localUser);

      console.log(users)

      const lol = users.find((user:SignUpModel) => console.log(this.loginObj.name));

      const isUserPresent = users.find((user:SignUpModel) => user.email == this.loginObj.email && user.name == this.loginObj.name)

      if(isUserPresent !=undefined) {
        alert("User Found")
        localStorage.setItem('loggedUser', JSON.stringify(isUserPresent));
        this.router.navigateByUrl('/');
      } else {
        alert("NO Found")
      }
    }
  }
}

export class LoginModel {
  name: string;
  email: string;

  constructor() {
    this.name = "";
    this.email = "";
  }
}
