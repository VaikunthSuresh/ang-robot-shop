// Main Component file

import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteHeaderComponent } from "./site-header/site-header.component";
import { HomeComponent } from "./home/home.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { HttpClientModule} from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './user/sign-in/sign-in.component';


@Component({
  selector: 'app-root',
  standalone: true,
  // You can add the component specific imports here
  imports: [RouterOutlet, 
            SiteHeaderComponent, 
            HomeComponent, 
            CatalogComponent, 
            HttpClientModule,
            CartComponent,
            SignInComponent
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'ang-robot-shop';
}
