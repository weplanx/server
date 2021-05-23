import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout/layout.service';

@Component({
  selector: 'app-workbench',
  templateUrl: './workbench.component.html',
  styleUrls: ['./workbench.component.scss']
})
export class WorkbenchComponent implements OnInit {
  constructor(
    private layoutService: LayoutService
  ) {
  }

  ngOnInit(): void {
  }
}
