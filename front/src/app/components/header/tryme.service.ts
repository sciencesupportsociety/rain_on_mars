import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { GeneralHttpService } from '../../shared/general-http.service';

@Injectable({
  providedIn: 'root'
})
export class TrymeService extends GeneralHttpService {

  constructor(http: Http) {
    super(http);
  }

  private paths = {
    try: 'https://jsonplaceholder.typicode.com/posts'
  };

  try(): Promise<Response> {
    const res = this.post(this.paths.try, {bebe: "bebee"});
    console.log(res);
    return res;
  }
}
