import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../comment';

@Component({
  selector: 'app-comment-list-item',
  templateUrl: './comment-list-item.component.html',
  styleUrls: ['./comment-list-item.component.css']
})
export class CommentListItemComponent implements OnInit {

  @Input() comment: Comment;
  MAX_STAR_RATING = 5;

  constructor() { }

  ngOnInit() {
  }

}
