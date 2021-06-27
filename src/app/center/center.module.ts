import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CenterComponent } from './center.component';
import { AppShareModule } from '@share';
import { NavComponent } from './nav/nav.component';
import { MailComponent } from './mail/mail.component';
import { UsersComponent } from './users/users.component';

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
  },
  {
    path: 'users',
    component: UsersComponent,
    data: {
      title: '团队成员'
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
    MailComponent,
    UsersComponent
  ]
})
export class CenterModule {
}
