import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input() loc:string; // for the child component to take in the parameter, defined below
  @Output() locToParent:string; // to pass to the parent to run api call

  constructor(private _route: ActivatedRoute) {
    this._route.params.subscribe((param)=>{
      console.log("WeatherComponent loaded and url id given is: ", param);
      this.loc = param.loc;
      this.locToParent = this.loc;
    })
  }

  ngOnInit() {
  }

}
