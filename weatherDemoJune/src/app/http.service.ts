import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; // required for http requests
import 'rxjs' // prescription javascript

@Injectable()
export class HttpService {

  // to inject the dependancy and access the Http class methods
  constructor(private _http: Http) { }
    
  // function to call the api
  // in order for this to be used in a component it must be INJECTED
  fetchWeather(zip) {
    return this._http.get("http://api.openweathermap.org/data/2.5/weather?zip=94040"+zip+",us&APPID=71808975185a1d637ac5e5f7ee4a9f4b").map(response=>response.json()).toPromise()
  }

}
