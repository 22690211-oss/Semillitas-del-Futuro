import { Component, Input } from '@angular/core';
import { UserIcon } from '../icons/user-icon/user-icon';
@Component({
  selector: 'app-header',
  imports: [UserIcon],
  templateUrl: './app-header.html',
  styleUrl: './app-header.css'
})
export class AppHeader {
  @Input() currentUser? : string
}
