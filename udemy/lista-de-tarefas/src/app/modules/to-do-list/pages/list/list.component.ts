import {Component, signal} from '@angular/core';
import {InputAddItemComponent} from "../../components/input-add-item/input-add-item.component";
import {IListItems} from "../../interface/iListItems.iterface";
import {InputListItemComponent} from "../../components/input-list-item/input-list-item.component";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    InputAddItemComponent,
    InputListItemComponent
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  public addItem = signal(true);


  #setListItems = signal<IListItems[]>(this.#parseItems());  // # => metodo Private
  public getListItems = this.#setListItems.asReadonly(); // asReadonly = somente leitura

  #parseItems() {
    return JSON.parse(localStorage.getItem("@my-list") ?? '[]')
  }


  public getInputAndAddItem(value: IListItems) {
    localStorage.setItem('@my-list',
      JSON.stringify([...this.#setListItems(), value])
    );
    return this.#setListItems.set(this.#parseItems());
  }


  deleteAllItems() {
    localStorage.removeItem('@my-list');
    return this.#setListItems.set(this.#parseItems());

  }
}
