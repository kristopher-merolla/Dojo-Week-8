import { Component, OnInit } from '@angular/core';

// add this so you can listen to the route
import { Router, ActivatedRoute } from '@angular/router';

import { HttpService } from './../http.service'; // import http service so the component can use it

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 
  // inject into component class with the below (will give access to all functions inside the service from http.service.ts)
  constructor(private _http:HttpService, private _router: Router) { }

  ngOnInit() {
  }

  weatherData: object;
  errormessage: string;

  getUserZipInfo(zip){
    console.log("user's zip!", zip);
    this._http.fetchWeather(zip)
    .then(
      data => { 
        this.errormessage = null;
        this.weatherData = data;
        this._router.navigate(['/weather/wind/',data.wind.speed])
        console.log('success ', data)}
    )
    .catch(
      err => { 
        this.weatherData = null;
        this.errormessage = "Invalid zipcode";
        console.log('error found', err)}
    )
  }

}
