import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TextService } from '../../services/text.service';
import { GlobalStatesService } from '../../services/global-states.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit, OnDestroy {
  txtService = inject(TextService);

  isLegalOpen = false;
  private sub: Subscription | null = null;

  currentLang: 'en' | 'de' = 'en';

  constructor(private globalState: GlobalStatesService) { }

  ngOnInit(): void {
    const legalSub = this.globalState.isLegalOpen$.subscribe((isLegalOpen) => {
      this.isLegalOpen = isLegalOpen;
    });

    const langSub = this.globalState.currentLang$
      .subscribe((lang) => {
        this.currentLang = lang;
      });

    this.sub = new Subscription();
    this.sub.add(legalSub);
    this.sub.add(langSub);

  }
  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  openLegal() {
    this.globalState.toggleLegal();
  }

  openInNewWindow(url: string): void {
    window.open(url, '_blank');
  }

  scrollToId(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
