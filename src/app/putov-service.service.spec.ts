import { TestBed } from '@angular/core/testing';

import { PutovService } from './putov-service.service';

describe('PutovServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PutovService = TestBed.get(PutovService);
    expect(service).toBeTruthy();
  });
});
