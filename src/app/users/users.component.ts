import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { NzModalService } from "ng-zorro-antd/modal";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html"
})
export class UsersComponent implements OnInit {
  lists: any[] = [
    {
      email: "zhangtqx@vip.qq.com",
      name: "kain",
      status: true
    }
  ];

  form: FormGroup;
  formVisable = false;
  formData: any;

  constructor(
    private modal: NzModalService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
  }

  openUserForm(data?: any): void {
    this.formVisable = true;
    this.formData = data;
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      name: [null]
    });
    if (this.formData) {
      this.form.patchValue(this.formData);
    }
  }

  closeUserForm(): void {
    this.formVisable = false;
  }

  submit(data: any) {
    console.log(data);
  }
}
