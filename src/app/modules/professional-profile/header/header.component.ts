import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // TODO: Remove dummy data
  @Input() user: User = new User('Victor Frederik', 'Nielsen', '', '', '', 1, 'assets/img/profile.jpg');

  constructor() { }

  ngOnInit() {
  }

}
