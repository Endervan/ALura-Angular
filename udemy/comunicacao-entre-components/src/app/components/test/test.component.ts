import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent {

}
