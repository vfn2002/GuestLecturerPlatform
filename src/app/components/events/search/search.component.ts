import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() events;
  @Output() filterTags = new EventEmitter<any>();

  selectedTags = [];

  constructor() { }

  ngOnInit() {
  }

  addTag(tag: string) {
    this.selectedTags.push(tag);
    this.filterTags.emit(this.selectedTags);
  }

  getAllEventTags(events): string[] {
    const uniqueTags = [];
    for (const tag in events.tags) {
      if (uniqueTags.indexOf(tag) !== -1) {
        uniqueTags.push(tag);
      }
    }
    return uniqueTags;
  }

}
