import { Component, inject } from '@angular/core';
import { TextService } from '../shared/services/text.service';
import { SettingsService } from '../shared/services/settings.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  txtService = inject(TextService);
  settingsService = inject(SettingsService);
}
