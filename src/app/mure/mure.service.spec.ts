import { TestBed } from '@angular/core/testing';

import { MureService } from './mure.service';

describe('MureService', () => {
  let service: MureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
