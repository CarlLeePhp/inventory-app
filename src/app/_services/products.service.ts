import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../_models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // Development
  // baseUrl: string = "http://localhost:5000/api/";
  //Production
  baseUrl: string = "http://192.168.33.64:5000/api/";
  

  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get<Product>(this.baseUrl + 'product')
  }

  getProducts(){
    return this.http.get<Product[]>(this.baseUrl + 'product')
  }

  createProduct(product:Product){
    return this.http.post<Product>(this.baseUrl + 'product', product)
  }
  
  updateProduct(product: Product){
    const headers:HttpHeaders = new HttpHeaders().set("Content-Type", "application/json")
    return this.http.put<Product>(this.baseUrl + 'product', product)
  }
}
