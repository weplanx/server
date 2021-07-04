import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { AppShareModule } from '@share';

@NgModule({
  imports: [
    AppShareModule
  ],
  declarations: [
    LayoutComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule {
}
