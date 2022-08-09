import { Component, OnInit } from '@angular/core';
import { Movie } from '../types';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  selectedMovie?: Movie;

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  resetMovieSelection(): void {
    this.selectedMovie = undefined;
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe((movies) => (this.movies = movies));
  }

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovies();
  }
}
