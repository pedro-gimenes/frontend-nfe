import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthRequest } from "../../models/auth/auth-request";
import { AuthResponse } from "../../models/auth/auth-response";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = 'http://localhost:8080';

  constructor(
    private http: HttpClient
  ) {}

  login(body: AuthRequest): Observable<AuthResponse> {

    return this.http.post<AuthResponse>(
      `${this.api}/login`,
      body
    );

  }

  salvarToken(token: string) {

    localStorage.setItem(
      'token',
      token
    );

  }

  obterToken() {

    return localStorage.getItem(
      'token'
    );

  }

  logout() {

    localStorage.removeItem(
      'token'
    );

  }

}
