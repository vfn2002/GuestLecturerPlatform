import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../comment';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {

  @Input() viewOnly = false;

  comments: Comment[] = [
    new Comment(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus id est aliquet dictum. Integer est erat, tempus at metus ac, dignissim interdum enim. Proin porta urna a gravida iaculis. Proin pulvinar sapien nisl, ac tristique ex faucibus ac. Mauris venenatis, nunc ut aliquet maximus, purus tellus hendrerit risus',
      {name: 'Victor Frederik Nielsen', image: '/assets/img/lecturer.jpg'},
      new Date('2018-01-01'),
      4),
    new Comment(
      'Ut eget eros metus. Morbi ex metus,',
      {name: 'Rasmus Reiler', image: '/assets/img/lecturer.jpg'},
      new Date('2017-01-01'),
      5),
    new Comment(
      'Proin commodo nec lacus quis viverra. Nulla dictum arcu ut sapien tempor, eget tincidunt lorem semper. Cras purus metus, molestie vel auctor pulvinar, mattis sollicitudin tortor. Donec quam nibh, tempor sed urna vitae, placerat hendrerit purus. Aenean quis ultricies purus. Praesent tristique feugiat ante vel cursus. Phasellus convallis nunc felis, hendrerit ultricies augue ultricies in. Pellentesque vitae diam convallis, elementum purus egestas, commodo magna. Suspendisse potenti. Sed at magna dapibus, rutrum dui quis, semper est. Donec lacinia pellentesque est, vitae eleifend augue vulputate vel. Aenean malesuada est ex, et porttitor turpis mattis non.',
      {name: 'Berndt Berndtsen', image: '/assets/img/lecturer.jpg'},
      new Date('2017-01-01'),
      3)
  ];

  constructor() { }

  ngOnInit() {
  }

}