import { Component, inject } from '@angular/core';
import { TextService } from '../shared/services/text.service';
import { SettingsService } from '../shared/services/settings.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  txtService = inject(TextService);
  settingsService = inject(SettingsService);
}
