import { Directive, OnInit, TemplateRef } from "@angular/core";
import { ContentService } from "@common/content.service";

@Directive({
  selector: "[appExtra]"
})
export class ExtraDirective implements OnInit {
  constructor(
    private ref: TemplateRef<any>,
    private content: ContentService
  ) {
  }

  ngOnInit(): void {
    this.content.extra = this.ref;
  }
}
