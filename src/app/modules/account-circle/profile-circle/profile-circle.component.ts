import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../model/user';

@Component({
  selector: 'app-profile-circle',
  templateUrl: './profile-circle.component.html',
  styleUrls: ['./profile-circle.component.css']
})
export class ProfileCircleComponent implements OnInit {

  // TODO: Remove dummy user
  @Input() user: User;
  @Input() size: number;

  // Default values
  DEFAULT_SIZE = 40;

  constructor() { }

  ngOnInit() {
    this.checkRequiredInputs();
  }

  checkRequiredInputs() {
    // tslint:disable-next-line:curly
    if (!this.user) throw new Error('User input is required');
  }

}
