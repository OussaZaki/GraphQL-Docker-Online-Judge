import { Component } from '@angular/core';

import { Submission } from "./lib/submission/submission.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submissions: Submission[];
  
  constructor() {
  }

  getSubmissions(submissionsObject){
    this.submissions = submissionsObject;
  }
}