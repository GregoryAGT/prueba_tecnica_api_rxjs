import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Module
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ListMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
