import { Component, OnInit } from '@angular/core';
import { Product } from '../_models/product';

import { ProductsService } from '../_services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product = {
    id: 0,
    name: "",
    unit: "",
    isWatching: true,
    isActive: true,
    modify: 0,
    warnLevel: 4,
    stock: 0
  };
  columnsToDisplay = ['name', 'unit', 'stock', 'modify']
  
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.productsService.getProducts().subscribe(products => {
      products.forEach(product => {
        product.modify = 0;
      })
      this.products = products;
    })
  }

  creatProduct(){
    if(this.newProduct.name == "" || this.newProduct.unit == "") return;
    this.productsService.createProduct(this.newProduct).subscribe(newProduct => {
      this.getProducts()
    }, err => console.error(err))
  }

  updateProducts(){
    this.products.forEach(product => {
      if(product.modify != 0){
        product.stock = product.stock + product.modify;
        this.productsService.updateProduct(product).subscribe(updatedProduct => {
          product.modify = 0
        }, err => {
          console.log(err)
        })
      }
    })
  }

  minusStock(id:number){
    this.products.forEach((product) => {
      if(product.id == id) product.modify--;
    })
  }

  addStock(id:number){
    this.products.forEach((product) => {
      if(product.id == id) product.modify++;
    })
  }

}
