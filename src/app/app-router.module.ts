import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppShareModule } from '@share';
import { LayoutComponent } from '@layout/layout.component';
import { LayoutModule } from '@layout/layout.module';
import { EmptyComponent } from './component/empty/empty.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        data: {
          sider: true,
          pageHeader: false,
          pageHeaderBreadcrumb: false
        }
      },
      {
        path: 'projects',
        loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule),
        data: {
          sider: true,
          pageHeader: true,
          pageHeaderBreadcrumb: false
        }
      },
      {
        path: 'center',
        loadChildren: () => import('./center/center.module').then(m => m.CenterModule),
        data: {
          sider: true,
          pageHeader: false,
          pageHeaderBreadcrumb: false
        }
      },
      {
        path: '',
        redirectTo: '/home',
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
    LayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class AppRouterModule {
}
