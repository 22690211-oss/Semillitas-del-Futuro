import { Component } from '@angular/core';
import { MailIcon } from '../../../../components/icons/mail-icon/mail-icon';
import { SchoolhatIcon } from '../../../../components/icons/schoolhat-icon/schoolhat-icon';
import { Anothertestcomp } from '../../../../components/test/anothertestcomp/anothertestcomp';
import { Testcomponent } from '../../../../components/test/testcomponent/testcomponent';
import { ManagementLayout } from '../../../../layouts/management-layout/management-layout';
import { AsideMenuButton } from '../../../../UI/app-aside-menu/app-aside-menu';

@Component({
  selector: 'app-docente-home',
  imports: [ManagementLayout,SchoolhatIcon],
  templateUrl: './docente-home.html',
  styleUrl: './docente-home.css'
})
export class DocenteHome{
  asideMenuButtons : AsideMenuButton[] = [
    {
      text : "Test comp",
      icon : MailIcon,
      componentRelated : Testcomponent
    },
    {
      text : "another comp",
      icon : MailIcon,
      componentRelated : Anothertestcomp
    },
  ]
}
