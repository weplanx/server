import { Injectable, TemplateRef } from '@angular/core';
import { BreadcrumbOption } from '@common/types';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContentService {
  /**
   * Content Left Sider
   */
  sider: BehaviorSubject<TemplateRef<any>> = new BehaviorSubject<TemplateRef<any>>(null);
  /**
   * Content Page Header Breadcrumb
   */
  breadcrumb: BehaviorSubject<BreadcrumbOption[]> = new BehaviorSubject<BreadcrumbOption[]>([]);
  /**
   * Content Page Header Extra
   */
  extra: BehaviorSubject<TemplateRef<any>> = new BehaviorSubject<TemplateRef<any>>(null);

  /**
   * On Change Clear
   */
  clear(): void {
    this.breadcrumb.next([]);
    this.extra.next(null);
  }
}
