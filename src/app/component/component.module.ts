import { NgModule } from '@angular/core';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RouterModule } from '@angular/router';
import { EmptyComponent } from './empty/empty.component';
import { SearchToolboxComponent } from './search-toolbox/search-toolbox.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  imports: [
    NzIconModule,
    NzResultModule,
    NzButtonModule,
    NzToolTipModule,
    RouterModule
  ],
  declarations: [
    EmptyComponent,
    SearchToolboxComponent
  ],
  exports: [
    EmptyComponent,
    SearchToolboxComponent
  ]
})
export class ComponentModule {
}
