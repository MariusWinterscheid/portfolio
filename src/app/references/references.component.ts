import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { TextService } from '../shared/services/text.service';
import { GlobalStatesService } from '../shared/services/global-states.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent implements OnInit, OnDestroy {
  currentLang: 'en' | 'de' = 'en';
  private sub: Subscription | null = null;

  txtService = inject(TextService);
  
  constructor(private statesService: GlobalStatesService) {}

  ngOnInit(): void {
    this.sub = this.statesService.currentLang$.subscribe((lang) => {
      this.currentLang = lang;
    });
  }
  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

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
