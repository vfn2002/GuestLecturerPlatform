import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user';

@Component({
  selector: 'app-leave-comment',
  templateUrl: './leave-comment.component.html',
  styleUrls: ['./leave-comment.component.css']
})
export class LeaveCommentComponent implements OnInit {

  user = new User('Dankus', 'Memeus');

  showCommentControls = false;

  constructor() { }

  ngOnInit() {
  }

  resetComment() {

  }

}