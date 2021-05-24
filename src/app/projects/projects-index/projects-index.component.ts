import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../layout/layout.service';

@Component({
  selector: 'app-projects-index',
  templateUrl: './projects-index.component.html',
  styleUrls: ['./projects-index.component.scss']
})
export class ProjectsIndexComponent implements OnInit {
  tags = [1, 2];
  listOfData: any[] = [
    {
      name: 'Solution A'
    },
    {
      name: 'Solution B'
    },
    {
      name: 'Solution C'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
