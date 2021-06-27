import { Component, Input, OnInit } from '@angular/core';
import { ContentService } from '@common/content.service';

@Component({
  selector: 'app-project-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
  @Input() key: string;

  constructor(
    private content: ContentService
  ) {
  }

  ngOnInit(): void {
    if (!this.key) {
      return;
    }
    this.content.breadcrumb.next([
      { name: '所有项目', routerlink: ['/projects'] },
      { name: '解决方案 A' }
    ]);
  }

  open(path: string[] = []): any[] {
    return ['/projects', 'key', this.key, ...path];
  }
}
