import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, switchMap, tap } from 'rxjs';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styles: [
    `
      img {
        width: 100%;
      }
    `,
  ],
})
export class DetailPageComponent implements OnInit {
  pokemon!: Pokemon;
  spinner = true;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        tap((_) => {
          this.spinner = true;
        }),
        switchMap(({ param }) => this.pokemonService.getPokemon(param))
      )
      .subscribe({
        next: (pokemon) => {
          this.pokemon = pokemon;
          this.spinner = false;
        },
      });
  }
}
