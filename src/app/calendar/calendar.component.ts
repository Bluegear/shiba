import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  now = moment();
  currentMonth: string;
  currentYear: string;
  weeks: Array<Array<String>> = new Array<Array<String>>();

  constructor() { }

  ngOnInit() {
    this.currentMonth = this.now.format('MMMM');
    this.currentYear = this.now.format('YYYY');

    // Init calendar
    const firstDay = this.now.clone();
    firstDay.date(1);
    firstDay.startOf('week');
    firstDay.startOf('day');

    const lastDay = this.now.clone();
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
}
