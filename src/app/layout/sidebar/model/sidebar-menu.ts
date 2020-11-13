
export interface Submenu {
  id: number;
  idMenu: number;
  nome: string;
  icone: string;
  href: string;
  active: boolean;
}

export interface Menu {
  id: number;
  nome: string;
  icone: string;
  href: string;
  active: boolean;
  submenu: Submenu[];
}

export interface MenuRoot{
  menu: Menu[];
}


