import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutService } from './layout.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, take } from 'rxjs/operators';
import { navItems } from '@layout/nav-items';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  navItems = navItems;
  siderOn = false;
  pageHeaderOn = false;
  pageHeaderBreadcrumbOn = false;

  private events$: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public layoutService: LayoutService,
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
      this.layoutService.reset();
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
