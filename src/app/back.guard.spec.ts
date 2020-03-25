import { TestBed } from '@angular/core/testing';

import { BackGuard } from './back.guard';

describe('BackGuard', () => {
  let guard: BackGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BackGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
