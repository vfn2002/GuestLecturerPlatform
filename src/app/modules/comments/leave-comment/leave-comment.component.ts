import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from '../../../model/user';

@Component({
  selector: 'app-leave-comment',
  templateUrl: './leave-comment.component.html',
  styleUrls: ['./leave-comment.component.css']
})
export class LeaveCommentComponent implements OnInit {

  @Output() addComment = new EventEmitter<any>();
  // TODO: Remove dummy data
  @Input() user = new User('Dankus', 'Memeus');

  showCommentControls = false;

  constructor() { }

  ngOnInit() {
  }

  comment(comment: string) {
    this.addComment.emit({user: this.user, comment: comment});
  }

}
