import {ChangeDetectorRef, Component, ElementRef, EventEmitter, inject, Output, ViewChild} from '@angular/core';

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
  @Output() public outputListItems = new EventEmitter<any>();
  // detectar alguma alteração
  #cdr = inject(ChangeDetectorRef);

  public focusAndAddItem(value: string) {
    if (value) {
      this.#cdr.detectChanges();
      this.inputText.nativeElement.value = ''; // limpando input
      const dataAtual = new Date().getTime();
      const id = `ID ${dataAtual}`;

      this.outputListItems.emit({
        id,
        checked: false,
        value
      })


      console.log(value)
    }
  }

}
