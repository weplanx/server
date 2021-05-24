import { Injectable, TemplateRef } from '@angular/core';

@Injectable()
export class LayoutService {
  sider: TemplateRef<any>;

  reset(): void {
    this.sider = undefined;
  }
}
