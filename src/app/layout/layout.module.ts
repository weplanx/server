import { NgModule } from "@angular/core";
import { AppShareModule } from "@share";
import { LayoutComponent } from "./layout.component";
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  imports: [
    AppShareModule,
    MatToolbarModule

  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent]
})
export class LayoutModule {
}
