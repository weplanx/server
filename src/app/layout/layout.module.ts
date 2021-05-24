import { NgModule } from '@angular/core';
import { AppShareModule } from '@share';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { LayoutService } from './layout.service';

@NgModule({
  imports: [
    AppShareModule,
    RouterModule
  ],
  declarations: [
    LayoutComponent
  ],
  exports: [
    LayoutComponent
  ],
  providers: [
    LayoutService
  ]
})
export class LayoutModule {
}
