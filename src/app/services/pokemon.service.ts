import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, combineLatest, Observable } from 'rxjs';

import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly baseUrl: string = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemon(param: number | string): Observable<Pokemon> {
    return this.http
      .get<Pokemon>(`${this.baseUrl}/pokemon/${param}`)
      .pipe(catchError((_) => []));
  }

  getPokemons(count: number): Observable<Pokemon[]> {
    const requests: Observable<Pokemon>[] = [];

    for (let i = 1; i <= count; i++) {
      requests.push(this.getPokemon(i));
    }

    return combineLatest(requests);
  }
}
