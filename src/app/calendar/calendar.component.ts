import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {


  longMonthName: string;
  currentYear: string;
  weeks: Array<Array<String>> = new Array<Array<String>>();

  private _monthString = '';

  @Input('monthString')
  set monthString(monthString: string) {

    console.log('Setter called!');

    if (!monthString) {
      return;
    }

    this._monthString = monthString;
    const focusMoment = moment(this.monthString, 'YYYYMMDD');
    this.currentYear = focusMoment.format('YYYY');
    this.longMonthName = focusMoment.format('MMMM');

    // Init calendar
    const firstDay = focusMoment.clone();
    firstDay.date(1);
    firstDay.startOf('week');
    firstDay.startOf('day');

    const lastDay = focusMoment.clone();
    lastDay.endOf('month');
    lastDay.endOf('week');
    lastDay.startOf('day');

    while (!firstDay.isSameOrAfter(lastDay)) {
      const week = new Array<string>();
      for (let i = 0; i < 7; i++) {
        week.push('' + firstDay.date());
        firstDay.add(1, 'days');
      }
      this.weeks.push(week);
    }
  }

  get monthString(): string { return this._monthString; }

  constructor() { }

  ngOnInit() { }
}
