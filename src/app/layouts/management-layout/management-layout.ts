import { NgComponentOutlet } from '@angular/common';
import { Component, EventEmitter, Input, Type } from '@angular/core';
import { AppAsideMenu, AsideMenuButton } from '../../UI/app-aside-menu/app-aside-menu';
import { AppHeader } from '../../UI/app-header/app-header';
@Component({
  selector: 'management-layout',
  imports: [AppAsideMenu, AppHeader,NgComponentOutlet],
  templateUrl: './management-layout.html',
  styleUrl: './management-layout.css',
})
export class ManagementLayout{
  @Input() asideMenuButtons! : AsideMenuButton[]//Este atributo debera contener las secciones del asidemenu
  @Input() currentUser? : string = ""
  currentComponent! : Type<any>
  handleEventEmitCurrentComponent(componentSelected : EventEmitter<any>){
    this.currentComponent = componentSelected
  }
}