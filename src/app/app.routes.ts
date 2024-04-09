import { Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { MainPageComponent } from './main-page/main-page.component';

export const routes: Routes = [
    {path: '', component: MainLayoutComponent},
    {path: 'cart', component: CartPageComponent} 
];
