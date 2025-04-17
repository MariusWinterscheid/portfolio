import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsService } from '../../shared/services/settings.service';
import { TextService } from '../../shared/services/text.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  txtService = inject(TextService);
  settingsService = inject(SettingsService);
}
