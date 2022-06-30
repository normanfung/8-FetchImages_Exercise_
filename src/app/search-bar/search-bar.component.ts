import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() searchEmitter = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSubmit(event: Event, value: string) {
    event.preventDefault();
    this.searchEmitter.emit(value);
  }
}
