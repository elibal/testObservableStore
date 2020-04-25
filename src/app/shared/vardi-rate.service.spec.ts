import { TestBed } from '@angular/core/testing';

import { VardiRateService } from './vardi-rate.service';

describe('VardiRateService', () => {
  let service: VardiRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VardiRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
