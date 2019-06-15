import { Component, OnInit } from '@angular/core';
import { Movie } from '../../movie';
import { MovieService } from '../../movie.service';
import { Input } from '@angular/core';

@Component({
  selector: 'movie-watchlist',
  template:`<movie-container [movies]="movies" [useWatchlistApi]="useWatchlistApi"></movie-container>`,
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

movies:Array<Movie>;
useWatchlistApi:boolean=true;

  constructor(private movieService:MovieService) { 
    this.movies=[];
  }

  ngOnInit() {
    this.movieService.getWatchlistedMovies()
    .subscribe((movies)=>{
      this.movies.push(...movies);
    });
  }

}
