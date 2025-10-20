import { Component, Input } from '@angular/core';

@Component({
  selector: 'arrow-chevron-right-icon',
  imports: [],
  templateUrl: './arrow-chevron-right-icon.svg',
})
export class ArrowChevronRightIcon {
  @Input() height : string | number = 24
  @Input() width : string | number = 24
  @Input() color : string  = "currentColor"
}
