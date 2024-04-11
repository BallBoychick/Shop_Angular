import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { BookComponent } from './book.component';
import { InmemoryTestData } from './inmemory-test-data';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
  {path: '' , redirectTo:'/login',pathMatch:'full'},
    {path: '', component: MainLayoutComponent, children: [
      {path: 'main', component: MainPageComponent},
      {path: 'cart', component: CartPageComponent},
      {path: 'product/:id', component: ProductComponent}
    ]},
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegisterPageComponent},
    {path: 'books', component: BookComponent},
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes), HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService,
    { dataEncapsulation: false }
), 
HttpClientInMemoryWebApiModule.forRoot(
  InmemoryTestData,
  { dataEncapsulation: false }
), MainPageComponent],
})
export class AppRoutingModule {}
