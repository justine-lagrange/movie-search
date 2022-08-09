import { Component, OnInit, Input, Inject } from '@angular/core';
import { Movie } from '../types';
import { MoviesComponent } from '../movies/movies.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  @Input() movie?: Movie;

  onCancelEdit() {
    this.moviesComponent.resetMovieSelection();
  }

  onSaveEdit() {
    this.moviesComponent.resetMovieSelection();
  }

  constructor(private moviesComponent: MoviesComponent) {}

  ngOnInit(): void {}
}
