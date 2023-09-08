import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export enum TiposDeBusca {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  
  pegarDetalhes(id: string | null): Observable<any> {
    return this.http.get(`${this.url}?i=${id}&apiKey=${this.apiKey}`);
  }
  
  private url = 'http://www.omdbapi.com'
  private apiKey = '5d9d7215'

  constructor(private http: HttpClient) { }

  buscarFilmes(titulo: string, type: TiposDeBusca): Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(titulo)}&type=${type}&apiKey=${this.apiKey}`)
  }

  buscarDetalhado(id: any) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apiKey=${this.apiKey}`)
  }
}