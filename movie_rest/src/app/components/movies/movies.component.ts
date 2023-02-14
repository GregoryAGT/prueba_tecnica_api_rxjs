import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Movies } from 'src/app/interfaces/movies';
import { MovieService } from '../../services/movie.service';
import { debounceTime, distinct, filter, fromEvent, map, switchMap, Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movies[] = [];
  @ViewChild('movieInput', {static: true} ) movieImput!: ElementRef
  movies$!: Observable<Movies[]>

  constructor( private movieService: MovieService) { }

  ngOnInit(): void {
   this.movies$ =  fromEvent<Event>(this.movieImput.nativeElement, 'keyup').pipe(
      map((event: Event) => {
        const searchWord = (event.target as HTMLInputElement).value;
        return searchWord
      }),
      filter((searchWord: string) => searchWord.length > 3),
      debounceTime(500),
      distinct(),
      switchMap( (searchWord: string) => this.movieService.getMovies(searchWord) )
      )
  }

}
