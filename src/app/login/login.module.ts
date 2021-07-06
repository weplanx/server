import { NgModule } from "@angular/core";
import { AppShareModule } from "@share";
import { RouterModule, Routes } from "@angular/router";
import { NgParticlesModule } from "ng-particles";
import { LoginComponent } from "./login.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    AppShareModule,
    NgParticlesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule {
}
