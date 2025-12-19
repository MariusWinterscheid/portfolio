import { isPlatformBrowser } from '@angular/common';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GlobalStatesService {
  private isNavOpen = new BehaviorSubject<boolean>(false);
  isNavOpen$ = this.isNavOpen.asObservable();

  private currentLang = new BehaviorSubject<'en' | 'de'>('en');
  currentLang$ = this.currentLang.asObservable();

  private isPrivacyOpen = new BehaviorSubject<boolean>(false);
  isPrivacyOpen$ = this.isPrivacyOpen.asObservable();

  private hideContactForm = new BehaviorSubject<boolean>(false);
  hideContactForm$ = this.hideContactForm.asObservable();

  private isMsgOpen = new BehaviorSubject<boolean>(false);
  isMsgOpen$ = this.isMsgOpen.asObservable();
  private msgBg = new BehaviorSubject<'warn' | 'info'>('info');
  msgBg$ = this.msgBg.asObservable();

  // Key for local storage
  private readonly LANG_STORAGE_KEY = 'app.language';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Only load local storage data on the browser
    if (isPlatformBrowser(this.platformId)) {
      this.loadLanguageFromLocalStorage();
    }
  }

  private loadLanguageFromLocalStorage(): void {
    try {
      const savedLang = localStorage.getItem(this.LANG_STORAGE_KEY);
      if (savedLang === 'en' || savedLang === 'de') {
        this.currentLang.next(savedLang as 'en' | 'de');
      }
    } catch (e) {
      console.error('Error loading language from local storage', e);
    }
  }

  private saveLanguageToLocalStorage(lang: 'en' | 'de'): void {
    try {
      localStorage.setItem(this.LANG_STORAGE_KEY, lang);
    } catch (e) {
      console.error('Error saving language to local storage', e);
    }
  }

  switchLang() {
    const newLang = this.currentLang.value === 'en' ? 'de' : 'en';
    this.currentLang.next(newLang);
    this.saveLanguageToLocalStorage(newLang);
  }
  setLang(lang: 'en' | 'de') {
    this.currentLang.next(lang);
    this.saveLanguageToLocalStorage(lang);
  }

  toggleNav() {
    this.isNavOpen.next(!this.isNavOpen.value);
    this.toggleScroll();
  }
  closeNav() {
    this.isNavOpen.next(false);
    this.toggleScroll();
  }

  setHideContactForm(hide: boolean) {
    this.hideContactForm.next(hide);
  }

  togglePrivacy() {
    this.isPrivacyOpen.next(!this.isPrivacyOpen.value);
    this.toggleScroll();
  }

  toggleScroll(): void {
    if (typeof document === 'undefined') return;

    const body = document.body;
    const shouldDisableScroll = this.isNavOpen.value;

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
