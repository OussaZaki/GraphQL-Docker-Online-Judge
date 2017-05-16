import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Submission } from '../submission/submission.model';
import { FormSubmissionService } from "./form-submission.service";
import { ApolloQueryResult } from "apollo-client";

@Component({
  selector: 'app-form-submission',
  templateUrl: './form-submission.component.html',
  styleUrls: ['./form-submission.component.css']
})
export class FormSubmissionComponent implements OnInit {

  submission: Submission;
  @Output() submissions = new EventEmitter<Submission[]>();

  constructor(
    private formSubmissionService: FormSubmissionService
  ) {
    this.submission = new Submission('', null, 0);
  }

  ngOnInit() {
  }

  onSubmit() {
    this.formSubmissionService.newSubmission(this.submission.code)
      .subscribe(submissions => {
        this.submissions.emit(submissions);
      }, (error) => {
        console.log('there was an error sending the query', error);
      });
  }
}
