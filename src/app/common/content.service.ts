import { Injectable, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ContentService {
  sider: TemplateRef<any>;
  extra: TemplateRef<any>;
}
