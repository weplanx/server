import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
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
