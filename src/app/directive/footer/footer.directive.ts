import { Directive, OnInit, TemplateRef } from "@angular/core";
import { ContentService } from "@common/content.service";

@Directive({
  selector: "[appFooter]"
})
export class FooterDirective implements OnInit {
  constructor(
    private ref: TemplateRef<any>,
    private content: ContentService
  ) {
  }

  ngOnInit(): void {
    this.content.footer = this.ref;
  }
}
