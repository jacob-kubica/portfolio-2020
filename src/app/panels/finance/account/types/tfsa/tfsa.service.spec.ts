import { TestBed } from '@angular/core/testing';

import { TFSAService } from './tfsa.service';

describe('TFSAService', () => {
  let service: TFSAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TFSAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
