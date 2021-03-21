import { TestBed } from '@angular/core/testing';

import { LineOfCreditService } from './line-of-credit.service';

describe('LineOfCreditService', () => {
  let service: LineOfCreditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineOfCreditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
