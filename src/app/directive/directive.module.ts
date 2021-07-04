import { NgModule } from '@angular/core';
import { SiderDirective } from './sider/sider.directive';
import { ExtraDirective } from './extra/extra.directive';

@NgModule({
  declarations: [
    SiderDirective,
    ExtraDirective
  ],
  exports: [
    SiderDirective,
    ExtraDirective
  ]
})
export class DirectiveModule {
}
