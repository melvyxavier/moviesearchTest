import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})

export class MovieComponent {
  movieName: any = ""
  movie: any;

  constructor(private movieService: MovieService) { }

  searchMovie() {
    this.movieService.searchMovie(this.movieName).subscribe(data => {
      this.movie = data;
    });
  }
}