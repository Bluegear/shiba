import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarComponent } from './calendar.component';

import * as moment from 'moment';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display current long month name', () => {
    const currentMonth = moment().format('MMMM');
    expect(document.querySelector('#long-month-name').textContent).toEqual(currentMonth);
  });

  it('should display current full year', () => {
    const currentYear = moment().format('YYYY');
    expect(document.querySelector('#full-year').textContent).toEqual(currentYear);
  });
});
