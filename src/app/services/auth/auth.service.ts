import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private readonly VALID_USERNAME = 'admin';
  private readonly VALID_PASSWORD = 'password123';

  constructor(private router: Router) {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      this.isAuthenticatedSubject.next(true);
    }
  }

  login(username: string | undefined | null, password: string | undefined | null): boolean {
    if (username === this.VALID_USERNAME && password === this.VALID_PASSWORD) {
      localStorage.setItem('authToken', 'valid_token');
      this.isAuthenticatedSubject.next(true);
      this.router.navigate(["/jsonTable"]);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.isAuthenticatedSubject.next(false);
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

}
