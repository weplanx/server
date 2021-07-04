import { NgModule } from '@angular/core';
import { NavComponent } from './nav.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { DirectiveModule } from '../directive/directive.module';

@NgModule({
  imports: [
    NzMenuModule,
    RouterModule,
    NzIconModule,
    DirectiveModule
  ],
  declarations: [
    NavComponent
  ],
  exports: [
    NavComponent
  ]
})
export class NavModule {
}
