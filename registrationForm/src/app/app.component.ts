import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user = new User();
  users = [];

  onSubmit(form) {
    if(!form.valid) {
      return;
    }
    console.log("submitted");
    console.log(this);
    console.log(this.user);
    this.users.push(this.user);
    form.touched = false;
    this.user = new User();
    console.log(this.users);
  }
}