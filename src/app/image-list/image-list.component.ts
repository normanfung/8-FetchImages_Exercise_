import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css'],
})
export class ImageListComponent implements OnInit {
  cssList = [
    'w-2 h-5',
    'w-1 h-2',
    'w-3 h-2',
    'w-2 h-1',
    'w-1 h-2',
    'w-1 h-2',
    'w-2 h-1',
    'w-2 h-1',
    'w-2 h-1',
  ];
  @Input() imageUrls: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
