import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltroService {
  private listaBagdes: any[] = [];

  constructor() {
  }

  get filtroBadges() {
    return this.listaBagdes;
  }

  adicionarFiltro(item: any) {
    this.listaBagdes.push(item);
  }
}
