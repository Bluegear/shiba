import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  currentMonth: string;
  currentYear: string;

  constructor() { }

  ngOnInit() {
    this.currentMonth = moment().format('MMMM');
    this.currentYear = moment().format('YYYY');
  }

}
