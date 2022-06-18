import { Component, OnInit } from '@angular/core';
import { Product } from '../_models/product';

import { ProductsService } from '../_services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  baseUrl: string = "http://localhost:5000/api/";
  products: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.productsService.getProducts().subscribe(products => {
      this.products = products;
    })
  }

}
