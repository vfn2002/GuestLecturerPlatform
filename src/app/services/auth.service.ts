import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Subject} from "rxjs";
import {Headers, Http, RequestOptions} from "@angular/http";

@Injectable()
export class AuthService {

  private authorizedSubject = new Subject<boolean>();
  observeHeadersPresent = this.authorizedSubject.asObservable();
  private baseURL = 'https://api.academytest.student-talks.com';
  authOptions = new RequestOptions({
    headers: new Headers(
      {
        'Content-Type': 'application/json'
      }
    )
  });
  headerKeys = ['access-token', 'client', 'expiry', 'token-type', 'uid'];
  localStorageHeaderKeys = ['access-token', 'client', 'uid'];
  storage = window.localStorage;

  constructor(private http: Http) {}

  isAuthenticated(): boolean {
    return this.checkIfDeviseHeaders(this.authOptions.headers);
  }

  validateHeaders(headers: Headers) {
    // TODO: better way? Gets user when validating local storage headers.
    const options = new RequestOptions({
      headers: headers
    });
    return this.http.get(this.baseURL + '/auth/validate_token', options)
      .map(
        res => {
          this.authorizedSubject.next(true);
          this.setHeaders(res.headers);
          return res;
        }
      );
  }

  setHeaders(headers: Headers) {
    if (this.checkIfDeviseHeaders(headers)) {
      this.authOptions.headers = new Headers({
        'Content-Type': 'application/json',
        'access-token': headers.get('access-token'),
        'client': headers.get('client'),
        'expiry': headers.get('expiry'),
        'token-type': headers.get('token-type'),
        'uid': headers.get('uid')
      });
      this.setLocalStorageAuthHeaders(headers);
    } else {
      console.log('Didn\'t set auth headerKeys because they were not present.');
      //TODO: Show error to report this bug (Headers not present, backend or CORS problem)
    }
  }

  setLocalStorageAuthHeaders(loginHeaders: Headers) {
    loginHeaders.delete('content-type');
    loginHeaders.delete('cache-control');
    loginHeaders.delete('expiry');
    loginHeaders.delete('token-type');
    this.storage.setItem('academy', JSON.stringify(loginHeaders.toJSON()));
  }

  getLocalStorageAuthHeaders(): Headers {
    return new Headers(JSON.parse(this.storage.getItem('academy')));
  }

  setHeadersFromFacebook(headers) {
    const convertedHeaders = new Headers();
    convertedHeaders.append('Content-Type', 'application/json');
    convertedHeaders.append('access-token', headers.auth_token);
    convertedHeaders.append('client', headers.client_id);
    convertedHeaders.append('expiry', headers.expiry + '');
    convertedHeaders.append('token-type', 'Bearer');
    convertedHeaders.append('uid', headers.uid);
    this.setHeaders(convertedHeaders);
  }

  // Check if headers contain all 5 Devise Auth Headers
  checkIfDeviseHeaders(headers: Headers) {
    if (headers === null || headers === undefined) {
      return false;
    }
    return this.checkKeysInHeaders(headers, this.headerKeys);
  }

  // Check if headers contain all 3 Devise Auth Headers needed to call auth/validate_token on backend API
  checkIfLocalStorageHeaders(headers: Headers) {
    if (headers === null || headers === undefined) {
      return false;
    }
    return this.checkKeysInHeaders(headers, this.localStorageHeaderKeys);
  }

  // Iterates over a set of keys and checks for each of them if they exist in the Headers object
  private checkKeysInHeaders(headers: Headers, keys) {
    for (let i = 0; i < keys.length; i++) {
      if (this.checkHeaderExists(headers, keys[i]) === false) {
        // There was found a value where the key didn't exist
        return false;
      }
    }
    return true;
  }

  // Check if one specific key exists in a Headers object
  private checkHeaderExists(headers: Headers, key) {
    return headers.get(key) !== null && headers.get(key) !== undefined;
  }

  unauthorizeUser() {
    localStorage.removeItem('academy');
    this.http.delete(this.baseURL + '/auth/sign_out/', this.authOptions).subscribe(
      res => {
        this.authOptions = new RequestOptions({
          headers: new Headers(
            {
              'Content-Type': 'application/json'
            }
          )
        });
      }
    );
  }

  login() {
    this.authorizedSubject.next(true);
  }
}
