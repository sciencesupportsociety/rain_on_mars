import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GeneralHttpService, ResponseData } from '../../shared/general-http.service';
import { AppScope } from '../../shared/appScope';
import { PATH } from './../../shared/settings';

@Injectable()
export class LoginService extends GeneralHttpService {

  constructor(protected http: Http, protected appScope: AppScope) {
    super(http, appScope);
  }

  login(qr: string): Promise<void> {
    const request = { data: { static_qr_code: qr } };
    return this.post(PATH.login, request)
      .then(this.setLoginData)
      .then(this.getConsumerData)
      .then(this.setConsumerData);
  }

  private setLoginData = (loginResponse: any): void => {
    this.appScope.login_hash = loginResponse.login_hash;
    this.appScope.username = loginResponse.username;
  }

  private getConsumerData = (): Promise<any> => {
    const request = {
      data: {
        ...this.requestTemplate(),
        operation: 'demand_consumer',
        work: 'data',
      },
    };
    return this.post(PATH.wOutput, request);
  }

  private setConsumerData = (consumerResponse: any): void => {
    this.appScope.id = consumerResponse.id;
    this.appScope.qr = consumerResponse.static_qr;
    this.appScope.fullName = consumerResponse.name + ' ' + consumerResponse.surname;
    this.appScope.isLoggedIn = true;
    localStorage.setItem(environment.projectName, JSON.stringify(this.appScope));
  }
}
