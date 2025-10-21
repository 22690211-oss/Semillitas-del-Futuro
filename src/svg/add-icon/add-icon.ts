import { Component, Input } from '@angular/core';
@Component({
  selector: 'add-icon',
  imports: [],
  templateUrl: './add-icon.svg',
})
export class AddIcon {
  @Input() height : string | number = 24
  @Input() width : string | number = 24
  @Input() color : string  = "currentColor"
}
