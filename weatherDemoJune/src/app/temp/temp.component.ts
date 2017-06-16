import { Component, OnInit, OnDestroy } from '@angular/core'; // add "OnDestroy" to end a subscription

// add this so you can listen to the route
import { Router, ActivatedRoute } from '@angular/router';

// need to use for "OnDestroy"
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit, OnDestroy { // add "OnDestroy" here
  // setup an attribute to store the param
  temp: string;

  // need to use for "OnDestroy"
  sub: Subscription;

  // inject inside constructor to listen
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    // pay attention to the URL
    this.sub = this._route.params.subscribe(params => { // VERY important to close your subscriptions!! (see ngOnDestroy)
      this.temp = params.temp; // the '.temp' comes from the routing ':temp'
    })
  }

  // add "OnDestroy" function
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
