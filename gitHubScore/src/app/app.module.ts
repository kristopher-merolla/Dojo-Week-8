import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // needed for using forms!

import { HttpService } from './http.service'; // needed for using http services!
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GitHubScoreComponent } from './git-hub-score/git-hub-score.component';

@NgModule({
  declarations: [
    AppComponent,
    GitHubScoreComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule // needed for using forms
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
