import { Component, OnInit, OnDestroy } from '@angular/core'; // add "OnDestroy" to end a subscription

// add this so you can listen to the route
import { Router, ActivatedRoute } from '@angular/router';

// need to use for "OnDestroy"
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sky',
  templateUrl: './sky.component.html',
  styleUrls: ['./sky.component.css']
})
export class SkyComponent implements OnInit, OnDestroy { // add "OnDestroy" here
  // setup an attribute to store the param
  sky: string;

  // need to use for "OnDestroy"
  sub: Subscription;

  // inject inside constructor to listen
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    // pay attention to the URL
    this.sub = this._route.params.subscribe(params => { // VERY important to close your subscriptions!! (see ngOnDestroy)
      this.sky = params.sky; // the '.sky' comes from the routing ':sky'
    })
  }

  // add "OnDestroy" function
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}