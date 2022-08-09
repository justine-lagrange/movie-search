import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from './types';
import { MOVIES } from './mock-movies';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  getMovies(): Observable<Movie[]> {
    const movies = of(MOVIES);
    return movies;
  }

  constructor() {}
}
