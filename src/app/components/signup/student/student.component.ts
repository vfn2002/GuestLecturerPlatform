import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentForm: FormGroup;
  student = {};
  isLoading = false;
  isSignedUp = false;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService) {
    /**
     * We initialize the validators for the student sign up form.
     */
    this.studentForm = formBuilder.group(
      {
        'firstName': [null, Validators.required],
        'lastName': [null, Validators.required],
        'gender': [null, Validators.required],
        'email': [null, Validators.compose([Validators.required, Validators.email])],
        'university': [null, Validators.required],
        'major': [null, Validators.required],
        'semester': [null, Validators.required],
        'age': [null, Validators.required],
        'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
        'passwordConfirm': [null, Validators.compose([Validators.required, Validators.minLength(6)])]
      },
      {
        validators: PasswordValidation.matchPassword
      });
  }

  ngOnInit() {
  }

  /**
   * Submit form is called from the template, when the user presses the submit button.
   */
  submitForm() {
    this.isLoading = true;

    const wrappedStudent = {
      student: this.student
    };

    this.userService.postStudent(wrappedStudent)
      .subscribe(
        res => {
          this.handleSuccess();
        },
        err => {
          this.handleFailure();
        }
      );
  }

  private handleSuccess() {
    this.isLoading = false;
    this.isSignedUp = true;
  }

  private handleFailure() {
    this.isLoading = false;
  }
}

  export class PasswordValidation {

    static matchPassword(abstractControl: AbstractControl) {
      const password = abstractControl.get('password').value;
      const confirmPassword = abstractControl.get('passwordConfirm').value;
      if (password !== confirmPassword) {
        abstractControl.get('confirmPassword').setErrors({MatchPassword: true});
      } else {
        return null;
      }
    }
  }
