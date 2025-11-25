import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-actividad-card',
  imports: [],
  templateUrl: './actividad-card.html',
  styleUrl: './actividad-card.css'
})
export class ActividadCard {
@Input() titulo : string = "titulo defecto"
@Input() descripcion : string = "descripcion defecto"
}
