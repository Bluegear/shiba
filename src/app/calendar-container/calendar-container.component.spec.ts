import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarContainerComponent } from './calendar-container.component';
import { CalendarComponent } from 'app/calendar/calendar.component';

import * as moment from 'moment';

describe('CalendarContainerComponent', () => {
  let component: CalendarContainerComponent;
  let fixture: ComponentFixture<CalendarContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarContainerComponent, CalendarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have properties currentMonthString equals to the first day of current month', () => {
    expect(component.currentMonthString).toEqual(moment().startOf('month').format('YYYYMMDD'));
  });

  it('should have properties nextMonthString equals to the first day of next month', () => {
    expect(component.nextMonthString).toEqual(moment().startOf('month').add(1, 'month').format('YYYYMMDD'));
  });

});
