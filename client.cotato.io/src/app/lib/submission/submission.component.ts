import { Component, OnInit, Input } from '@angular/core';

import { Submission } from "./submission.model";

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit {

  @Input() submission: Submission;

  constructor() { }

  ngOnInit() {
  }

}
