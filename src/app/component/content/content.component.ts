import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
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
    private layoutService: LayoutService
  ) {
  }

  ngAfterViewInit(): void {
    this.layoutService.sider.next(this.siderTemplateRef);
  }
}
