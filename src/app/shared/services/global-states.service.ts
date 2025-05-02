import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
}
