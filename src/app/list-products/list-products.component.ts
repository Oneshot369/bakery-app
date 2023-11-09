import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BakeryService } from '../service/bakery.service';
import { Product } from '../models/products.model';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {
  constructor(private service: BakeryService){

  }

  products: Product[] = [];
  selectProduct: Product | null = null;
  newProduct: Product = {
    ID: 0,
    Name: '',
    Calories: 0,
    Ingredients: '',
    Price: 0,
    Qty: 0
  };
  ngOnInit(){
    this.service.getProducts((productsJson: Product[]) =>{
      this.products = productsJson;
    });
  }
  selectedProduct(product: Product){
    console.log("selected Procuct", product);
    this.selectProduct = product;
    this.newProduct = this.selectProduct
  }
  onSubmit(){
    console.log("Updated Product", this.newProduct);
    this.service.updateProducts(this.newProduct, function (){});
  }
  deleteProduct(){
    console.log("Deleting Product", this.newProduct);
    this.service.deleteProducts(this.newProduct, function (){});
    location.reload();
  }
}
