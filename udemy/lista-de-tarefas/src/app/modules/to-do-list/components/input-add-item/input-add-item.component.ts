import {ChangeDetectorRef, Component, ElementRef, EventEmitter, inject, Input, Output, ViewChild} from '@angular/core';

// Interface
import {IListItems} from "../../interface/iListItems.iterface";
import {JsonPipe, NgClass} from "@angular/common";

@Component({
  selector: 'app-input-add-item',
  standalone: true,
  imports: [
    JsonPipe,
    NgClass
  ],
  templateUrl: './input-add-item.component.html',
  styleUrl: './input-add-item.component.scss'
})
export class InputAddItemComponent {
  #cdr = inject(ChangeDetectorRef);

  @Input({required:true}) public inputListItems: Array<IListItems> = [];

  // pega valores do html
  @ViewChild('inputText') public inputText!: ElementRef;
  @Output() public outputAddListItem = new EventEmitter<IListItems>();
  // detectar alguma alteração

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
