import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../model/user';

@Component({
  selector: 'app-profile-list-item',
  templateUrl: './profile-list-item.component.html',
  styleUrls: ['./profile-list-item.component.css']
})
export class ProfileListItemComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
