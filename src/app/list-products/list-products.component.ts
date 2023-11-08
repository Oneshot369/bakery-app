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
  ngOnInit(){
    this.service.getProducts((productsJson: Product[]) =>{
      this.products = productsJson;
      console.log(productsJson);
    });
  }
  selectedProduct(product: Product){
    console.log(product);
  }
}
