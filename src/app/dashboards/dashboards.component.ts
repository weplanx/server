import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboards",
  templateUrl: "./dashboards.component.html"
})
export class DashboardsComponent implements OnInit {
  lists: any[] = [
    {
      name: "解决方案 Test"
    }
  ];
  deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

  ngOnInit(): void {
  }
}
