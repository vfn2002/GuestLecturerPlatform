import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-speaker-box',
  templateUrl: './speaker-box.component.html',
  styleUrls: ['./speaker-box.component.css']
})
export class SpeakerBoxComponent implements OnInit {

  @Input() professional;

  constructor() { }

  ngOnInit() {
  }

}
