import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CatalogComponent } from './catalog/catalog.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Robo-HomePage' },
  { path: 'cart', component: CartComponent, title: 'Robo-Cart' },
  { path: 'catalog', component: CatalogComponent, title: 'Robo-Catalog' },
  { path: 'signin', component: SignInComponent, title: 'Robo-Signin'},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
