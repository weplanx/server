import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationsComponent } from './notifications.component';
import { AppShareModule } from '@share';

const routes: Routes = [
  {
    path: '',
    component: NotificationsComponent
  }
];

@NgModule({
  imports: [
    AppShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    NotificationsComponent
  ],
  exports: [
    NotificationsComponent
  ]
})
export class NotificationsModule {
}
