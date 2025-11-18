import { Component, Input } from '@angular/core';

@Component({
  selector: 'settings-icon',
  imports: [],
  templateUrl: './settings-icon.svg',
})
export class SettingsIcon {
  @Input() height : string | number = 24
  @Input() width : string | number = 24
  @Input() color : string  = "currentColor"
}
