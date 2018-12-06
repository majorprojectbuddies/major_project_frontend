import { TestBed } from '@angular/core/testing';

import { LogincredentialsService } from './logincredentials.service';

describe('LogincredentialsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogincredentialsService = TestBed.get(LogincredentialsService);
    expect(service).toBeTruthy();
  });
});
