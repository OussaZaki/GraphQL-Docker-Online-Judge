import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';

import { AppComponent } from './app.component';
import { SubmissionService } from "./lib/submission/submission.service";
import { SubmissionComponent } from './lib/submission/submission.component';
import { FormSubmissionComponent } from './lib/form-submission/form-submission.component';
import { FormSubmissionService } from "./lib/form-submission/form-submission.service";

const API_ENDPOINT = 'http://localhost:4242/graphql';

@NgModule({
  declarations: [
    AppComponent,
    SubmissionComponent,
    FormSubmissionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ApolloModule.forRoot(_provideClient)
  ],
  providers: [SubmissionService, FormSubmissionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

function _provideClient() {
  return new ApolloClient({
    networkInterface: createNetworkInterface({
      uri: API_ENDPOINT
    })
  });
}