import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects-status',
  templateUrl: './status.component.html'
})
export class StatusComponent implements OnInit {
  key: string;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.key = params.key;
    });
  }
}
