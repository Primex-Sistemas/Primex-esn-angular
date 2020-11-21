import { Time } from '@angular/common';
import { DateEnv } from '@fullcalendar/angular';

export interface Agenda{
  id?: string;
  start?: Date;
  end?: Date;
  title?: string;
  allDay?: boolean;
}
