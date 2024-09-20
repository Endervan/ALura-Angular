import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default  class SobreComponent {

}
