import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs';

export abstract class GeneralHttpService {

  private defaultRequestOprions: RequestOptions;

  constructor(private http: Http) {
    this.defaultRequestOprions = new RequestOptions();
    this.defaultRequestOprions.headers = new Headers({'Content-Type': 'application/json'});
  }

  get(path: string): Promise<Response> {
    return this.http
      .get(path)
      .toPromise()
      // .then(validate);
  }

  post(path: string, params?: any, options?: RequestOptions): Promise<Response> {
    return this.http
    .post(path, JSON.stringify(params), options || this.defaultRequestOprions)
      .toPromise()
      // .then(validate);
  }
}

export function validate(response: Response): any {
  if (response.status < 200 || response.status >= 300) {
    throw new Error(`incorrect http response: ${response}` );
  }

  const data: ResponseData = response.json();
  if (data.status !== 0) {
    throw new Error(`incorrect response data: ${JSON.stringify(data)}`);
  }
  return data.data;
}

export interface ResponseData {
  status: 0 | 1;
  data: any;
}

