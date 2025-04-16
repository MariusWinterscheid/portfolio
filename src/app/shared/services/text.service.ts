import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  constructor() { }

  txtNav = [
    {
      title: 'nav1',
      en: 'About Me',
      de: 'Über Mich'
    },
    {
      title: 'nav2',
      en: 'My Skills',
      de: 'Meine Fähigkeiten'
    },
    {
      title: 'nav3',
      en: 'Portfolio',
      de: 'Portfolio'
    }
  ]

  txtHero = {
    'mainTitle': {
      title: 'mainTitle',
      en: 'Frontend Developer',
      de: 'Frontend Entwickler'
    },
    'developer': {
      title: 'developer',
      en: 'Marius Winterscheid',
      de: 'Marius Winterscheid'
    },
    'callToAction': {
      title: 'callToAction',
      en: 'Scroll Down',
      de: 'Nach Unten Scrollen'
    }
  }
}
