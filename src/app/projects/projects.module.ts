import { NgModule } from '@angular/core';
import { AppShareModule } from '@share';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsIndexComponent } from './projects-index/projects-index.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsIndexComponent
  },
  {
    path: ':key',
    component: ProjectsPageComponent
  }
];

@NgModule({
  imports: [
    AppShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProjectsIndexComponent,
    ProjectsPageComponent
  ],
  exports: [
    ProjectsIndexComponent,
    ProjectsPageComponent
  ]
})
export class ProjectsModule {
}
