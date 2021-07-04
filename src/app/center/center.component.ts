import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-center",
  templateUrl: "./center.component.html"
})
export class CenterComponent implements OnInit {
  loading = false;
  avatarUrl?: string;

  constructor() {
  }

  ngOnInit() {
  }

}
