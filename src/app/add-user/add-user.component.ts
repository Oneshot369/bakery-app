import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../models/users.model';
import { BakeryService } from '../service/bakery.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  constructor (private service: BakeryService){

  }
  user: User = {
    ID: 0,
    FirstName: '',
    LastName: '',
    Email: '',
    Username: '',
    Password: ''
  }
  onSubmit(){
    console.log("added user: ", this.user)
    this.service.addUser(this.user, function(){});
  }
}
