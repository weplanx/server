import { NgModule } from '@angular/core';
import { AppShareModule } from '@share';
import { EmptyComponent } from './empty.component';

@NgModule({
  imports: [
    AppShareModule
  ],
  declarations: [
    EmptyComponent
  ],
  exports: [
    EmptyComponent
  ]
})
export class PagesModule {
}
