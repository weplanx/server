import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

@NgModule({
  exports: [
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzPageHeaderModule,
    NzDescriptionsModule,
    NzButtonModule,
    NzAvatarModule,
    NzBadgeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppExtModule {
}
