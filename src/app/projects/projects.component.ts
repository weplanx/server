import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  tags = [1, 2];
  listOfData: any[] = [
    {
      name: '解决方案 A'
    },
    {
      name: '解决方案 B'
    },
    {
      name: '解决方案 C'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
