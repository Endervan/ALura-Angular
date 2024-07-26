import {Component, signal} from '@angular/core';
import {InputAddItemComponent} from "../../components/input-add-item/input-add-item.component";
import {IListItems} from "../../interface/iListItems.iterface";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    InputAddItemComponent
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  public addItem = signal(true);


  #setListItems = signal<IListItems[]>([this.#parseItems()]);  // # => metodo Private
  getListItems = this.#setListItems.asReadonly(); // asReadonly = somente leitura

  public getInputAndAddItem(value: IListItems) {
    localStorage.setItem("@my-list)", JSON.stringify(value))
    console.log(value)
  }

  #parseItems() {
    return JSON.parse(localStorage.getItem("@my-list") || '[]')
  }

}
