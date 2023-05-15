import { TestBed } from '@angular/core/testing';

import { ServiciuConturiService } from './serviciu-conturi';

describe('ServiciuConturiService', () => {
  let service: ServiciuConturiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciuConturiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
