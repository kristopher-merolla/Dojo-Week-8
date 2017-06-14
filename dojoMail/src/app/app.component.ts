import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  users = [
    {
      email: "kris@email.com",
      importance: true,
      subject: "New Windows",
      content: "Windowx XXIV to launch in 2102"
    },
    {
      email: "jason@CampCrystalLake.com",
      importance: true,
      subject: "Summer is Coming",
      content: "Lots of new campers to 'work' with!"
    },
    {
      email: "kermit@email.com",
      importance: false,
      subject: "Frog Life",
      content: "It ain't easy being green"
    },
    {
      email: "big_bird@sesamestreet.com",
      importance: true,
      subject: "Yellow",
      content: "Yellow is an excellent color!"
    }
  ]
}