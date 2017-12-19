import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import 'rxjs/Rx';
import {Http, RequestOptions} from "@angular/http";

@Injectable()
export class ApiService {

  /**
   * Responsible for performing all HTTP requests in the entire application,
   * by wrapping all the default requests in academy-specific, but generic functions.
   */

  private baseURL = 'https://api.fypster.com';

  constructor(private http: Http, private auth: AuthService) { }

  get(endpoint, headers?: RequestOptions) {
    return this.http.get(this.baseURL + this.fix(endpoint), (headers) ? headers : this.auth.authOptions)
      .map(this.resultHandler, this.errorHandler);
  }

  post(endpoint, params, headers?: RequestOptions) {
    return this.http.post(this.baseURL + this.fix(endpoint), params, (headers) ? headers : this.auth.authOptions)
      .map(this.resultHandler, this.errorHandler);
  }

  patch(endpoint, params, headers?: RequestOptions) {
    return this.http.patch(this.baseURL + this.fix(endpoint), params, (headers) ? headers : this.auth.authOptions)
      .map(this.resultHandler, this.errorHandler);
  }

  delete(endpoint, headers?: RequestOptions) {
    return this.http.delete(this.baseURL + this.fix(endpoint), (headers) ? headers : this.auth.authOptions).map(this.resultHandler, this.errorHandler);
  }

  put(endpoint, params, headers?: RequestOptions) {
    return this.http.put(this.baseURL + this.fix(endpoint), params, (headers) ? headers : this.auth.authOptions).map(this.resultHandler, this.errorHandler);
  }

  /**
   * PRIVATE STUFF
   */
  private fix(endpoint) {
    if (endpoint.charAt(0) !== '/') {
      return '/' + endpoint;
    }
    return endpoint;
  }

  /**
   * MAP HANDLERS
   */
  private resultHandler = res => {
    // try setting the auth headers
    this.auth.setHeaders(res.headers);
    return res;
  }

  private errorHandler = err => {
    return err;
  }

  private catchHandler = err => {
  }

  private formatErrors(err): string {
    let errorString = '';
    const errors: string[] = err.json().errors;
    for (const error of errors) {
      errorString += (errorString.length > 0) ? '<br>' + error : error;
    }
    return errorString.replace('undefined', '');
  }
}
