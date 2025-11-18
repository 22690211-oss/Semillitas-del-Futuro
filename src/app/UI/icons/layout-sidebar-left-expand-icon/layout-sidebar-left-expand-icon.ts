import { Component, Input } from '@angular/core';
@Component({
  selector: 'layout-sidebar-left-expand-icon',
  templateUrl: './layout-sidebar-left-expand.svg',
})
export class LayoutSidebarLeftExpandIcon {
  @Input() height : string | number = 24
  @Input() width : string | number = 24
  @Input() color : string  = "currentColor"
}
