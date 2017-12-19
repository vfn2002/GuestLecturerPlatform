import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {ApplicationService} from "../services/application.service";

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private application: ApplicationService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return !!this.application.getCurrentLoginStatus();
  }
}
