import { Component, Input } from '@angular/core';

@Component({
  selector: 'mail-icon',
  imports: [],
  templateUrl: './mail-icon.svg',
})
export class MailIcon {
  @Input() height : string | number = 24
  @Input() width : string | number = 24
}
