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
    component.monthString = moment().format('YYYYMMDD');
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

  it('should display new long month name when replace monthString with the new one', () => {
    component.monthString = moment('20171105', 'YYYYMMDD').format('YYYYMMDD');
    fixture.detectChanges();
    expect(document.querySelector('#long-month-name').textContent).toEqual('November');
  });

  it('should display last Sunday date of previous month if the first Sunday on the calendar table belongs to previous month', () => {
    const now = moment('20170629', 'YYYYMMDD');
    component.monthString = now.format('YYYYMMDD');
    const clone = now.clone();
    clone.date(1);
    clone.startOf('week');

    expect(document.querySelector('#calendar > tbody > tr > td').textContent).toEqual('' + clone.date());
  });

  it('should display last Saturday date of next month if the last Saturday on the calendar table belongs to next month', () => {
    const now = moment('20170629', 'YYYYMMDD');
    component.monthString = now.format('YYYYMMDD');
    const clone = now.clone();
    clone.endOf('month');
    clone.endOf('week');

    expect(document.querySelector('#calendar > tbody > tr:last-child > td:last-child').textContent).toEqual('' + clone.date());
  });
});
