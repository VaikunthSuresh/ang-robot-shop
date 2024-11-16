// This file is to handle the products details that are present in a seperate web server.

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  // Make a GET API request to the server to get all the product details
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>("/api/products");
  }
}
