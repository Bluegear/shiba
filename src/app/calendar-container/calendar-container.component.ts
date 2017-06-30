import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-calendar-container',
  templateUrl: './calendar-container.component.html',
  styleUrls: ['./calendar-container.component.css']
})
export class CalendarContainerComponent implements OnInit {

  currentMonthString: string;
  nextMonthString: string;
  now = moment();

  constructor() { }

  ngOnInit() {
    this.currentMonthString = this.now.startOf('month').format('YYYYMMDD');
    const nextMonth = this.now.clone();
    nextMonth.add(1, 'months');
    this.nextMonthString = nextMonth.format('YYYYMMDD');
  }

}
