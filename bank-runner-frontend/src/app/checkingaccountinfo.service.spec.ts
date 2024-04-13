import { TestBed } from '@angular/core/testing';

import { CheckingaccountinfoService } from './checkingaccountinfo.service';

describe('CheckingaccountinfoService', () => {
  let service: CheckingaccountinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckingaccountinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
