import { Directive, OnInit, TemplateRef } from "@angular/core";
import { ContentService } from "@common/content.service";

@Directive({
  selector: "[appSider]"
})
export class SiderDirective implements OnInit {
  constructor(
    private ref: TemplateRef<any>,
    private content: ContentService
  ) {
  }

  ngOnInit(): void {
    this.content.sider = this.ref;
  }
}
