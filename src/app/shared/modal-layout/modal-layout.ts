import { Component, EventEmitter, Input, Output, Type } from '@angular/core';

@Component({
  selector: 'modal-layout',
  imports: [],
  templateUrl: './modal-layout.html',
  styleUrl: './modal-layout.css'
})
export class ModalLayout {
  @Output() cerrado = new EventEmitter<void>()
  @Input() titulo? : string
  currentComponent : Type<any> | undefined 
  cerrar(){
    this.cerrado.emit()
  }
}