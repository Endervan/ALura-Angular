import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IListItems} from "../../interface/iListItems.iterface";

@Component({
  selector: 'app-input-list-item',
  standalone: true,
  imports: [],
  templateUrl: './input-list-item.component.html',
  styleUrl: './input-list-item.component.scss'
})
export class InputListItemComponent {

  @Input({required: true}) public inputListItems: Array<IListItems> = [];

  @Output() public outputUpdateItemCheckbox = new EventEmitter<{
    id: string,
    checked: boolean
  }>();

  public updateItemCheckBox(id: string, checked: boolean) {
    return this.outputUpdateItemCheckbox.emit({id, checked});
  }


}
