import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = 'fa1c9c03';
  private baseUrl = 'https://www.omdbapi.com';

  constructor(private http: HttpClient) { }

  searchMovie(movieName: string) {
    const url = `${this.baseUrl}/?apikey=${this.apiKey}&t=${movieName}`;
    return this.http.get(url);
  }
}
