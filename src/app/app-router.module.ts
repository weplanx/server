import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppShareModule } from "@share";
import { LayoutComponent } from "./layout/layout.component";
import { LayoutModule } from "./layout/layout.module";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: []
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
