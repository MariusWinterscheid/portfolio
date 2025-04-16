import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  currentLang: 'en' | 'de' = 'en';
  isNavOpen = false;
}
