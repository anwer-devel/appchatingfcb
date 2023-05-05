import { TestBed } from '@angular/core/testing';

import { FriendprofService } from './friendprof.service';

describe('FriendprofService', () => {
  let service: FriendprofService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FriendprofService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
