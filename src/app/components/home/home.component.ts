import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { MovieService } from 'src/app/services/movie.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allMovies: any[] = [];
  searchMovies: string = '';
  
  constructor(private movieService: MovieService, private _router: Router) {}
  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.movieService.getAllMovies().subscribe({
      next: (res: any) => {
        this.allMovies = res.results;

        this.allMovies.forEach((movie) => {
          if (movie && movie.poster_path && movie.backdrop_path) {
            movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            movie.backdrop_path = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
          }
        });
        console.log(this.allMovies, 'data fetched successfully');
      },
      error: (err) => {
        console.log(err, 'Error while fetching data');
      },
    });
  }

  movieDetails(movie: any) {
    this._router.navigateByUrl(`/movie/${movie.id}`);
  }
}
