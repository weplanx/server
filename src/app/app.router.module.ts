import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppExtModule } from '@ext';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  }
];

@NgModule({
  imports: [
    AppExtModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LayoutComponent
  ]
})
export class AppRouterModule {
}
