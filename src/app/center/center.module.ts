import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CenterComponent } from './center.component';
import { AppShareModule } from '@share';
import { NavComponent } from './nav/nav.component';
import { MailComponent } from './mail/mail.component';

const routes: Routes = [
  {
    path: '',
    component: CenterComponent,
    data: {
      title: '个人帐号'
    }
  },
  {
    path: 'mail',
    component: MailComponent,
    data: {
      title: '邮箱设置'
    }
  }
];

@NgModule({
  imports: [
    AppShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CenterComponent,
    NavComponent,
    MailComponent
  ]
})
export class CenterModule {
}
