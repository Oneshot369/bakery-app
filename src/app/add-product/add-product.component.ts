import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/products.model';
import { BakeryService } from '../service/bakery.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  constructor (private service: BakeryService){

  }
  product: Product ={
    ID: 0,
    Name: '',
    Calories: 0,
    Ingredients: '',
    Price: 0,
    Qty: 0
  };
  ngOnInit(){

  }
  onSubmit(){
    console.log("Added Product: ", this.product);
    this.service.addProduct(this.product, function (){});
  }
}
