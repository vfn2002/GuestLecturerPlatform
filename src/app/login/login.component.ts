import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from "@angular/material";
import {ApplicationService} from "../services/application.service";
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  credentials = {};

  constructor(public dialogRef: MatDialogRef<LoginComponent>,
              public application: ApplicationService,
              public snackBar: MatSnackBar) { }

  hide = true;

  ngOnInit() {
  }

  login() {
    this.isLoading = true;
    return this.application.login(this.credentials)
      .subscribe(
        res => {
          this.handleLoginSuccess(res);
        },
        err => {
          this.handleLoginFailure(err);
        }
      );
  }

  openSnackBar() {
    this.snackBar.openFromComponent(LoginComponent);
  }

  private handleLoginSuccess(res: any) {
    this.application.setUserLoginStatus(true);
    this.dialogRef.close();
    this.isLoading = false;
  }

  private handleLoginFailure(err: any) {
    this.isLoading = false;
    this.openSnackBar();
  }
}
