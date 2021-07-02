import { Injectable, TemplateRef } from "@angular/core";
import { BreadcrumbOption } from "@common/types";

@Injectable({ providedIn: "root" })
export class ContentService {
  /**
   * Content Left Sider
   */
  sider: TemplateRef<any>;
  /**
   * Content Page Header Breadcrumb
   */
  breadcrumb: BreadcrumbOption[] = [];
  /**
   * Content Page Header Extra
   */
  extra: TemplateRef<any>;

  /**
   * On Change Clear
   */
  clear(): void {
    this.breadcrumb = [];
    this.extra = null;
  }
}
