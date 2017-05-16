import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs/Observable';
import { Submission, SubmissionResult } from "app/lib/submission/submission.model";
import { ApolloQueryResult } from "apollo-client";

@Injectable()
export class FormSubmissionService {

  newSubmissionMutation = gql`
      mutation newSubmission($code: String!) {
        newSubmission(code: $code) {
          id, 
          code,
          status
        }
  }`;

  constructor(private apollo: Apollo) {
  }

  newSubmission(code: string): Observable<Submission[]> {
    return this.apollo.mutate({
      mutation: this.newSubmissionMutation,
      variables: {
        code: code
      }
    }).map((result: ApolloQueryResult<SubmissionResult>) => {
      return result.data.newSubmission;
    });
  }

}