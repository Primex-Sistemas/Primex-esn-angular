import { Observable } from 'rxjs';
import { AgendaService } from './agenda.service';
import { Agenda } from '../agenda/model/calendar';
import { Component, ChangeDetectionStrategy, OnInit, OnChanges } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi, EventInput } from '@fullcalendar/angular'; // useful for typechecking
import Locale from '@fullcalendar/core/locales/pt-br';



@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgendaComponent implements OnInit, OnChanges {

  constructor(public http: AgendaService) { }

  currentEvents: EventApi[] = [];
  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    locale: Locale,
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
    dateClick: this.handleEventClick.bind(this), // bind is important!
    /**/

    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */



  };


  ngOnInit(): void {
    this.http.getAgenda().subscribe((data) => {
      this.calendarOptions.events = data;
    });
  }

  ngOnChanges(): void {
    this.http.getAgenda().subscribe((data) => {
      this.calendarOptions.events = data;
    });
  }


  teste(): void {

    this.http.getAgenda().subscribe((data: Agenda[]) => {
    });
  }

  handleDateSelect(selectInfo: DateSelectArg): void {

    const id = this.getRandomNumberBetween(3, 100);
    const title = prompt('Please enter a new title for your event') + id;
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id,
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg): void {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]): void {
    this.currentEvents = events;
  }

  getRandomNumberBetween(min, max): string {
    return Math.floor(Math.random() * (max - min + 1) + min).toString();
  }

}
