import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-toolbox',
  template: `
    <ng-template #ref>
      <nz-button-group>
        <button nz-button nz-tooltip="刷新">
          <i nz-icon nzType="sync"></i>
        </button>
        <button nz-button nz-tooltip="清除搜索">
          <i nz-icon nzType="clear"></i>
        </button>
        <button nz-button nz-tooltip="删除选中" nzDanger [disabled]="true">
          <i nz-icon nzType="delete"></i>
        </button>
      </nz-button-group>
    </ng-template>
  `
})
export class SearchToolboxComponent {
  @ViewChild(TemplateRef) ref: TemplateRef<any>;
}
