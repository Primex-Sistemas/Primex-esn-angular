import { Menu } from './model/sidebar-menu';
import { Component, OnInit } from '@angular/core';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  erro: any;
  sideMenu: Menu[];

  constructor(public service: SidebarService) { }

  getMenu(): void {
    this.service.getMenu().subscribe(
      (data: Menu[]) => {
        this.sideMenu = data.filter(a => {
          if (a.active) { return a; }
        });
      },
      error => {
        this.erro = error.menssagem;
        console.log(this.erro);
      }

    );
  }

  ngOnInit(): void {
    this.getMenu();
  }

}
