import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { particles } from "./particles";
import { Router } from "@angular/router";
import { NzNotificationService } from "ng-zorro-antd/notification";
import { MainService } from "@common/main.service";

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
    console.log(data);
  }
}
