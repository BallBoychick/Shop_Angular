import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HttpClientModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

  loggedUser: any;
  constructor(private router: Router) {
    if (typeof localStorage !== 'undefined') {
    const localUser = localStorage.getItem('loggedUser');
    if(localUser != null) {
      this.loggedUser = JSON.parse(localUser)
    }
  }
  }

  onLogoff() {
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('login');
  }

}
