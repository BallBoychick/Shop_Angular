import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RegisterPageComponent } from './register-page/register-page.component';

export const routes: Routes = [
    {path: '', component: MainLayoutComponent, children: [
      {path: '', component: MainPageComponent},
      {path: 'cart', component: CartPageComponent}
    ]},
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegisterPageComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
