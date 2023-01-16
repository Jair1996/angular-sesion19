import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styles: [],
})
export class ListCardComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons(150).subscribe((pokemons) => {
      this.pokemons = pokemons;
    });
  }
}
