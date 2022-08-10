import { Component, OnInit } from '@angular/core';
import { Movie } from '../types';
import * as data from '../movies.json';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  selectedMovie?: Movie;
  searchText: string = '';

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  resetMovieSelection(): void {
    this.selectedMovie = undefined;
  }

  getMovies(): void {
    const movies = (data as any).default;
    this.movies = movies;
  }

  constructor() {}

  ngOnInit(): void {
    this.getMovies();
  }
}
