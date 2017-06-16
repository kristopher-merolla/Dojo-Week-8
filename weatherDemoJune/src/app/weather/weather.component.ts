import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service'; // import http service so the component can use it

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  // inject into component class with the below (will give access to all functions inside the service from http.service.ts)
  constructor(private _http:HttpService) { }

  weatherData: object;

  ngOnInit() {
  }

  getUserZipInfo(zip) {
    console.log("user's zip",zip);
    // call the function, which returns a promise, and use the then and catch functions
    this._http.fetchWeather(zip)
    .then(
      // can call this whatever (we use data below)
      data => { 
        this.weatherData = zip;
        console.log("success",data) }
    )
    .catch(
      // can call a function if error as well
      err => { 
        this.weatherData = null;
        console.log("fail",err) }
    )
  }

}
