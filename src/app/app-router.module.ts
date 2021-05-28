import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppShareModule } from '@share';
import { LayoutComponent } from '@layout/layout.component';
import { LayoutModule } from '@layout/layout.module';
import { EmptyComponent } from './component/empty/empty.component';
import { WorkbenchModule } from './workbench/workbench.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'workbench',
        loadChildren: () => import('./workbench/workbench.module').then(m => m.WorkbenchModule),
        data: {
          control: {
            sider: true,
            pageHeader: false,
            pageHeaderBreadcrumb: false
          }
        }
      },
      {
        path: 'projects',
        loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule),
        data: {
          control: {
            sider: true,
            pageHeader: true,
            pageHeaderBreadcrumb: false
          }
        }
      },
      {
        path: 'center',
        loadChildren: () => import('./center/center.module').then(m => m.CenterModule),
        data: {
          control: {
            sider: true,
            pageHeader: false,
            pageHeaderBreadcrumb: false
          }
        }
      },
      {
        path: '',
        redirectTo: '/workbench',
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
    WorkbenchModule,
    RouterModule.forChild(routes)
  ]
})
export class AppRouterModule {
}
