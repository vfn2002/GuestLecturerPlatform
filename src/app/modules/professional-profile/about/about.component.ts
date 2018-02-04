import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Input() skills = [
    'UX', 'Android', 'iOS', 'JavaScript', 'Angular', 'TypeScript', 'UX', 'Android', 'iOS', 'JavaScript', 'Angular', 'TypeScript'
  ];

  constructor() { }

  ngOnInit() {
  }

}
