import { AfterViewInit, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { LayoutService } from '@layout/layout.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html'
})
export class ContentComponent implements AfterViewInit {
  @ViewChild('siderTemplateRef') siderTemplateRef: TemplateRef<any>;
  @ViewChild('extraTemplateRef') extraTemplateRef: TemplateRef<any>;

  constructor(
    private layout: LayoutService
  ) {
  }

  ngAfterViewInit(): void {
    this.layout.sider = this.siderTemplateRef;
    this.layout.extra = this.extraTemplateRef;
  }
}
