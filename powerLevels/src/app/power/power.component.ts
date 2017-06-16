import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {

  power: number = 1;
  submittedPower: number = 1;

  onSubmit(form) {
    if(!form.valid) {
      return;
    }
    // console.log("submitted");
    // console.log(this.power);
    this.submittedPower = this.power;
    this.power = 1;
    // console.log(this.submittedPower);
  }

  constructor() { }

  ngOnInit() {
  }

}