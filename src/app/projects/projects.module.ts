import { NgModule } from '@angular/core';
import { AppShareModule } from '@share';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ArchiveComponent } from './archive/archive.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { MessageQueueComponent } from './message-queue/message-queue.component';
import { MessageTopicComponent } from './message-topic/message-topic.component';
import { MessageTriggerComponent } from './message-trigger/message-trigger.component';
import { NavComponent } from './nav/nav.component';
import { NavModule } from '../nav/nav.module';

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
    path: 'key/:key/schedule',
    component: ScheduleComponent,
    data: {
      title: '任务调度'
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
    path: 'key/:key',
    redirectTo: '/projects/key/:key/schedule',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    NavModule,
    AppShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProjectsComponent,
    ArchiveComponent,
    NavComponent,
    ScheduleComponent,
    MessageQueueComponent,
    MessageTopicComponent,
    MessageTriggerComponent
  ]
})
export class ProjectsModule {
}
