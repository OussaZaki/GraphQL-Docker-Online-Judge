import { TestBed, inject } from '@angular/core/testing';

import { FormSubmissionService } from './form-submission.service';

describe('FormSubmissionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormSubmissionService]
    });
  });

  it('should be created', inject([FormSubmissionService], (service: FormSubmissionService) => {
    expect(service).toBeTruthy();
  }));
});
