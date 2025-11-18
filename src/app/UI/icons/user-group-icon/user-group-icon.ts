import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-user-group-icon',
  imports: [],
  templateUrl: './user-group-icon.svg',
})
export class UserGroupIcon {
  @Input() height: string | number = 24;
  @Input() width: string | number = 24;
  @Input() color: string = 'currentColor';
}
