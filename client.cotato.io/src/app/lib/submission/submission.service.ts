import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SubmissionService {

  private API_ENDPOINT = 'http://localhost:4242';

  constructor(
    private http: Http
  ) { }

  getSubmissions() {
    return this.http.get(`${this.API_ENDPOINT}`)
      .map((res: Response) => res.json());
  }

}