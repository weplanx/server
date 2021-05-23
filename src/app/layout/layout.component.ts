import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  listOfData: any[] = [
    {
      name: 'Solution A',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Solution B',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      name: 'Solution C',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
}
