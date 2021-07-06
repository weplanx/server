import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { particles } from "./particles";
import { Router } from "@angular/router";
import { NzNotificationService } from "ng-zorro-antd/notification";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  form: FormGroup;
  users: any[] = [];
  logining = false;
  particlesOptions = particles;

  constructor(
    private notification: NzNotificationService,
    private router: Router,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(12), Validators.maxLength(20)]],
      remember: [1, [Validators.required]]
    });
  }
}
