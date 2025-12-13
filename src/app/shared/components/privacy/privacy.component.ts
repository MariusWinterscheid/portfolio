import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, inject, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalStatesService } from '../../services/global-states.service';
import { TextService } from '../../services/text.service';



@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class PrivacyComponent implements OnInit, OnDestroy {

  txtService = inject(TextService);

  isPrivacyOpen = false;
  private sub: Subscription | null = null;

  currentLang: 'en' | 'de' = 'en';

  constructor(private statesService: GlobalStatesService) { }

  ngOnInit(): void {
    const subIsLegalOpen = this.statesService.isPrivacyOpen$.subscribe((isPrivacyOpen) => {
      this.isPrivacyOpen = isPrivacyOpen;
    });

    const subLang = this.statesService.currentLang$.subscribe((lang) => {
      this.currentLang = lang;
    });

    this.sub = new Subscription();
    this.sub.add(subIsLegalOpen);
    this.sub.add(subLang);
  }
  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onClickPrivacy() {
    this.statesService.togglePrivacy();
  }
}
