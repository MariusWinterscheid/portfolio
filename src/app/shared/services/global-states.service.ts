import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalStatesService {
  private isNavOpen = new BehaviorSubject<boolean>(false);
  isNavOpen$ = this.isNavOpen.asObservable();

  private currentLang = new BehaviorSubject<'en' | 'de'>('en');
  currentLang$ = this.currentLang.asObservable();

  private isLegalOpen = new BehaviorSubject<boolean>(false);
  isLegalOpen$ = this.isLegalOpen.asObservable();

  private isPrivacyOpen = new BehaviorSubject<boolean>(false);
  isPrivacyOpen$ = this.isPrivacyOpen.asObservable();

  private isMsgOpen = new BehaviorSubject<boolean>(false);
  isMsgOpen$ = this.isMsgOpen.asObservable();
  private msgBg = new BehaviorSubject<'warn' | 'info'>('info');
  msgBg$ = this.msgBg.asObservable();

  constructor() { }

  toggleNav() {
    this.isNavOpen.next(!this.isNavOpen.value);
    this.toggleScroll();
  }
  closeNav() {
    this.isNavOpen.next(false);
    this.toggleScroll();
  }

  switchLang() {
    const newLang = this.currentLang.value === 'en' ? 'de' : 'en';
    this.currentLang.next(newLang);
  }
  setLang(lang: 'en' | 'de') {
    this.currentLang.next(lang);
  }

  toggleLegal() {
    this.isLegalOpen.next(!this.isLegalOpen.value);
    this.toggleScroll();
  }

  togglePrivacy() {
    this.isPrivacyOpen.next(!this.isPrivacyOpen.value);
    this.toggleScroll();
  }

  toggleScroll(): void {
    const body = document.body;

    const shouldDisableScroll = this.isNavOpen.value || this.isLegalOpen.value;

    if (shouldDisableScroll) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflowX = 'hidden';
      body.style.overflowY = 'auto';
    }
  }

  sendUserFeedback(bg: 'warn' | 'info') {
  this.msgBg.next(bg);
  this.isMsgOpen.next(true);
  setTimeout(() => {
    this.isMsgOpen.next(false);
  }, 4000);
}

}
