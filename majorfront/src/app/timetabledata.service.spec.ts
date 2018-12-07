import { TestBed } from '@angular/core/testing';

import { TimetabledataService } from './timetabledata.service';

describe('TimetabledataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimetabledataService = TestBed.get(TimetabledataService);
    expect(service).toBeTruthy();
  });
});
