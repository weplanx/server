import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CenterComponent } from "./center.component";
import { AppShareModule } from "@share";
import { NavModule } from "../nav/nav.module";

const routes: Routes = [
  {
    path: "",
    component: CenterComponent,
    data: {
      title: null
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
    CenterComponent
  ]
})
export class CenterModule {
}
