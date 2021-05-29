import { NgModule } from '@angular/core';
import { AppShareModule } from '@share';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { StatusComponent } from './status/status.component';
import { NavComponent } from './nav/nav.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { ScheduleComponent } from './schedule/schedule.component';

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
    component: StatusComponent,
    data: {
      title: '服务状态'
    }
  },
  {
    path: 'key/:key/authorization',
    component: AuthorizationComponent,
    data: {
      title: '应用授权'
    }
  },
  {
    path: 'key/:key/schedule',
    component: ScheduleComponent,
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
    NavComponent,
    StatusComponent,
    AuthorizationComponent,
    ScheduleComponent
  ]
})
export class ProjectsModule {
}
