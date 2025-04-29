import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { TextService } from '../shared/services/text.service';
import { GlobalStatesService } from '../shared/services/global-states.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit, OnDestroy {
  txtService = inject(TextService);
  
  currentLang: 'en' | 'de' = 'en';
  private sub: Subscription | null = null;

  constructor(private statesService: GlobalStatesService) { }

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

  scrollToId(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
