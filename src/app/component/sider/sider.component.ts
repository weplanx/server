import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { LayoutService } from '@layout/layout.service';

@Component({
  selector: 'app-sider',
  template: `
    <ng-template #ref>
      <ng-content></ng-content>
    </ng-template>
  `
})
export class SiderComponent implements AfterViewInit {
  @ViewChild(TemplateRef) ref: TemplateRef<any>;

  constructor(
    private layoutService: LayoutService
  ) {
  }

  ngAfterViewInit(): void {
    this.layoutService.sider.next(this.ref);
  }
}
