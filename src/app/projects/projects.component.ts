import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html"
})
export class ProjectsComponent implements OnInit {
  lists: any[] = [
    {
      name: "解决方案 Test"
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}

