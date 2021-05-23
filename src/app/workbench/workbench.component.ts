import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout/layout.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-workbench',
  templateUrl: './workbench.component.html',
  styleUrls: ['./workbench.component.scss']
})
export class WorkbenchComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private layoutService: LayoutService
  ) {
  }

  ngOnInit(): void {
  }
}
