import { Component, Input } from '@angular/core';

@Component({
  selector: 'stack-icon',
  imports: [],
  templateUrl: './stack-icon.svg',
})
export class StackIcon {
  @Input() height : string | number = 24
  @Input() width : string | number = 24
  @Input() color : string  = "currentColor"
}
