import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable()
export class AppScope {
  id: string;
  username: string;
  isLoggedIn = false;
  login_hash: string;
  fullName: string;
  surname: string;
  qr: string;

  reset() {
    this.username = undefined;
    this.isLoggedIn = false;
    this.login_hash = undefined;
    this.fullName = undefined;
    this.qr = undefined;
    localStorage.removeItem(environment.projectName);
  }
}
