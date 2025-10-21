import { Component } from '@angular/core';
import { AppHeader } from '../../components/app-header/app-header';
import { AsideMenu } from '../../components/aside-menu/aside-menu';
import grupos from "../../grupos_data.json";
@Component({
  selector: 'admin-page',
  imports: [AppHeader,AsideMenu],
  templateUrl: './admin-page.html',
  styleUrl: './admin-page.css'
})
export class AdminPage {
  dataGrupos = grupos
}
