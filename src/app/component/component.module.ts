import { NgModule } from '@angular/core';
import { LayoutSiderComponent } from './layout-sider/layout-sider.component';
import { BuildingComponent } from './building/building.component';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RouterModule } from '@angular/router';
import { EmptyComponent } from './empty/empty.component';

@NgModule({
  imports: [
    NzResultModule,
    NzButtonModule,
    RouterModule
  ],
  declarations: [
    LayoutSiderComponent,
    EmptyComponent,
    BuildingComponent
  ],
  exports: [
    LayoutSiderComponent,
    EmptyComponent,
    BuildingComponent
  ]
})
export class ComponentModule {
}
