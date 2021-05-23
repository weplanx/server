import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkbenchComponent } from './workbench.component';
import { AppShareModule } from '@share';
import { LayoutService } from '../layout/layout.service';

const routes: Routes = [
  {
    path: '',
    component: WorkbenchComponent
  }
];

@NgModule({
  imports: [
    AppShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    WorkbenchComponent
  ],
  exports: [
    WorkbenchComponent
  ]
})
export class WorkbenchModule {
}
