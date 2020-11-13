import { LayoutModule } from './../layout/layout.module';
import { EspecialidadeComponent } from './administrativo/especialidade/especialidade.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    EspecialidadeComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    LayoutModule
  ]
})
export class FuncionalidadeModule { }
