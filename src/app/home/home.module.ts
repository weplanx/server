import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppShareModule } from '@share';
import { HomeComponent } from './home.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: '仪表盘'
    }
  }

];

@NgModule({
  imports: [
    AppShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent,
    NavComponent
  ]
})
export class HomeModule {
}
