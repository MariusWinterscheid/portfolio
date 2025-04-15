import { Component, inject } from '@angular/core';
import { TextService } from '../shared/services/text.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  txtService = inject(TextService);
  txtHero = this.txtService.txtHero;
}
