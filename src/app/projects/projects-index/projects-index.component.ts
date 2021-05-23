import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-index',
  templateUrl: './projects-index.component.html',
  styleUrls: ['./projects-index.component.scss']
})
export class ProjectsIndexComponent {
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
}
