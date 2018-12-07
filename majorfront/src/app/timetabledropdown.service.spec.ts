import { TestBed } from '@angular/core/testing';

import { TimetabledropdownService } from './timetabledropdown.service';

describe('TimetabledropdownService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimetabledropdownService = TestBed.get(TimetabledropdownService);
    expect(service).toBeTruthy();
  });
});
