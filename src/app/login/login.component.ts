import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NzNotificationService } from "ng-zorro-antd/notification";
import { MainService } from "@common/main.service";
import { particles } from "./particles";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  logining = false;
  particlesOptions = particles;

  constructor(
    private notification: NzNotificationService,
    private router: Router,
    private fb: FormBuilder,
    private main: MainService
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(12), Validators.maxLength(20)]]
    });
  }

  submit(data: any): void {
    this.logining = true;
    this.main.login(data.email, data.password).subscribe(res => {
      switch (res.error) {
        case 0:
          this.notification.success("认证提示", "登录成功，正在加载数据~");
          this.router.navigateByUrl("/");
          break;
        case 1:
          this.notification.error("认证提示", "您的登录失败，请确实账户口令是否正确");
          break;
        case 2:
          this.notification.error("认证提示", "您登录失败的次数过多，请稍后再试");
          break;
      }
      this.logining = false;
    });
  }
}
