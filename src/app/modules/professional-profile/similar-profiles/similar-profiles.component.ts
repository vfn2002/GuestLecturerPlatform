import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../model/user';

@Component({
  selector: 'app-similar-profiles',
  templateUrl: './similar-profiles.component.html',
  styleUrls: ['./similar-profiles.component.css']
})
export class SimilarProfilesComponent implements OnInit {

  @Input() users: User[] = [
    new User('Catalina', 'Catana', '', '', '', 1, '/assets/img/cata.jpeg'),
    new User('Sam', 'Jing', '', '', '', 1, '/assets/img/sam.jpeg'),
    new User('Victor Frederik', 'Nielsen', '', '', '', 1, '/assets/img/victor.jpg'),
    new User('Rasmus', 'Reiler', '', '', '', 1, '/assets/img/rasmus.jpeg'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
