import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppShareModule } from "@share";

const routes: Routes = [];

@NgModule({
  imports: [
    AppShareModule,
    RouterModule.forChild(routes)
  ]
})
export class AppRouterModule {
}
