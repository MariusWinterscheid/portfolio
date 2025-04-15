import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TxtproviderService {

  constructor() { }

  navtxt = [
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
}
