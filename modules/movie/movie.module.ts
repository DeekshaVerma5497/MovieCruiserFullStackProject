import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { MovieService } from './movie.service';
import { ContainerComponent } from './components/container/container.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieRouterModule } from './movie-router.module';
import { MatCardModule } from '@angular/material/card';
import { TmdbContainerComponent } from './components/tmdb-container/tmdb-container.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MovieDialogComponent } from '../movie/components/movieDialog/movieDialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SearchComponent } from './components/search/search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [ThumbnailComponent, MovieDialogComponent,SearchComponent,ContainerComponent, TmdbContainerComponent, WatchlistComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    MovieRouterModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    
  ],
  exports: [
    MovieRouterModule,
    MovieDialogComponent,
    ThumbnailComponent,
  ],
  providers:[MovieService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  entryComponents:[MovieDialogComponent ]
})
export class MovieModule { }
