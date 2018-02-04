import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApplicationService } from '../../services/application.service';
import { LoginService } from '../../services/login.service';
import { LoginComponent } from '../login/login.component';
import { User } from '../../model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // TODO: Replace dummy data
  user: User = new User('Victor Frederik', 'Nielsen', '', '', '', 1, 'assets/img/profile.jpg');

  appBarColor = 'transparent';
  appBarTextColor = 'black';
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
