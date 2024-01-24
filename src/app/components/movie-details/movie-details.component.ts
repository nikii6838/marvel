import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movieId: any;
  movie: any;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      this.movieId = params['id'];
    });

    this.movieService.getMovieById(this.movieId).subscribe({
      next: (res: any) => {
        console.log(res, 'data fetched successfully');
        this.movie = res;
        this.movie.poster_path = `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`;
        this.movie.backdrop_path = `https://image.tmdb.org/t/p/original${this.movie.backdrop_path}`;
      },
      error: (err) => {
        console.log(err, 'Error while fetching data');
      },
    });
  }
}
