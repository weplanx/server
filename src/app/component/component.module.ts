import { NgModule } from '@angular/core';
import { ContentComponent } from './content/content.component';
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
