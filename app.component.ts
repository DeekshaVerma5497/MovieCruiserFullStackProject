import { NgModule, Component } from '@angular/core';
import { ThumbnailComponent } from './modules/movie/components/thumbnail/thumbnail.component';
import { AuthenticationService } from './modules/authentication/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar color="primary">
  <span>Movie Cruiser</span>
  <button mat-button [routerLink]="['/movies/popular']">Popular Movies</button>
  <button mat-button [routerLink]="['/movies/top_rated']">Top Rated Movies</button>
  <button mat-button [routerLink]="['/movies/watchlist']">Watchlist</button>
  <button class="search-button" mat-button [routerLink]="['/movies/search']">Search</button>
  <button mat-button (click)="logout()">Logout</button>
  </mat-toolbar>
  <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'moviecruiserfrontend';

  constructor(private authService: AuthenticationService,
    private router: Router) { }


  logout() {
    this.authService.deleteToken();
    this.router.navigate(['/login']);
  }

}
