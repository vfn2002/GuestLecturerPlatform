import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { ApplicationService } from '../../services/application.service';
import { UserService } from '../../services/user.service';

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
              public snackBar: MatSnackBar,
              private userService: UserService) { }

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
    this.userService.user.id = res.json().data.id;
    this.application.setUserLoginStatus(true);
    this.dialogRef.close();
    this.isLoading = false;
  }

  private handleLoginFailure(err: any) {
    this.isLoading = false;
    this.openSnackBar();
  }
}
