import { Directive, EventEmitter, OnInit, Output } from "@angular/core";
import { FormGroupDirective } from "@angular/forms";

@Directive({
  selector: "form[appSubmit]"
})
export class SubmitDirective implements OnInit {
  @Output() appSubmit: EventEmitter<any> = new EventEmitter();

  constructor(
    private form: FormGroupDirective
  ) {
  }

  ngOnInit(): void {
    this.form.ngSubmit.subscribe(_ => {
      const controls = this.form.control.controls;
      for (const key in controls) {
        if (controls.hasOwnProperty(key)) {
          controls[key].markAsDirty();
          controls[key].updateValueAndValidity();
        }
      }
      this.appSubmit.emit(this.form.value);
    });
  }
}
