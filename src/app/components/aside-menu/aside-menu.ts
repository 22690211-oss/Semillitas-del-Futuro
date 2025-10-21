import { Component } from '@angular/core';
import { AddIcon } from '../../../svg/add-icon/add-icon';
import { BriefcaseIcon } from '../../../svg/briefcase-icon/briefcase-icon';
import { SchoolhatIcon } from '../../../svg/schoolhat-icon/schoolhat-icon';
import { StackIcon } from '../../../svg/stack-icon/stack-icon';
import { AsideMenuButton } from '../aside-menu-button/aside-menu-button';

@Component({
  selector: 'aside-menu',
  imports: [StackIcon,AsideMenuButton,AddIcon,BriefcaseIcon,SchoolhatIcon],
  templateUrl: './aside-menu.html',
  styleUrl: './aside-menu.css'
})
export class AsideMenu {

}
