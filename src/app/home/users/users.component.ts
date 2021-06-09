import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  form: FormGroup;
  @ViewChild('userFormTemplate') userFormTemplate: TemplateRef<any>;
  listOfData: any[] = [
    {
      name: 'kain'
    }
  ];

  constructor(
    private modal: NzModalService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
  }

  openUserForm(data?: any): void {
    this.form = this.fb.group({
      username: [],
      email: [],
      call: []
    });
    this.modal.create({
      nzWidth: 420,
      nzTitle: !data ? '创建成员' : '编辑成员',
      nzContent: this.userFormTemplate
    });
  }
}
