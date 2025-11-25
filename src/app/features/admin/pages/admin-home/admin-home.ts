import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagementLayout } from '../../../../layouts/management-layout/management-layout';
import { User } from '../../../../models/user/user.model';
import { AuthService } from '../../../../services/auth-service/auth-service';
import { AsideMenuButton } from '../../../../UI/app-aside-menu/app-aside-menu';
import { BriefcaseIcon } from '../../../../UI/icons/briefcase-icon/briefcase-icon';
import { SchoolhatIcon } from '../../../../UI/icons/schoolhat-icon/schoolhat-icon';
import { UserIcon } from '../../../../UI/icons/user-icon/user-icon';
import { ManageAlumnos } from '../../components/manage-alumnos/manage-alumnos';
import { ManageDocentes } from '../../components/manage-docentes/manage-docentes';

@Component({
  selector: 'app-admin-home',
  imports: [ManagementLayout],
  templateUrl: './admin-home.html',
  styleUrl: './admin-home.css'
})
export class AdminHome implements OnInit{
  constructor(private auth_service : AuthService,private router : Router){}
  dataisready : boolean = false
  admin_user? : User
  currentUser? : string = ""
  ngOnInit(): void {
    this.auth_service.me().subscribe({
      next : async (response) =>{
        console.log("method me desde admin")
        console.log(response)
        this.admin_user = response
        this.currentUser = this.admin_user?.nombre
        this.dataisready = true
      },
      error : (error)=>{
        console.log('error en admin-home al ejecutar metodo me', error)
        this.router.navigate(['/login'])
      }
    })
  }
  asideMenuButtons : AsideMenuButton[]=[
    {
      text : "Docentes",
      icon : BriefcaseIcon,
      componentRelated : ManageDocentes
    },
    {
      text : "Alumnos",
      icon : SchoolhatIcon,
      componentRelated : ManageAlumnos
    },
    {
      text : "Grupos",
      icon : UserIcon,
      componentRelated : ManageDocentes
    }
  ]
}
