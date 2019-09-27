import { TestBed } from '@angular/core/testing';

import { ForceUserService } from './force-user.service';

describe('ForceUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForceUserService = TestBed.get(ForceUserService);
    expect(service).toBeTruthy();
  });
});
