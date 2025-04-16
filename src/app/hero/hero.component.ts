import { Component, inject } from '@angular/core';
import { TextService } from '../shared/services/text.service';
import { SettingsService } from '../shared/services/settings.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  txtService = inject(TextService);
  settingsService = inject(SettingsService);

  constructor() { 
    this.test();
  }

  test() {
    console.log(this.txtService.txtHero.mainTitle.en);
  }
  
}
