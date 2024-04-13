import { TestBed } from '@angular/core/testing';

import { SavingsaccountinfoService } from './savingsaccountinfo.service';

describe('SavingsaccountinfoService', () => {
  let service: SavingsaccountinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavingsaccountinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
