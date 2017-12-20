import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable, Subject} from "rxjs";
import {AuthService} from "./auth.service";
import {UserService} from "./user.service";

@Injectable()
export class LoginService {

  private loginStatusSubject = new Subject<boolean>();
  private loginStatusObservable: Observable<boolean> = this.loginStatusSubject.asObservable();
  private _isLoggedIn: boolean;

  constructor(private api: ApiService,
              private auth: AuthService,
              private user: UserService) {
  }

  login(credentials: any) {
    const endpoint = this.getEndpoint(credentials);
    this.auth.user_type = credentials.type + 's';
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

  loginWithLocalStorage() {
    if (this.auth.getLocalStorageAuthHeaders()) {
      this.auth.validateHeaders(this.auth.getLocalStorageAuthHeaders()).subscribe(
        res => {
          this.user.user.id = res.json().data.id;
          this.setLoggedIn(true);
        }
      );
    }
  }

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

}
