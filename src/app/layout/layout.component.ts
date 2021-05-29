import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutService } from './layout.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  title: string;
  siderOn = false;
  pageHeaderOn = false;
  pageHeaderBreadcrumbOn = false;

  private events$: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public layout: LayoutService,
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
      take(1)
    ).subscribe(data => {
      for (const key in data) {
        if (data.hasOwnProperty(key) &&
          data[key] !== undefined &&
          Reflect.has(this, key + 'On')
        ) {
          Reflect.set(this, key + 'On', data[key]);
        }
      }
      this.changeDetectorRef.detectChanges();
    });
    this.route.firstChild?.firstChild.data.pipe(
      take(1)
    ).subscribe(data => {
      if (data.hasOwnProperty('title')) {
        this.title = data.title;
      }
    });
  }
}
