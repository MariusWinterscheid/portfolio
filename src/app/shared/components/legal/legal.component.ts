import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { GlobalStatesService } from '../../services/global-states.service';
import { TextService } from '../../services/text.service';


@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './legal.component.html',
  styleUrl: './legal.component.scss'
})
export class LegalComponent implements OnInit, OnDestroy {
  txtService = inject(TextService);

  isLegalOpen = false;
  private sub: Subscription | null = null;

  currentLang: 'en' | 'de' = 'en';

  constructor(private statesService: GlobalStatesService) { }

  ngOnInit(): void {
    const subIsLegalOpen = this.statesService.isLegalOpen$.subscribe((isLegalOpen) => {
      this.isLegalOpen = isLegalOpen;
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

  onClickLegal() {
    this.statesService.toggleLegal();
  }
}
