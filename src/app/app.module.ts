import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [AppComponent, MoviesComponent, MovieComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, Ng2SearchPipeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
