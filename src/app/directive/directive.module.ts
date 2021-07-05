import { NgModule } from "@angular/core";
import { SiderDirective } from "./sider/sider.directive";
import { ExtraDirective } from "./extra/extra.directive";
import { FooterDirective } from "./footer/footer.directive";

@NgModule({
  declarations: [
    SiderDirective,
    ExtraDirective,
    FooterDirective
  ],
  exports: [
    SiderDirective,
    ExtraDirective,
    FooterDirective
  ]
})
export class DirectiveModule {
}
