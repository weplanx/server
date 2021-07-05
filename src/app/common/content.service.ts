import { Injectable, TemplateRef } from "@angular/core";
import { BreadcrumbOption } from "@common/types";

@Injectable({ providedIn: "root" })
export class ContentService {
  /**
   * 左侧导航
   */
  sider: TemplateRef<any>;
  /**
   * 面包屑
   */
  breadcrumb: BreadcrumbOption[] = [];
  /**
   * 页头操作版块
   */
  extra: TemplateRef<any>;
  /**
   * 页头底部版块
   */
  footer: TemplateRef<any>;

  /**
   * 清空内容
   */
  clear(): void {
    this.breadcrumb = [];
    this.extra = null;
    this.footer = null;
  }
}
