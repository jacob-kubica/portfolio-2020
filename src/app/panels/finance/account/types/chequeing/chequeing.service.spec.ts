import { TestBed } from '@angular/core/testing';

import { ChequeingService } from './chequeing.service';

describe('ChequeingService', () => {
  let service: ChequeingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChequeingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
