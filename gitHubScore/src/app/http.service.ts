import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

  url: string;

  constructor(private _http: Http) { }

    getUser(username) {
      this.url = "https://api.github.com/users/";
      this.url += username;
      return this._http.get(this.url).map(data=>data.json()).toPromise();
    }
}
