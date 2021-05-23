import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppShareModule } from '@share';
import { LayoutComponent } from './layout/layout.component';
import { PagesModule } from './pages/pages.module';
import { EmptyComponent } from './pages/empty.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'workbench',
        loadChildren: () => import('./workbench/workbench.module').then(m => m.WorkbenchModule)
      },
      {
        path: 'projects',
        loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
      },
      {
        path: 'console',
        loadChildren: () => import('./console/console.module').then(m => m.ConsoleModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'center',
        loadChildren: () => import('./center/center.module').then(m => m.CenterModule)
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: EmptyComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    AppShareModule,
    PagesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LayoutComponent
  ]
})
export class AppRouterModule {
}
