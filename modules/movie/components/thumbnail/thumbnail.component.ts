import { Component, OnInit } from '@angular/core';
import { Movie } from '../../movie';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../../movie.service';
import { Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material';
import { MovieDialogComponent } from '../movieDialog/movieDialog.component';

@Component({
  selector: 'movie-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
  @Input()
  movie: Movie;
  movies: Array<Movie>;

  @Input()
  useWatchlistApi: boolean;

  @Output()
  addMovie = new EventEmitter();

  @Output()
  deleteMovie = new EventEmitter();



  constructor(private dialog:MatDialog,private snackBar: MatSnackBar) {
    this.movies = [];

  }

  ngOnInit() {
  }

  addToWatchlist() {

    this.addMovie.emit(this.movie);
  }

  deleteFromWatchlist() {
    this.deleteMovie.emit(this.movie);

  }

  updateFromWatchlist(actionType) {
    console.log('Movie is getting updated');
    let dialogRef=this.dialog.open(MovieDialogComponent,{
      width:'400px',
      data: {obj :this.movie,actionType:actionType}
    });
    console.log("open dialog");
    dialogRef.afterClosed().subscribe(result=>{
      console.log("The dialog was closed");
    });

  }
}
