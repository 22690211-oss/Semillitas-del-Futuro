import { Component, Input } from '@angular/core';
@Component({
  selector: 'layout-sidebar-left-collapse-icon',
  templateUrl: './layout-sidebar-left-collapse-icon.svg',
})
export class LayoutSidebarLeftCollapseIcon {
  @Input() height : string | number = 24
  @Input() width : string | number = 24
  @Input() color : string  = "currentColor"
}
