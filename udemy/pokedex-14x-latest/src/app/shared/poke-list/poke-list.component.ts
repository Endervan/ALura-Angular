import {Component, OnInit} from '@angular/core';
import {PokeApiService} from "../../service/poke-api.service";

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  private setAllPokemons: any; // lista original
  public getAllPokemons: any; // lista filtrada

  constructor(private pokeApiService: PokeApiService) {
  }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(res => {
      this.setAllPokemons = res.results;
      this.getAllPokemons = this.setAllPokemons;
    })
  }

  getSearch(value: string) {
    this.getAllPokemons = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });
  }

}
