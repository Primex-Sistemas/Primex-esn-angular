import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Erro403Component } from './erro403/erro403.component';
import { Erro404Component } from './erro404/erro404.component';
import { Erro500Component } from './erro500/erro500.component';
import { ErroForbiddenComponent } from './erro-forbidden/erro-forbidden.component';


@NgModule({
  declarations: [
    ErroForbiddenComponent,
    Erro403Component,
    Erro404Component,
    Erro500Component
  ],
  imports: [
    CommonModule,
  ]
})
export class ErroSessionModule { }
