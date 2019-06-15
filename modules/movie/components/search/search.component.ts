import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { Movie } from '../../movie';
import { MovieService } from '../../movie.service';

@Component({
    selector: 'movie-search',
    templateUrl: './search.component.html',
    styleUrls: []
})

export class SearchComponent implements OnInit {
    movies: Array<Movie>;

    @Input()
    useWatchlistApi: boolean;

    constructor(private service: MovieService, private snackBar: MatSnackBar) { }

    ngOnInit() {
    }

    onEnter(searchKey) {
        this.service.searchMovie(searchKey).subscribe(movies => {
            this.movies = movies;
            let message = `${this.movies.length} movies found`;
            this.snackBar.open(message, '', {
                duration: 2000
            });
        })
    }
}