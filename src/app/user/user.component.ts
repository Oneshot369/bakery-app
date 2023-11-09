import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../models/users.model';
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
  user: User = {
    ID: 0,
    FirstName: '',
    LastName: '',
    Email: '',
    Username: '',
    Password: '',
    Cart: []
  }
  users: User[] = []

  login = {
    Username: '',
    Password: ''
  }
  ngOnInit(){
    this.service.userLogin( (userJson: User[]) =>{
      console.log("json",typeof userJson)
      this.users = userJson;
    }); 
  }
  onSubmit(){
    console.log("login ",this.login);
    console.log("users ", this.users);
    console.log("l", this.users)
    this.users.forEach((u:User) => {
      if(u.Password == this.login.Password && u.Username == this.login.Username){
        this.isLoggedIn = true;
        console.log("user is logged in");
        this.user = u;
      }
    });
  }
}
