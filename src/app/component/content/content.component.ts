import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { ContentService } from '@common/content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html'
})
export class ContentComponent implements AfterViewInit {
  @ViewChild('siderTemplateRef') siderTemplateRef: TemplateRef<any>;
  @ViewChild('extraTemplateRef') extraTemplateRef: TemplateRef<any>;

  constructor(
    private content: ContentService
  ) {
  }

  ngAfterViewInit(): void {
    this.content.sider = this.siderTemplateRef;
    this.content.extra = this.extraTemplateRef;
  }
}
