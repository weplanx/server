import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppShareModule } from '@share';
import { DashboardsComponent } from './dashboards.component';
import { AppRouterModule } from '../app-router.module';
import { NavModule } from '../nav/nav.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardsComponent,
    data: {
      title: '监控'
    }
  }
];

@NgModule({
  imports: [
    NavModule,
    AppShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DashboardsComponent
  ],
  exports: [
    DashboardsComponent
  ]
})
export class DashboardsModule {
}
