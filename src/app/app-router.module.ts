import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppShareModule } from '@share';
import { LayoutComponent } from '@layout/layout.component';
import { LayoutModule } from '@layout/layout.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboards',
        loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule)
      },
      {
        path: 'projects',
        loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
      },
      {
        path: 'center',
        loadChildren: () => import('./center/center.module').then(m => m.CenterModule)
      },
      {
        path: '',
        redirectTo: '/dashboards',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    AppShareModule,
    LayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class AppRouterModule {
}
