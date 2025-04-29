import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextService } from '../../shared/services/text.service';
import { GlobalStatesService } from '../../shared/services/global-states.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit, OnDestroy {
  currentLang: 'en' | 'de' = 'en';
  isnavOpen = false;
  sub: Subscription | null = null;
  txtService = inject(TextService);

  constructor(private statesService: GlobalStatesService) {}
  
  ngOnInit(): void {
    this.sub = this.statesService.currentLang$.subscribe((lang) => {
      this.currentLang = lang;
    });
    this.sub = this.statesService.isNavOpen$.subscribe((isNavOpen) => {
      this.isnavOpen = isNavOpen;
    });
  }
  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  clickNavItem(id: string){
    this.statesService.closeNav();
    this.scrollToId(id);
  }

  scrollToId(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
