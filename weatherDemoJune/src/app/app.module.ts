import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http'; // needed for HTTP request to server!
import { HttpService } from './http.service'; // needed for using http services!

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WindComponent } from './wind/wind.component';
import { SkyComponent } from './sky/sky.component';
import { TempComponent } from './temp/temp.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WindComponent,
    SkyComponent,
    TempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule // add HttpModule here
  ],
  providers: [HttpService], // add HttpService here
  bootstrap: [AppComponent]
})
export class AppModule { }
