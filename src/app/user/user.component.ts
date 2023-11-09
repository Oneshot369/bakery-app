import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../models/users.model';
import { Product } from '../models/products.model';
import { BakeryService } from '../service/bakery.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  isLoggedIn: boolean = false;
  constructor (private service: BakeryService){

  }
  products: Product[] = [];
  user: User = {
    ID: -1,
    FirstName: '',
    LastName: '',
    Email: '',
    Username: '',
    Password: '',
    Cart: []
  }
  users: User[] = [];
  login = {
    Username: '',
    Password: ''
  }
  ngOnInit(){
    this.service.userLogin((userJson: User[]) =>{
      console.log("json",typeof userJson)
      this.users = userJson;
    });
  }
  onSubmit(){
    console.log("login ",this.login);
    console.log("users ", this.users);
    this.users.forEach((u:User)=>{
      if(u.Username == this.login.Username && u.Password == this.login.Password){
        console.log("Match");
        this.user = u;
      }
    })
    console.log("user", this.user.ID);
    this.service.getProducts((productsJson: Product[]) =>{
      this.products = productsJson;
    });
  }
  removeFromCart(p: Product){
    console.log(p)
  }
  addToCart(p: Product){
    console.log(p)
  }
}
