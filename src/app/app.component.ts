import { Component } from '@angular/core';
import { UnsplashService } from './unsplash.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  imageUrls: string[] = [];

  constructor(private unsplashService: UnsplashService) {}

  onEmit(value: string) {
    this.unsplashService.search(value).subscribe((response) => {
      this.imageUrls = [];
      response.forEach((x) => {
        this.imageUrls.push(x.urls.regular);
      });
    });
  }
}
