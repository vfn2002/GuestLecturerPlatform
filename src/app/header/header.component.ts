import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {LoginComponent} from "../login/login.component";
import {ApplicationService} from "../services/application.service";
import {AuthService} from "../services/auth.service";
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn = false;

  constructor(public dialog: MatDialog,
              public application: ApplicationService,
              private login: LoginService) { }

  ngOnInit() {
    /**
     * Attempts to login with locally stored data.
     */
    this.login.loginWithLocalStorage();

    /**
     * Observe when user login status changes.
     */
    this.application.observeLoginStatus().subscribe(
      bool => {
        this.isUserLoggedIn = bool;
      }
    );
  }

  openLoginDialogue() {
    this.dialog.open(LoginComponent);
  }

  signOut() {
    this.login.signOut();
  }



}
