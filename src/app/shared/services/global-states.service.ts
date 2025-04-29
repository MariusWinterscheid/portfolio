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

  constructor() { }

  toggleNav() {
    this.isNavOpen.next(!this.isNavOpen.value);
  }
  closeNav() {
    this.isNavOpen.next(false);
  }

  switchLang() {
    const newLang = this.currentLang.value === 'en' ? 'de' : 'en';
    this.currentLang.next(newLang);
  } 
  setLang(lang: 'en' | 'de') {
    this.currentLang.next(lang);
  } 
}
