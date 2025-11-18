import { NgComponentOutlet } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, Type } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth-service';
import { SettingsIcon } from '../icons/settings-icon/settings-icon';
// Define la estructura de los botones del aside menu
export interface AsideMenuButton{
  icon : Type<any>
  text  : string
  componentRelated : Type<any>
}
@Component({
  selector: 'app-aside-menu',
  imports: [NgComponentOutlet,SettingsIcon],
  templateUrl: './app-aside-menu.html',
  styleUrl: './app-aside-menu.css'
})
export class AppAsideMenu implements OnInit{
  constructor(private auth_service : AuthService,private router : Router){}
  @Input() titulo! : string
  @Input() buttons! : AsideMenuButton[]
  @Output() componentSelected = new EventEmitter<any>()
  currentComponent : Type<any> | undefined = undefined
  ngOnInit(): void {
    if(this.buttons) {
      this.currentComponent =  this.buttons[0].componentRelated
      this.componentSelected.emit(this.currentComponent)
    }
  }
  logoutBtn(){
    this.auth_service.logout().subscribe({
      next : (response) =>{
        this.router.navigate(['login'])
      },
      error : (response) =>{

      }
    })
  }
  buttonOnClick(btn : AsideMenuButton){
    this.currentComponent = btn.componentRelated
    this.componentSelected.emit(this.currentComponent)
  }
}