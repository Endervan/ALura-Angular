import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss'
})
export class OutputComponent {

  @Output() public outputName = new EventEmitter();

  public sendOutputName() {
    return this.outputName.emit("Ender pasando dados filho pro pai");
  }

}
