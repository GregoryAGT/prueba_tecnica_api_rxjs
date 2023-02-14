import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, Observable } from 'rxjs';
import { ApiRes } from '../interfaces/api';
import { Movies } from '../interfaces/movies';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

 private apiUrl: string;

  constructor( private http: HttpClient) {
    this.apiUrl = environment.url;
   }


  getMovies(search: string): Observable<Movies[]>{
    return this.http.get<ApiRes>(`${this.apiUrl}&s=${search}`).pipe(
      map(resp =>{
        return resp.Search;
      })
    )
  }

}
