import { Component, inject } from '@angular/core';
import { SettingsService } from '../shared/services/settings.service';
import { TextService } from '../shared/services/text.service';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  txtService = inject(TextService);
  settingsService = inject(SettingsService);

  references = [
    {
      name: 'V. Schuster',
      position: 'Team Partner',
      reference: {
        en: 'Marius really kept the team together with his great organization and clear communication. We couldnt have got this far without his commitment.',
        de: 'Marius hat das Team mit seiner hervorragenden Organisation und klaren Kommunikation wirklich zusammengehalten. Ohne sein Engagement hätten wir es nicht so weit geschafft.'
      }
    },
    {
      name: 'V. Schuster',
      position: 'Team Partner',
      reference: {
        en: 'Marius really kept the team together with his great organization and clear communication. We couldnt have got this far without his commitment.',
        de: 'Marius hat das Team mit seiner hervorragenden Organisation und klaren Kommunikation wirklich zusammengehalten. Ohne sein Engagement hätten wir es nicht so weit geschafft.'
      }
    },
    {
      name: 'V. Schuster',
      position: 'Team Partner',
      reference: {
        en: 'Marius really kept the team together with his great organization and clear communication. We couldnt have got this far without his commitment.',
        de: 'Marius hat das Team mit seiner hervorragenden Organisation und klaren Kommunikation wirklich zusammengehalten. Ohne sein Engagement hätten wir es nicht so weit geschafft.'
      }
    }
  ]
}
