import { TestBed } from '@angular/core/testing';

import { SecuritiesExchangeService } from './securities-exchange.service';

describe('SecuritiesExchangeService', () => {
  let service: SecuritiesExchangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecuritiesExchangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
