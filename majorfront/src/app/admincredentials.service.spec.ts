import { TestBed } from '@angular/core/testing';

import { AdmincredentialsService } from './admincredentials.service';

describe('AdmincredentialsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdmincredentialsService = TestBed.get(AdmincredentialsService);
    expect(service).toBeTruthy();
  });
});
