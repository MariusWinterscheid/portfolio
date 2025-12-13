import { Component, inject, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { GlobalStatesService } from '../../services/global-states.service';
import { TextService } from '../../services/text.service';


@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LegalComponent implements OnInit, OnDestroy {
  txtService = inject(TextService);

  private sub: Subscription | null = null;

  currentLang: 'en' | 'de' = 'en';

  constructor(private statesService: GlobalStatesService) { }

  ngOnInit(): void {
    const subLang = this.statesService.currentLang$.subscribe((lang) => {
      this.currentLang = lang;
    });

    this.sub = new Subscription();
    this.sub.add(subLang);
  }
  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
