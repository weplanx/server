import { NgModule } from "@angular/core";
import { AppShareModule } from "@share";
import { RouterModule, Routes } from "@angular/router";
import { ProjectsComponent } from "./projects.component";
import { ScheduleComponent } from "./schedule/schedule.component";
import { NavComponent } from "./nav/nav.component";
import { NavModule } from "../nav/nav.module";
import { MqComponent } from "./mq/mq.component";
import { MqRobotComponent } from "./mq-robot/mq-robot.component";
import { ImComponent } from "./im/im.component";

const routes: Routes = [
  {
    path: "",
    component: ProjectsComponent,
    data: {
      title: "我的项目"
    }
  },
  {
    path: "key/:key/schedule",
    component: ScheduleComponent,
    data: {
      title: "计划任务"
    }
  },
  {
    path: "key/:key/im",
    component: ImComponent,
    data: {
      title: "即时通讯"
    }
  },
  {
    path: "key/:key/mq",
    component: MqComponent,
    data: {
      title: "消息队列"
    }
  },
  {
    path: "key/:key/mq-robot",
    component: MqRobotComponent,
    data: {
      title: "队列触发器"
    }
  },
  {
    path: "key/:key",
    redirectTo: "/projects/key/:key/schedule",
    pathMatch: "full"
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
    NavComponent,
    ScheduleComponent,
    ImComponent,
    MqComponent,
    MqRobotComponent
  ]
})
export class ProjectsModule {
}
