import { Component } from '@angular/core';
import { MenuIcon } from '../../../svg/menu-icon/menu-icon';
import { UserIcon } from '../../../svg/user-icon/user-icon';

@Component({
  selector: 'app-header',
  imports: [MenuIcon,UserIcon],
  templateUrl: './app-header.html',
  styleUrl: './app-header.css'
})
export class AppHeader {

}
