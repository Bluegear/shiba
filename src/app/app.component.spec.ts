import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { CalendarContainerComponent } from 'app/calendar-container/calendar-container.component';
import { CalendarComponent } from 'app/calendar/calendar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { EventComponent } from 'app/event/event.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        CalendarComponent,
        CalendarContainerComponent,
        EventComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
