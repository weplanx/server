import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';
import { ContentService } from '@common/content.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  title: string;
  private events$: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public content: ContentService,
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
    this.changeDetectorRef.detectChanges();
    this.route.firstChild?.firstChild?.data.pipe(
      take(1)
    ).subscribe(data => {
      if (data.hasOwnProperty('title')) {
        this.title = data.title;
      }
    });
  }
}
