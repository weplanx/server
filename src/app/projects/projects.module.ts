import { NgModule } from '@angular/core';
import { AppShareModule } from '@share';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { StatusComponent } from './status/status.component';
import { NavComponent } from './nav/nav.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ServerComponent } from './server/server.component';
import { ContainerComponent } from './container/container.component';
import { MessageQueueComponent } from './message-queue/message-queue.component';
import { MessageTopicComponent } from './message-topic/message-topic.component';
import { MessageTriggerComponent } from './message-trigger/message-trigger.component';
import { ImTokenComponent } from './im-token/im-token.component';
import { ImTopicComponent } from './im-topic/im-topic.component';
import { SubNavComponent } from './sub-nav/sub-nav.component';
import { ArchiveComponent } from './archive/archive.component';

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
    component: ArchiveComponent,
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
    path: 'key/:key/server',
    component: ServerComponent,
    data: {
      title: '服务器节点'
    }
  },
  {
    path: 'key/:key/container',
    component: ContainerComponent,
    data: {
      title: '容器编排'
    }
  },
  {
    path: 'key/:key/message-queue',
    component: MessageQueueComponent,
    data: {
      title: '队列管理'
    }
  },
  {
    path: 'key/:key/message-topic',
    component: MessageTopicComponent,
    data: {
      title: '主题管理'
    }
  },
  {
    path: 'key/:key/message-trigger',
    component: MessageTriggerComponent,
    data: {
      title: '自动网络回调'
    }
  },
  {
    path: 'key/:key/im-token',
    component: ImTokenComponent,
    data: {
      title: '认证令牌'
    }
  },
  {
    path: 'key/:key/im-topic',
    component: ImTopicComponent,
    data: {
      title: '通讯主题'
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
    NavComponent,
    ProjectsComponent,
    ArchiveComponent,
    SubNavComponent,
    StatusComponent,
    AuthorizationComponent,
    ScheduleComponent,
    ServerComponent,
    ContainerComponent,
    MessageQueueComponent,
    MessageTopicComponent,
    MessageTriggerComponent,
    ImTokenComponent,
    ImTopicComponent
  ]
})
export class ProjectsModule {
}
