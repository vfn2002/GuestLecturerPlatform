import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Comment } from '../comment';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  @Input() comments: Comment[];

  sortedComments: Comment[];

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:curly
    if (!this.comments) throw new Error('Comment list must have comments :O!');
    this.sortCommentsByDate();
  }

  sortCommentsByDate() {
    this.sortedComments = this.comments.sort((a: any, b: any) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

}
