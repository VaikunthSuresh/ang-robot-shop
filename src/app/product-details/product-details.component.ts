//This Component is to handle the product details as a child to Catalog Component
import { Component, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { CurrencyPipe, NgClass, NgIf, NgStyle } from '@angular/common';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'bot-product-details',
  standalone: true,
  imports: [NgStyle,NgClass,NgIf, CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  // Get the input from parent Component (Catalog Component) to the Child Component
  @Input() product!: IProduct;

  // send the output of buy event from the child component to the parent component to update the cart
  //EventEmitter is a class used for creating Custom Events
  @Output() buy = new EventEmitter();

  // function to get URL of the image
  getImageUrl(product: IProduct){
    return '/assets/images/robot-parts/' + product.imageName
  }

  // function to get the font color
  getDiscountedFontColor(product: IProduct){
    return {color: product.discount>0 ? 'green' : ''};
  }

  //function to get the discounted price
  getDiscountedPrice(product: IProduct){
    return {strikethrough: product.discount>0 };
  }

  //handle the buy button clicked event with emit()
  //emit() will send the notification to the parent component
  buyButtonClicked(product: IProduct){
    this.buy.emit();
  }
}
