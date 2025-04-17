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
      en: 'Frontend Developer',
      de: 'Frontend Entwickler'
    },
    'developer': {
      en: 'Marius Winterscheid',
      de: 'Marius Winterscheid'
    },
    'callToAction': {
      en: 'Scroll Down',
      de: 'Nach Unten Scrollen'
    }
  }

  txtAbout = {
    'title': {
      en: 'About Me',
      de: 'Über Mich'
    },
    'text': {
      en: 'I am a passionate Frontend Developer with a strong focus on creating user-friendly and visually appealing web applications. I have a solid understanding of HTML, CSS, and JavaScript, and I am always eager to learn new technologies and improve my skills.',
      de: 'Ich bin ein leidenschaftlicher Frontend-Entwickler mit einem starken Fokus auf die Erstellung benutzerfreundlicher und visuell ansprechender Webanwendungen. Ich habe ein solides Verständnis von HTML, CSS und JavaScript und bin immer bestrebt, neue Technologien zu lernen und meine Fähigkeiten zu verbessern.'
    },
    'basedIn': {
      en: 'Based in Kürten by Cologne',
      de: 'Aus Kürten bei Köln'
    },
    'wayOfWorking': {
      en: 'Open to work Remotely',
      de: 'Bereit für Remote-Arbeit'
    },
    'btnTxt': {
      en: "Let's Talk",
      de: 'Kontakt'
    }
  }

  txtSkills = {
    'title': {
      en: 'My Skills',
      de: 'Meine Skills'
    },
    'text1': {
      en: "Don't see the skill you need?",
      de: 'Sie sehen die benötigte Fähigkeit nicht?'
    },
    'text2': {
      en: 'Contact me',
      de: 'Kontaktieren Sie mich'
    },
    'text3': {
      en: "I'm always ready to learn",
      de: 'Ich bin immer bereit zu lernen'
    }
  }

  txtPortfolio = {
    'title': {
      en: 'Portfolio',
      de: 'Portfolio'
    },
    'disclaimer': {
      en: 'Explore a selection of my work here - Interact with my projects to see my sills in action.',
      de: 'Hier finden Sie eine Auswahl meiner Arbeiten - Interagieren Sie mit meinen Projekten, um meine Fähigkeiten in Aktion zu sehen.'
    }
  }

  txtRef = {
    'title': {
      en: 'References',
      de: 'Referenzen'
    },
    'disclaimer': {
      en: 'Explore a selection of my work here - Interact with my projects to see my skills in action.',
      de: 'Hier finden Sie eine Auswahl meiner Arbeiten - Interagieren Sie mit meinen Projekten, um meine Fähigkeiten in Aktion zu sehen.'
    }
  }

  txtContact = {
    'title':{
      en: 'Say hi!',
      de: 'Kontakt'
    },
    'disclaimer':{
      en: 'Want to discuss a new project?',
      de: 'Haben Sie eine Projektidee?'
    },
    'text':{
      en: "Say hello! Let's discuss your ideas and make it happen.",
      de: 'Kontaktieren Sie mich! Gerne spreche ich mit Ihnen über Ihre Ideen.'
    }
  }
}
