import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-index',
  templateUrl: './projects-index.component.html'
})
export class ProjectsIndexComponent implements OnInit {
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
