import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable, Subject} from "rxjs";

@Injectable()
export class LoginService {

  private loginStatusSubject = new Subject<boolean>();
  private loginStatusObservable: Observable<boolean> = this.loginStatusSubject.asObservable();
  private _isLoggedIn: boolean;

  constructor(private api: ApiService) { }

  login(credentials: any) {
    const endpoint = this.getEndpoint(credentials);
    const wrappedCredentials = {
      email: credentials.email,
      password: credentials.password
    };
    return this.api.post(endpoint, wrappedCredentials);
  }

  private getEndpoint(credentials: any) {
    if (credentials.type.toLowerCase() === 'student') {
      return '/students/sign_in';
    }
    if (credentials.type.toLowerCase() === 'lecturer') {
      return '/lecturers/sign_in';
    }
    if (credentials.type.toLowerCase() === 'professional') {
      return '/professionals/sign_in';
    }
    return undefined;
  }

  public setLoggedIn(bool: boolean) {
    this._isLoggedIn = bool;
    this.loginStatusSubject.next(bool);
  }

  public observeLoginStatus(): Observable<boolean> {
    return this.loginStatusObservable;
  }

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

}
