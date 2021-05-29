import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_CONFIG, NzConfig } from 'ng-zorro-antd/core/config';
import { RouterModule, Routes } from '@angular/router';
import { AppShareModule } from '@share';

import en from '@angular/common/locales/en';

registerLocaleData(en);

import { AppComponent } from './app.component';
import { ContentService } from '@common/content.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./app-router.module').then(m => m.AppRouterModule)
  }
];

const ngZorroConfig: NzConfig = {
  notification: { nzPlacement: 'bottomRight' }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppShareModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [
    ContentService,
    { provide: NZ_CONFIG, useValue: ngZorroConfig },
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
