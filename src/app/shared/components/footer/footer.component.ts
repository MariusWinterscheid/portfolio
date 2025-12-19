import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TextService } from '../../services/text.service';
import { GlobalStatesService } from '../../services/global-states.service';
import { ContactComponent } from '../../../sections/contact/contact.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from "@angular/router";


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    ContactComponent,
    CommonModule,
    RouterLink,
    RouterModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit, OnDestroy {
  txtService = inject(TextService);

  hideContactForm = false;
  private sub: Subscription | null = null;

  currentLang: 'en' | 'de' = 'en';

  constructor(private globalState: GlobalStatesService) { }

  ngOnInit(): void {
    const hideContactForm = this.globalState.hideContactForm$.subscribe((hideContactForm) => {
      this.hideContactForm = hideContactForm;
    });

    const langSub = this.globalState.currentLang$
      .subscribe((lang) => {
        this.currentLang = lang;
      });

    this.sub = new Subscription();
    this.sub.add(langSub);
    this.sub.add(hideContactForm);

  }
  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  openInNewWindow(url: string): void {
    window.open(url, '_blank');
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  onClickImprint() {
    this.globalState.setHideContactForm(true);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
