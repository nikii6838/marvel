// import { Component, OnInit } from '@angular/core';
// import { MovieService } from 'src/app/services/movie.service';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css'],
// })
// export class HeaderComponent implements OnInit {
//   searchQuery: string = '';
// searchMovies: any;
  
//   constructor(private movieService: MovieService) {}

//   ngOnInit(): void {}

//   onSearch() {
//     if (this.searchQuery.trim() !== '') {
//       this.movieService.searchMovies(this.searchQuery).subscribe({
//         next: (res: any) => {
//           console.log(res, 'data fetched successfully for search');
//         },
//         error: (err) => {
//           console.log(err, 'Error while fetching data');
//         },
//       });
//     }
//   }
// }
