import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CenterComponent } from './center.component';
import { AppShareModule } from '@share';

const routes: Routes = [
  {
    path: '',
    component: CenterComponent
  }
];

@NgModule({
  imports: [
    AppShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CenterComponent
  ],
  exports: [
    CenterComponent
  ]
})
export class CenterModule {
}
