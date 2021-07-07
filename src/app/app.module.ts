import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NZ_I18N, zh_CN } from "ng-zorro-antd/i18n";
import { registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NZ_CONFIG, NzConfig } from "ng-zorro-antd/core/config";
import { RouterModule, Routes } from "@angular/router";
import { AppShareModule } from "@share";

import zh from "@angular/common/locales/zh";

registerLocaleData(zh);

import { AppComponent } from "./app.component";
import { ContentService } from "@common/content.service";
import { AuthGuard } from "@common/auth.guard";
import { MainService } from "@common/main.service";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./app-router.module").then(m => m.AppRouterModule),
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    loadChildren: () => import("./login/login.module").then(m => m.LoginModule)
  }
];

const ngZorroConfig: NzConfig = {
  notification: { nzPlacement: "bottomRight" },
  table: { nzSize: "middle" },
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppShareModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [
    AuthGuard,
    ContentService,
    MainService,
    { provide: NZ_CONFIG, useValue: ngZorroConfig },
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
