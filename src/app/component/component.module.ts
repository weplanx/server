import { NgModule } from '@angular/core';
import { EmptyComponent } from './empty/empty.component';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    NzResultModule,
    NzButtonModule,
    RouterModule
  ],
  declarations: [
    EmptyComponent
  ],
  exports: [
    EmptyComponent
  ]
})
export class ComponentModule {
}
