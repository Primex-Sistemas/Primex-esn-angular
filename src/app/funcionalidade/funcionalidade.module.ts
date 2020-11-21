import { SharedModule } from './../shared/shared.module';
import { LayoutModule } from './../layout/layout.module';
import { EspecialidadeComponent } from './administrativo/especialidade/especialidade.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgendaComponent } from './nutricionista/agenda/agenda.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin,
  listPlugin,
  timeGridPlugin
]);


@NgModule({
  declarations: [
    EspecialidadeComponent,
    DashboardComponent,
    AgendaComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class FuncionalidadeModule { }
