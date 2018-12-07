import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableDropdownComponentComponent } from './timetable-dropdown-component.component';

describe('TimetableDropdownComponentComponent', () => {
  let component: TimetableDropdownComponentComponent;
  let fixture: ComponentFixture<TimetableDropdownComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableDropdownComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableDropdownComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
