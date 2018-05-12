import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { GeneralHttpService } from '../shared/general-http.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrymeService extends GeneralHttpService {

  constructor(http: Http) {
    super(http);
  }

  private paths = {
    try: 'https://jsonplaceholder.typicode.com/posts',
    passToken: `${environment.host}/invest`,
  };

  passToken(token: string, amount: number) {
    console.log("Hello", this.paths.passToken, {token, amount});
    const res = this.post(this.paths.passToken, {token, amount});
    console.log(res);
    return res;
  }

  try(): Promise<Response> {
    const res = this.post(this.paths.try, {bebe: 'bebee'});
    return res;
  }
}
