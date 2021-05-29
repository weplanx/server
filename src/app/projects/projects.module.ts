import { NgModule } from '@angular/core';
import { AppShareModule } from '@share';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    data: {
      title: '我的项目'
    }
  },
  {
    path: 'archive',
    component: ProjectsComponent,
    data: {
      title: '已归档'
    }
  },
  {
    path: 'key/:key/status',
    component: ProjectsPageComponent,
    data: {
      title: '服务状态'
    }
  },
  {
    path: 'key/:key/authorization',
    component: ProjectsPageComponent,
    data: {
      title: '应用授权'
    }
  },
  {
    path: 'key/:key/schedule',
    component: ProjectsPageComponent,
    data: {
      title: '任务调度'
    }
  },
  {
    path: 'key/:key',
    redirectTo: '/projects/key/:key/status',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    AppShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProjectsComponent,
    ProjectsPageComponent
  ],
  exports: [
    ProjectsComponent,
    ProjectsPageComponent
  ]
})
export class ProjectsModule {
}
