import { Component, Input } from '@angular/core';

@Component({
  selector: 'schoolhat-icon',
  imports: [],
  templateUrl: './schoolhat-icon.svg',
})
export class SchoolhatIcon {
  @Input() height : string | number = 24
  @Input() width : string | number = 24
  @Input() color : string  = "currentColor"
}
