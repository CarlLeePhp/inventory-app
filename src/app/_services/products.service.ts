import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../_models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl: string = "http://localhost:5000/api/";

  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get<Product>(this.baseUrl + 'product')
  }

  getProducts(){
    return this.http.get<Product[]>(this.baseUrl + 'product')
  }
}
