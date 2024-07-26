import {ChangeDetectorRef, Component, ElementRef, EventEmitter, inject, Output, ViewChild} from '@angular/core';

// Interface
import {IListItems} from "../../interface/iListItems.iterface";

@Component({
  selector: 'app-input-add-item',
  standalone: true,
  imports: [],
  templateUrl: './input-add-item.component.html',
  styleUrl: './input-add-item.component.scss'
})
export class InputAddItemComponent {

  // pega valores do html
  @ViewChild('inputText') public inputText!: ElementRef;
  @Output() public outputAddListItem = new EventEmitter<IListItems>();
  // detectar alguma alteração
  #cdr = inject(ChangeDetectorRef);

  public focusAndAddItem(value: string) {
    if (value) {
      this.#cdr.detectChanges();
      this.inputText.nativeElement.value = ''; // limpando input
      const dataAtual = new Date().getTime(); // gerando ID unico
      const id = `ID ${dataAtual}`;

      this.outputAddListItem.emit({
        id,
        checked: false,
        value
      });
      return this.inputText.nativeElement.focus();

    }
  }

}
