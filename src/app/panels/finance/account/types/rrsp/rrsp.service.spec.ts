import { TestBed } from '@angular/core/testing';

import { RRSPService } from './rrsp.service';

describe('RRSPService', () => {
  let service: RRSPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RRSPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
