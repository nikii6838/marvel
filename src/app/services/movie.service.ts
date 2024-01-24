import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  allMoviesUrl: string =
    'https://api.themoviedb.org/3/discover/movie?api_key=5c06fed2cdf4dfcdab132d9e67c1c2e7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';
  constructor(private _http: HttpClient) {}

  getAllMovies() {
    return this._http.get(this.allMoviesUrl);
  }

  getMovieById(id: number) {
    return this._http.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=5c06fed2cdf4dfcdab132d9e67c1c2e7&language=en-US`
    );
  }

  searchMovies(query: string) {
    return this._http.get(
      `https://api.themoviedb.org/3/search/movie?api_key=5c06fed2cdf4dfcdab132d9e67c1c2e7&language=en-US&query=${query}&page=1&include_adult=false`
    );
  }
}
