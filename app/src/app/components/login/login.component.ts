import { environment } from '../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppScope } from '../../shared/appScope';
import { Dictionary } from '../../shared/Dictionary';
import { translations } from './login.translate';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  id: string;
  isIdError = false;
  isQrError = false;
  errorText: string;
  home = 'home';
  public translate = new Dictionary(translations).translate;

  constructor(private router: Router,
              private loginService: LoginService,
              private appScope: AppScope,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const queryQr = this.activatedRoute.snapshot.queryParams.qr;
    if (queryQr){
      this.loginWithQr(queryQr);
      return;
    }
    const scope = localStorage.getItem(environment.projectName);
    if (scope) {
      Object.assign(this.appScope, ...JSON.parse(scope));
    }
    if (this.appScope.isLoggedIn) {
      this.router.navigate([this.home]);
      return;
    }
    // TODO: find a better way how to pass qr to here
    if (this.appScope.qr) {
      this.loginWithQr(this.appScope.qr);
    }
  }

  loginWithId(id: string) {
    if (!id) {
      this.errorText = this.translate('err_no_id');
      this.isIdError = true;
      return;
    }
    this.login(environment.projectName + '_' + id)
      .catch((e) => {
        this.isIdError = true;
        this.errorText = this.translate('err_invalid_id');
        console.log(e);
      });
  }

  loginWithQr(qr: string) {
    this.login(qr)
      .catch((e) => {
        this.isQrError = true;
        this.errorText = this.translate('err_invalid_qr');
        console.log(e);
      });
  }

  private login(id: string): Promise<void> {
    this.isIdError = false;
    this.isQrError = false;
    return this.loginService.login(id)
      .then(() => {
        this.router.navigate([this.home]);
      });
  }
}
