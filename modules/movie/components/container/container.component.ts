import { Component, OnInit ,Input} from '@angular/core';
import { MovieService } from '../../movie.service';
import { Movie } from '../../movie';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'movie-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  @Input()
movies:Array<Movie>;

@Input()
useWatchlistApi:boolean;

constructor(private movieService:MovieService,private snackBar:MatSnackBar){
 
}
  
  ngOnInit() {
  }

addToWatchlist(movie) {
  this.movieService.addMovieToWatchlist(movie).subscribe(
   (movie) => {
    console.log(movie);
    this.snackBar.open(`Movie Added to watchlist`, '', {
     duration: 1000
    });
   }, (error: HttpErrorResponse) => {
    if (error instanceof Error) {
     this.snackBar.open(`Couldn't add the movie to Watchlist`, '', {
      duration: 1000
     });
    }
    else {
     this.snackBar.open(`Movie already exists in your Watchlist!`, '', {
      duration: 1000
     });
    }
   });
 }

deleteFromWatchlist(movie){
  let message=`${movie.title} deleted from your watchlist`;
  for(var i=0;i<this.movies.length;i++){
    if(this.movies[i].title===movie.title){
      this.movies.splice(i,1);
    }
  }
  this.movieService.deleteFromMyWatchlist(movie).subscribe((movie)=>{
    this.snackBar.open(message,'',{
      duration:1000
    });
  });
}
}
