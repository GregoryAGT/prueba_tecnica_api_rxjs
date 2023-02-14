import { Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/movies';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  @Input('item') movie!: Movies;


  constructor() { }

  ngOnInit(): void {

  }

  getImgMovie(){
    return this.movie.Poster !== 'N/A' ? this.movie.Poster : 'https://static.doofinder.com/main-files/uploads/2019/08/110655-404-not-found-Doofinder.jpg'
    }

}
