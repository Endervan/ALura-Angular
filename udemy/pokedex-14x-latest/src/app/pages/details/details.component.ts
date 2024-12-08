import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokeApiService} from "../../service/poke-api.service";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private urlPokemon:string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName:string = 'https://pokeapi.co/api/v2/pokemon-species';

  constructor(
   private activedRoute: ActivatedRoute,
   private pokeApiService:PokeApiService
  ) {
  }

  get pokemon() {

    const id = this.activedRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${id}`)
    const name = this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${id}`)
    forkJoin([pokemon,name]).subscribe((res)=>{
      console.log(res)
    }) // busca 2 servicos ao msm tempo e dps dar resposta
    return pokemon
  }

  ngOnInit(): void {
    this.pokemon
  }

}
