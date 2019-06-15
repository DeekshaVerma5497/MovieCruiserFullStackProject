import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Movie } from './movie';
import { Observable } from 'rxjs';

@Injectable()
export class MovieService {
    tmdbEndpoint: string;
    imagePrefix: string;
    apiKey: string;
    watchlistEndpoint: string;
    search:string;

    constructor(private http: HttpClient) {
        this.apiKey = 'api_key=b5f1343828f4ccab6ee32f7eb754cc00';
        this.tmdbEndpoint = 'https://api.themoviedb.org/3/movie';
        this.imagePrefix = 'https://image.tmdb.org/t/p/w500';
        this.watchlistEndpoint = 'http://localhost:8098/api/movie';
        this.search = 'https://api.themoviedb.org/3/search/movie?';
    }

    getMovies(type: string): Observable<Array<Movie>> {
        const endpoint = `${this.tmdbEndpoint}/${type}?${this.apiKey}`;
        return this.http.get(endpoint).pipe(
            map(this.pickMovieResults),
            map(this.transformPosterPath.bind(this))
        )
    }

    transformPosterPath(movies): Array<Movie> {
        return movies.map(movie => {
            movie.poster_path = `${this.imagePrefix}${movie.poster_path}`;
            console.log(movie.poster_path);
            return movie;
        });
    }

    pickMovieResults(response) {
        return response['results'];
    }

    addMovieToWatchlist(movie) {
        return this.http.post(this.watchlistEndpoint, movie);
    }

    getWatchlistedMovies(): Observable<Array<Movie>> {
        return this.http.get<Array<Movie>>(this.watchlistEndpoint);
    }

    deleteFromMyWatchlist(movie: Movie) {
        const url = `${this.watchlistEndpoint}/${movie.id}`;
        return this.http.delete(url, { responseType: 'text' });
    }

    updateComments(movie) {
        const url = `${this.watchlistEndpoint}/${movie.id}`;
        return this.http.put(url, movie);
    }

    searchMovie(searchKey: string, page: number = 1): Observable<Array<Movie>> {
        if (searchKey.length > 0) {
            const url = `${this.search}${this.apiKey}&language=en-US&page=${page}&include_adult=true&query=${searchKey}`;
            return this.http.get(url).pipe(
                map(this.pickMovieResults),
                map(this.transformPosterPath.bind(this))
            );
        }
    }


}