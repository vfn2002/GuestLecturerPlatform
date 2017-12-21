import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Headers, Http, RequestOptions} from "@angular/http";
import {UserService} from "./user.service";

@Injectable()
export class AuthService {

  public user_type: string;

  private authorizedSubject = new Subject<boolean>();
  observeHeadersPresent = this.authorizedSubject.asObservable();
  private baseURL = 'https://api.fypster.com';
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
    console.log(this.authOptions.headers);
    return this.checkIfDeviseHeaders(this.authOptions.headers);
  }

  validateHeaders(headers: Headers) {
    this.user_type = headers.get('user-type');
    const options = new RequestOptions({
      headers: headers
    });
    return this.http.get(this.baseURL + '/' + this.user_type + '/validate_token', options)
      .map(
        res => {
          this.authorizedSubject.next(true);
          this.setHeaders(res.headers);
          return res;
        }
      );
  }

  setHeaders(headers: Headers) {
    // Append user type to headers
    if(headers.get('user-type')) {
      this.user_type = headers.get('user-type');
    }
    if (this.checkIfDeviseHeaders(headers)) {
      this.authOptions.headers = new Headers({
        'Content-Type': 'application/json',
        'access-token': headers.get('access-token'),
        'client': headers.get('client'),
        'expiry': headers.get('expiry'),
        'token-type': headers.get('token-type'),
        'uid': headers.get('uid'),
      });
      this.setLocalStorageAuthHeaders(headers);
    } else {
      console.log('Didn\'t set auth headerKeys because they were not present.');
    }
  }

  setLocalStorageAuthHeaders(loginHeaders: Headers) {
    loginHeaders.delete('content-type');
    loginHeaders.delete('cache-control');
    loginHeaders.delete('expiry');
    loginHeaders.delete('token-type');
    // Save user type for next visit.
    loginHeaders.set('user-type', this.user_type);
    this.storage.setItem('fypster', JSON.stringify(loginHeaders.toJSON()));
  }

  getLocalStorageAuthHeaders(): Headers {
    return new Headers(JSON.parse(this.storage.getItem('fypster')));
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
    localStorage.removeItem('fypster');
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
