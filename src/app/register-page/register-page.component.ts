import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators, NgModel } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {
  constructor(private router: Router) {}
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  signUpobj: SignUpModel = new SignUpModel();

  get f(){
    return this.form.controls;
  }

  submit(){
    const localUser = localStorage.getItem('angular17users');
    if (localUser != null) {
      const users = JSON.parse(localUser);
      users.push(this.form.value);
      localStorage.setItem('angular17users', JSON.stringify(users));
    }
    else {
      const users = [];
      users.push(this.form.value);
      localStorage.setItem('angular17users', JSON.stringify(users));
    }
    this.router.navigateByUrl('login');
  }

}
export class SignUpModel {
  name: string;
  email: string;

  constructor() {
    this.name = "";
    this.email = "";
  }
}
