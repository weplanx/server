import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsoleComponent } from './console.component';
import { AppShareModule } from '@share';

const routes: Routes = [
  {
    path: '',
    component: ConsoleComponent
  }
];

@NgModule({
  imports: [
    AppShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ConsoleComponent
  ],
  exports: [
    ConsoleComponent
  ]
})
export class ConsoleModule {
}
