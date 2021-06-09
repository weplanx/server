import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router
  ) {
  }

  canActivate(): Observable<boolean> {
    return of(false).pipe(
      map(v => {
        if (!v) {
          this.router.navigateByUrl('/login');
        }
        return v;
      })
    );
  }
}
