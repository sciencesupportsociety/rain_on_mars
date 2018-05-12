import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {GeneralHttpService} from '../shared/general-http.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrymeService extends GeneralHttpService {

  constructor(http: Http) {
    super(http);
  }

  private paths = {
    try: 'https://jsonplaceholder.typicode.com/posts',
    invest: `${environment.host}/invest`,
    investMonthly: `${environment.host}/invest-monthly`,
  };

  invest = (token: string, amount: number): Promise<Response> => {
    console.log("Hello", this.paths.invest, {token, amount});
    const res = this.post(this.paths.invest, {token, amount});
    console.log(res);
    return res;
  };

  investMonthly = (token: string, amount: number): Promise<Response> => {
    console.log("Hello", this.paths.investMonthly, {token, amount});
    const res = this.post(this.paths.investMonthly, {token, amount});
    console.log(res);
    return res;
  };

  try(): Promise<Response> {
    const res = this.post(this.paths.try, {bebe: 'bebee'});
    return res;
  }
}
