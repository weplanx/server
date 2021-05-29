import { AfterViewInit, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { LayoutService } from '@layout/layout.service';

@Component({
  selector: 'app-content',
  template: `
    <ng-template #siderTemplateRef>
      <ng-content select="[app-sider]"></ng-content>
    </ng-template>
  `
})
export class ContentComponent implements AfterViewInit {
  @ViewChild('siderTemplateRef') siderTemplateRef: TemplateRef<any>;

  constructor(
    private layout: LayoutService
  ) {
  }

  ngAfterViewInit(): void {
    this.layout.sider = this.siderTemplateRef;
  }
}
