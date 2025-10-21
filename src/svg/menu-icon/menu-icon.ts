import { Component, Input } from '@angular/core';

@Component({
  selector: 'menu-icon',
  imports: [],
  templateUrl: './menu-icon.svg',
})
export class MenuIcon {
  @Input() height : string | number = 24
  @Input() width : string | number = 24
  @Input() color : string  = "currentColor"
}
