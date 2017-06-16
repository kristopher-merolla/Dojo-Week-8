import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-git-hub-score',
  templateUrl: './git-hub-score.component.html',
  styleUrls: ['./git-hub-score.component.css']
})
export class GitHubScoreComponent implements OnInit {

  constructor(private _httpService: HttpService) {}

  user: object;
  score: number = 0;
  username: string = "";

  getTasks() {
    this._httpService.getUser(this.username)
    .then( user => { this.score+=(user.public_repos + user.followers); })
    .catch( err => { console.log(err); })
  }

  ngOnInit() {
  }

}
