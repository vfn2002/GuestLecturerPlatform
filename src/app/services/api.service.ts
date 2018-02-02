import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import 'rxjs/Rx';
import {Headers, Http, RequestOptions} from '@angular/http';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {AppComponent} from '../app.component';

@Injectable()
export class ApiService {

  /**
   * Responsible for performing all HTTP requests in the entire application,
   * by wrapping all the default requests in academy-specific, but generic functions.
   */

  private baseURL = 'https://api.fypster.com';
  private SNACKBAR_DURATION = 4000;

  constructor(private http: Http,
              private auth: AuthService, public snackBar: MatSnackBar) { }

  get(endpoint, headers?: RequestOptions) {
    return this.http.get(this.baseURL + this.fix(endpoint), (headers) ? headers : this.auth.authOptions)
      .catch(this.catchHandler)
      .map(this.resultHandler, this.errorHandler);
  }

  post(endpoint, params, headers?: RequestOptions) {
    return this.http.post(this.baseURL + this.fix(endpoint), params, (headers) ? headers : this.auth.authOptions)
      .catch(this.catchHandler)
      .map(this.resultHandler, this.errorHandler);
  }

  patch(endpoint, params, headers?: RequestOptions) {
    return this.http.patch(this.baseURL + this.fix(endpoint), params, (headers) ? headers : this.auth.authOptions)
      .catch(this.catchHandler)
      .map(this.resultHandler, this.errorHandler);
  }

  delete(endpoint, headers?: RequestOptions) {
    return this.http.delete(this.baseURL + this.fix(endpoint), (headers) ? headers : this.auth.authOptions)
      .catch(this.catchHandler)
      .map(this.resultHandler, this.errorHandler);
  }

  put(endpoint, params, headers?: RequestOptions) {
    return this.http.put(this.baseURL + this.fix(endpoint), params, (headers) ? headers : this.auth.authOptions)
      .catch(this.catchHandler)
      .map(this.resultHandler, this.errorHandler);
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
    console.log('result handler called');
    this.auth.setHeaders(res.headers);
    return res;
  }

  private errorHandler = err => {
    this.snackBar.open(err)._dismissAfter(this.SNACKBAR_DURATION);
    return err;
  }

  private catchHandler = err => {
    this.snackBar.open(err)._dismissAfter(this.SNACKBAR_DURATION);
    return err;
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
