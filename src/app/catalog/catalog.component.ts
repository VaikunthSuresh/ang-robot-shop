// This is the main catalog component where all the products will be available

import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { CurrencyPipe, NgClass, NgForOf, NgIf, NgStyle, NgSwitch } from '@angular/common';
import { ProductDetailsComponent } from "../product-details/product-details.component";
import { CartService } from "../cart/cart.service"
import { ProductsService } from './products.service';
import { CartComponent } from '../cart/cart.component';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';

@Component({
  selector: 'bot-catalog',
  standalone: true,
  imports: [NgForOf, NgIf, CurrencyPipe, NgClass, NgStyle, ProductDetailsComponent, RouterLink, RouterLinkActive],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  products : any;
  filter: string = '';

  // Injecting a service into a component
  constructor(private cartSvc: CartService, 
              private productSvc: ProductsService,
              private router: Router,
              private route: ActivatedRoute
          ){
   
  }
  // This lifecycle event will get triggered automatically when a component is initialized
  ngOnInit(){
    this.productSvc.getProducts().subscribe(
      products => {
        this.products = products;
      }
    );
    //  this.filter = this.route.snapshot.params['filter'];
    this.route.queryParams.subscribe((params) => {
      this.filter = params['filter'] ?? '';
    });
  }
  //will filter the products based on the catalog ex:( head, body)
  getFilteredProducts(){
    return this.filter==='' 
    ? this.products
    : this.products.filter((product: IProduct)=> product.category === this.filter);
    
  }

  //add the product to the cart
  addToCart(product: IProduct){
    this.cartSvc.add(product);
    this.router.navigate(['/cart']);
  }
}
