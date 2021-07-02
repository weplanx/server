import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  lists: any[] = [
    {
      name: 'kain'
    }
  ];

  form: FormGroup;
  formVisable = false;
  isEdit = false;


  constructor(
    private modal: NzModalService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
  }

  openUserForm(data?: any): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      name: [null]
    });
    this.modal.create({
      nzTitle: !data ? '创建成员' : '编辑成员',
      nzWidth: 420,
      nzContent: this.formContent,
      nzFooter: this.formFooter
    });
  }

  submit(data: any) {

  }
}
