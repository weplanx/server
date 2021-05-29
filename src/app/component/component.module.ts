import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SiderComponent } from './sider/sider.component';
import { EmptyComponent } from './empty/empty.component';

@NgModule({
  imports: [
    NzResultModule,
    NzButtonModule,
    RouterModule
  ],
  declarations: [
    SiderComponent,
    EmptyComponent
  ],
  exports: [
    SiderComponent,
    EmptyComponent
  ]
})
export class ComponentModule {
}
