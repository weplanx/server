import { NgModule } from "@angular/core";
import { AppShareModule } from "@share";
import { LayoutComponent } from "./layout.component";

@NgModule({
  imports: [
    AppShareModule

  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent]
})
export class LayoutModule {
}
