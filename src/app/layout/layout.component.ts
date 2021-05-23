import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutService } from './layout.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, take, takeUntil } from 'rxjs/operators';
import { LayoutNav } from './types';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  navItems: LayoutNav[] = [
    { name: 'Dashboard', icon: 'dashboard', router: 'dashboard' },
    { name: 'Workbench', icon: 'desktop', router: 'workbench' },
    { name: 'Projects', icon: 'project', router: 'projects' },
    { name: 'Console', icon: 'code', router: 'console' }
  ];

  siderOn = false;
  pageHeaderOn = false;
  pageHeaderBreadcrumbOn = false;

  private events$: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private layoutService: LayoutService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.layoutUpdate();
    this.events$ = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(() => {
      this.layoutUpdate();
    });
  }

  ngOnDestroy(): void {
    this.events$.unsubscribe();
  }

  private layoutUpdate(): void {
    this.route.firstChild.data.pipe(
      take(1),
      map(v => !v.control ? null : v.control)
    ).subscribe(control => {
      if (!control) {
        return;
      }
      let changed = false;
      for (const key in control) {
        if (control.hasOwnProperty(key) && control[key] !== undefined) {
          Reflect.set(this, key + 'On', control[key]);
          changed = true;
        }
      }
      if (changed) {
        this.changeDetectorRef.detectChanges();
      }
    });
  }
}
