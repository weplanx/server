import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class MainService {
  constructor(
    private http: HttpClient
  ) {
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post("/api/auth", {
      email,
      password
    });
  }

  logout(): Observable<any> {
    return this.http.delete("/api/auth");
  }
}
