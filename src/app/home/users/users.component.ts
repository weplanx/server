import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent {
  @ViewChild('userFormTemplate') userFormTemplate: TemplateRef<any>;
  listOfData: any[] = [
    {
      name: 'kain'
    }
  ];

  constructor(
    private modal: NzModalService
  ) {
  }

  openUserForm(data?: any): void {
    this.modal.create({
      nzWidth: 800,
      nzTitle: !data ? '创建成员' : '编辑成员',
      nzContent: this.userFormTemplate
    });
  }
}
