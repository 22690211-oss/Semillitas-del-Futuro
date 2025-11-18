import { Component, Input } from '@angular/core';

@Component({
  selector: 'bell-icon',
  imports: [],
  templateUrl: './bell-icon.svg',
})
export class BellIcon {
  @Input() height : string | number = 24
  @Input() width : string | number = 24
  
  
}
