import { TestBed } from '@angular/core/testing';

import { AdminprofileService } from './adminprofile.service';

describe('AdminprofileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminprofileService = TestBed.get(AdminprofileService);
    expect(service).toBeTruthy();
  });
});
