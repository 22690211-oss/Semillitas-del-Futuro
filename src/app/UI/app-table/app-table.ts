import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { Docente } from '../../api/docente';
import { User } from '../../models/user/user.model';
import { ModalLayout } from '../../shared/modal-layout/modal-layout';
import { TrashCanIcon } from '../icons/trash-can-icon/trash-can-icon';
@Component({
  selector: 'app-table',
  imports: [ModalLayout,TrashCanIcon],
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
  @Output() rowClicked = new EventEmitter<any>() 
  @Input() opciones : boolean = false
  Object = Object
  handleRowClickedEvent(rowData : any){
    this.rowClicked.emit(rowData)
  }
}
