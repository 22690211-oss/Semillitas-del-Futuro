import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert-window',
  imports: [],
  templateUrl: './alert-window.html',
  styleUrl: './alert-window.css'
})


export class AlertWindow {
  @Input() title! : string
  @Input() message! : string
}
