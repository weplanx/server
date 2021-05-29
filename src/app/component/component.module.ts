import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { EmptyComponent } from './empty/empty.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [
    NzResultModule,
    NzButtonModule,
    RouterModule
  ],
  declarations: [
    ContentComponent,
    EmptyComponent
  ],
  exports: [
    ContentComponent,
    EmptyComponent
  ]
})
export class ComponentModule {
}
