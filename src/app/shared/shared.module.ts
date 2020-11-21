import { ErroSessionModule } from './erro-session/erro-session.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ErroSessionModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class SharedModule { }
