import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AppShareModule } from '@share';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    AppShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {
}
