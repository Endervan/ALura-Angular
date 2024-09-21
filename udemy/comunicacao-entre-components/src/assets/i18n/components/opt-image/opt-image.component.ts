import { ChangeDetectionStrategy, Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-opt-image',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './opt-image.component.html',
  styleUrl: './opt-image.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptImageComponent {

}
