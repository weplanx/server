import { NgModule } from "@angular/core";
import { SiderDirective } from "./sider/sider.directive";
import { ExtraDirective } from "./extra/extra.directive";
import { FooterDirective } from "./footer/footer.directive";
import { SubmitDirective } from "./submit/submit.directive";

@NgModule({
  declarations: [
    SiderDirective,
    ExtraDirective,
    FooterDirective,
    SubmitDirective
  ],
  exports: [
    SiderDirective,
    ExtraDirective,
    FooterDirective,
    SubmitDirective
  ]
})
export class DirectiveModule {
}
