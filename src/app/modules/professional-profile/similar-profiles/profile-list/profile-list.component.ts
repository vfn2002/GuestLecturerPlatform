import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../model/user';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  @Input() users: User[];

  constructor() { }

  ngOnInit() {
  }

}
