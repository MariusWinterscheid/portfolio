import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // ← NEU
import { Subscription } from 'rxjs';
import { TextService } from '../../services/text.service';
import { GlobalStatesService } from '../../services/global-states.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],  // ← RouterModule HINZUFÜGEN
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit, OnDestroy {
  currentLang: 'en' | 'de' = 'en';
  isnavOpen = false;
  sub: Subscription | null = null;
  txtService = inject(TextService);
  private router = inject(Router);  // ← inject()
  private statesService = inject(GlobalStatesService);  // ← inject()

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

  clickNavItem(id: string) {
    this.statesService.closeNav();
    this.statesService.setHideContactForm(false);

    this.router.navigate(['']).then(() => {
      this.scrollToId(id);
    });
  }

  scrollToId(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
