import { TestBed } from '@angular/core/testing';

import { FixedPaymentsService } from './fixed-payments.service';

describe('FixedPaymentsService', () => {
  let service: FixedPaymentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FixedPaymentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
