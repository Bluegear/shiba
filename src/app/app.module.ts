import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarContainerComponent } from './calendar-container/calendar-container.component';
import { EventComponent } from './event/event.component';

const appRoutes: Routes = [
  { path: 'calendar', component: CalendarContainerComponent },
  { path: 'event/:dateString', component: EventComponent },
  {
    path: '',
    redirectTo: '/calendar',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CalendarContainerComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
