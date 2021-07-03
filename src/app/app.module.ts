import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { AppShareModule } from "@share";

import { AppComponent } from "./app.component";
import { MatIconRegistry } from "@angular/material/icon";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./app-router.module").then(m => m.AppRouterModule)
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    AppShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private matIconRegistry: MatIconRegistry
  ) {
    this.matIconRegistry.setDefaultFontSetClass("material-icons-outlined");
  }
}
