import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  constructor() { }

  id: string;
  username = 'Karina';
  isLoggedIn = false;
  login_hash: string;
  fullName: string;
  surname: string;

  reset() {
    this.username = undefined;
    this.isLoggedIn = false;
    this.login_hash = undefined;
    this.fullName = undefined;
  }
}
