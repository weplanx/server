import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LayoutService {
  sider: BehaviorSubject<TemplateRef<any>> = new BehaviorSubject<TemplateRef<any>>(null);

}
