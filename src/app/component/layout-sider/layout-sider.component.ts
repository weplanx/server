import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { LayoutService } from '@layout/layout.service';

@Component({
  selector: 'app-layout-sider',
  template: `
    <ng-template #ref>
      <ng-content></ng-content>
    </ng-template>
  `
})
export class LayoutSiderComponent implements AfterViewInit {
  @ViewChild(TemplateRef) ref: TemplateRef<any>;

  constructor(
    private layoutService: LayoutService
  ) {
  }

  ngAfterViewInit(): void {
    this.layoutService.sider.next(this.ref);
  }
}
