import { NgModule } from "@angular/core";
import { NavModule } from "../nav/nav.module";
import { AppShareModule } from "@share";
import { RouterModule, Routes } from "@angular/router";
import { AuditComponent } from "./audit.component";

const routes: Routes = [
  {
    path: "",
    component: AuditComponent,
    data: {
      title: "安全审计"
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
    AuditComponent
  ]
})
export class AuditModule {

}
