import { TestBed } from '@angular/core/testing';

import { RevolvingService } from './revolving.service';

describe('RevolvingService', () => {
  let service: RevolvingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RevolvingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
