import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  canActivate(): Observable<any> {
    return this.http.get("/api/verify").pipe(
      map((res: any) => {
        if (res.error) {
          this.router.navigateByUrl("/login");
        }
        return !res.error;
      })
    );
  }
}
