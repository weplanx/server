import { NgModule } from "@angular/core";
import { NavModule } from "../nav/nav.module";
import { AppShareModule } from "@share";
import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from "./users.component";

const routes: Routes = [
  {
    path: "",
    component: UsersComponent,
    data: {
      title: "团队成员"
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
    UsersComponent
  ]
})
export class UsersModule {
}
