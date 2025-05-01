import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-next',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './next.component.html',
  styleUrl: './next.component.scss'
})
export class NextComponent {
  @Input() isOdd: boolean = false;
}
