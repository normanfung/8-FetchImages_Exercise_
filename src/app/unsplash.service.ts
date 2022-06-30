import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { flatMap, map, mergeMap, pluck } from 'rxjs';

interface UnsplashResponse {
  results: { urls: { regular: string } }[];
  total: number;
  total_pages: number;
}

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  constructor(private http: HttpClient) {}

  search(query: string) {
    return this.http
      .get<UnsplashResponse>('https://api.unsplash.com/search/photos', {
        headers: {
          Authorization:
            'Client-ID Po3BAMTNAmDHsrGCC13XpXoA914XwmUr40xZ3fZN1s8',
        },
        params: {
          query: query,
          per_page: 9,
        },
      })
      .pipe(pluck('results'));
  }
}
