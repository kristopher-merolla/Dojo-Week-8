import { Component, OnInit, OnDestroy } from '@angular/core'; // add "OnDestroy" to end a subscription

// add this so you can listen to the route
import { Router, ActivatedRoute } from '@angular/router';

// need to use for "OnDestroy"
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wind',
  templateUrl: './wind.component.html',
  styleUrls: ['./wind.component.css']
})
export class WindComponent implements OnInit, OnDestroy { // add "OnDestroy" here
  // setup an attribute to store the param
  windSpeed: string;

  // need to use for "OnDestroy"
  sub: Subscription;

  // inject inside constructor to listen
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    // pay attention to the URL
    this.sub = this._route.params.subscribe(params => { // VERY important to close your subscriptions!! (see ngOnDestroy)
      this.windSpeed = params.wind; // the '.wind' comes from the routing ':wind'
    })
  }

  // add "OnDestroy" function
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
