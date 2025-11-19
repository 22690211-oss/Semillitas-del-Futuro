import { Component, Input } from '@angular/core';
// import { Docente } from '../../api/docente';
import { User } from '../../models/user.model';
import { ModalLayout } from '../../shared/modal-layout/modal-layout';
@Component({
  selector: 'app-table',
  imports: [ModalLayout],
  templateUrl: './app-table.html',
  styleUrl: './app-table.css'
})

export class AppTable{
  @Input() data! : User[]
  @Input() rows! : string[][]
  @Input() bgColor : string = "white"
  @Input() tableBorderColor : string = "gray"
  @Input() headers! : string[]
  @Input() titleModalOnClickRow! : string
  @Input() hasSearchBar : boolean = false
  @Input() searchBarPlaceHolder : string = "Buscar"
  Object = Object
  modalEntityIsOpen = false
  handleModal(){
    this.modalEntityIsOpen = !this.modalEntityIsOpen
  }
  entityOnClick(entity :User){ // funcion que se ejecuta al clickear sobre una fila
   this.handleModal() 
  }
}
