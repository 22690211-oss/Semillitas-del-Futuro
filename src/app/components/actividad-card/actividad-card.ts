import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-actividad-card',
  imports: [RouterLink],
  templateUrl: './actividad-card.html',
  styleUrl: './actividad-card.css'
})
export class ActividadCard {
  @Input() actImg! : string 
  @Input() actName! : string
  @Input() actGrade! : string
}
