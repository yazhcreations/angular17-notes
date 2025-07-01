import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _isLoggedIn = signal(false);

  isLoggedIn = this._isLoggedIn.asReadonly();

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      this._isLoggedIn.set(true);
      return true;
    }
    return false;
  }

  logout() {
    this._isLoggedIn.set(false);
  }
}
