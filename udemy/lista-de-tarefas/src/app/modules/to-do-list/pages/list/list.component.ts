import {Component, signal} from '@angular/core';
import {InputAddItemComponent} from "../../components/input-add-item/input-add-item.component";
import {IListItems} from "../../interface/iListItems.iterface";
import {InputListItemComponent} from "../../components/input-list-item/input-list-item.component";
import {ELocalStorageEnum} from "../../enum/ELocalStorage.enum";
import Swal from 'sweetalert2';

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
    localStorage.setItem(ELocalStorageEnum.MY_LIST,
      JSON.stringify([...this.#setListItems(), value])
    );
    return this.#setListItems.set(this.#parseItems());
  }


  public deleteAllItems() {

    Swal.fire({
      title: "Tem certeza?",
      text: "Voçê não podera reverter isso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim Delete Tudo!"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem(ELocalStorageEnum.MY_LIST);
        return this.#setListItems.set(this.#parseItems());
      }
    });


  }

  public listItemsStage(value: 'pending' | 'completed') {
    return this.getListItems().filter((res: IListItems) => {
      if (value === 'pending') return !res.checked
      if (value === 'completed') return res.checked
      return res
    });
  }

  public uptadeItemCheckBox(newItem: { id: string; checked: boolean }) {
    this.#setListItems.update((oldValue: IListItems[]) => {
      return oldValue.filter(res => {
        if (res.id === newItem.id) {
          res.checked = newItem.checked;
          return res;
        }
        return res;
      });
    });

    return this.#uptadeLocalStorage();

  }

  updateItemText(newItem: { id: string; value: string }) {
    this.#setListItems.update((oldValue: IListItems[]) => {
      return oldValue.filter(res => {
        if (res.id === newItem.id) {
          res.value = newItem.value;
          return res;
        }
        return res;
      });
    });

    return this.#uptadeLocalStorage();
  }

  deleteItem(id: string) {

    Swal.fire({
      title: "Tem certeza?",
      text: "Voçê não podera reverter isso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sim Delete o Item!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.#setListItems.update((oldValue: IListItems[]) => {
          return oldValue.filter((res) => res.id !== id);
        });
        return this.#uptadeLocalStorage();
      }
    });


  }

  #uptadeLocalStorage() {
    return localStorage.setItem(ELocalStorageEnum.MY_LIST, JSON.stringify(this.#setListItems()))
  }
}
