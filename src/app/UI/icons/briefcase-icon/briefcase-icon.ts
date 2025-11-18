import { Component, Input } from '@angular/core';

@Component({
  selector: 'briefcase-icon',
  imports: [],
  templateUrl: './briefcase-icon.svg',
})
export class BriefcaseIcon {
  @Input() height : string | number = 24
  @Input() width : string | number = 24
  @Input() color : string  = "currentColor" 
}
