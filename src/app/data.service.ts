import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICharacter } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly apiUrl = 'https://potterhead-api.vercel.app/';
  
  constructor(private http: HttpClient) { }

  getCharacters(): Observable<ICharacter[]> {
    return this.http.get<ICharacter[]>(this.apiUrl + 'api/characters')
  }
}
