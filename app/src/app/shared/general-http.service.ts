import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AppScope } from './appScope';

export abstract class GeneralHttpService {

  private options = { headers: new Headers({ 'Content-Type': 'application/json' }) };

  constructor(protected http: Http, protected appScope: AppScope) {
  }

  protected post(path: string, params?: any): Promise<any> {
    return this.http
      .post(path, JSON.stringify(params), this.options)
      .toPromise()
      .then(validate)
  }

  protected requestTemplate(): any {
    const { login_hash, username } = this.appScope;
    return {
      login_hash,
      username,
      consumer: true,
    }
  }
}

export function validate(response: Response): any {
  if (response.status < 200 || response.status >= 300) {
    throw "incorrect http response";
  }
  const data: ResponseData = response.json();
  if (data.status != 0) {
    throw "incorrect response data";
  }
  return data.data;
}

export interface RequestData {
  type_id: string;
  data: any;
}

export interface ResponseData {
  status: 0 | 1;
  data: any;
}

export const requestData = {
  type_id: 'qwe499bmksadr06cmjo496dsw445',
}
