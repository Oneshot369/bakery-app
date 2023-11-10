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
    this.loadUsers();
  }
  onSubmit(){
    console.log("login ",this.login);
    console.log("users ", this.users);
    this.loadUsers();
    console.log("user", this.user.ID);
    this.loaProducts();
  }

  removeFromCart(p: Product){
    console.log("Delete", p)
    this.service.deleteFromCart(this.user.ID, p.ID, () =>{
      console.log("Deleted");
    });
    this.loaProducts();
    this.loadUsers();
  }
  addToCart(p: Product){
    console.log("added", p)
    this.service.addToCart(this.user.ID, p.ID, () =>{
      console.log("Added");
    });
    this.loaProducts();
    this.loadUsers();
  }

  loaProducts(){
    this.service.getProducts((productsJson: Product[]) =>{
      this.products = productsJson;
    });
  }
  checkUser(){
    this.users.forEach((u:User)=>{
      if(u.Username == this.login.Username && u.Password == this.login.Password){
        console.log("Match");
        this.user = u;
      }
    })
  }
  loadUsers(){
    this.service.userLogin((userJson: User[]) =>{
      console.log("json",typeof userJson)
      this.users = userJson;
    });
    this.checkUser();
  }
}

