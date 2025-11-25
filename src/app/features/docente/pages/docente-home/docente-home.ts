import { Component } from '@angular/core';
import { ManagementLayout } from '../../../../layouts/management-layout/management-layout';
import { AsideMenuButton } from '../../../../UI/app-aside-menu/app-aside-menu';
import { BriefcaseIcon } from '../../../../UI/icons/briefcase-icon/briefcase-icon';
import { SchoolhatIcon } from '../../../../UI/icons/schoolhat-icon/schoolhat-icon';
import { UserIcon } from '../../../../UI/icons/user-icon/user-icon';
import { ManageAlumnos } from '../../../admin/components/manage-alumnos/manage-alumnos';
import { ManageDocentes } from '../../../admin/components/manage-docentes/manage-docentes';
import { ManageMisActividades } from '../../components/manage-mis-actividades/manage-mis-actividades';

@Component({
  selector: 'app-docente-home',
  imports: [ManagementLayout],
  templateUrl: './docente-home.html',
  styleUrl: './docente-home.css'
})
export class DocenteHome{
asideMenuButtons : AsideMenuButton[]=[
    {
      text : "Mis grupos",
      icon : BriefcaseIcon,
      componentRelated : ManageDocentes
    },
    {
      text : "Mis alumnos",
      icon : SchoolhatIcon,
      componentRelated : ManageAlumnos
    },
    {
      text : "Mis actividades",
      icon : UserIcon,
      componentRelated : ManageMisActividades
    }
  ]
}
