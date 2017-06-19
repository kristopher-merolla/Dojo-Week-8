import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // needed for forms!

import { HttpModule } from '@angular/http'; // needed for HTTP request to server!
import { HttpService } from './http.service'; // needed for using http services!

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
    HttpModule // add HttpModule here
  ],
  providers: [HttpService], // add HttpService here
  bootstrap: [AppComponent]
})
export class AppModule { }
