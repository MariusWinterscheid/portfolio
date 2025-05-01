import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TextService } from '../../shared/services/text.service';
import { GlobalStatesService } from '../../shared/services/global-states.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  currentLang: 'en' | 'de' = 'en';
  sub: Subscription | null = null;

  txtService = inject(TextService);

  constructor( private statesService: GlobalStatesService ) { }

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
}
