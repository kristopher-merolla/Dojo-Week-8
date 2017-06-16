import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // needed for forms!
import { HttpModule } from '@angular/http'; // needed for HTTP request to server!
import { HttpService } from './http.service'; // needed for using http services!
import { AppRoutingModule } from './app-routing.module'; // needed for app routing!

// need to load components
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // needed for app routing!
    FormsModule, // needed for forms!
    HttpModule, // needed for HTTP request to server!
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
