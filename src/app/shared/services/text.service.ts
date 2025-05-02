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
      de: 'Über Mich',
      id: 'about'
    },
    {
      title: 'nav2',
      en: 'My Skills',
      de: 'Meine Fähigkeiten',
      id: 'skills'
    },
    {
      title: 'nav3',
      en: 'Portfolio',
      de: 'Portfolio',
      id: 'portfolio'
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
    'title': {
      en: 'Say hi!',
      de: 'Kontakt'
    },
    'disclaimer': {
      en: 'Want to discuss a new project?',
      de: 'Haben Sie eine Projektidee?'
    },
    'text': {
      en: "Say hello! Let's discuss your ideas and make it happen.",
      de: 'Kontaktieren Sie mich! Gerne spreche ich mit Ihnen über Ihre Ideen.'
    },
    'inputName': {
      en: 'Your name',
      de: 'Ihr Name'
    },
    'errName': {
      en: 'Your name is required',
      de: 'Ihr Name muss angegeben werden'
    },
    'inputMail': {
      en: 'Your email',
      de: 'Ihre E-Mail'
    },
    'errMail': {
      en: 'Your email is required',
      de: 'Ihre E-Mail muss angegeben werden'
    },
    'inputMsg': {
      en: 'Your message',
      de: 'Ihre Nachricht'
    },
    'errMsg': {
      en: 'Your message is empty',
      de: 'Bitte geben Sie eine Nachricht ein'
    },
    'policy1': {
      en: "I've read the ",
      de: "Ich habe die "
    },
    'policy2': {
      en: 'privacy policy ',
      de: 'Datenschutzrichtlinie '
    },
    'policy3': {
      en: 'and agree to the processing of my data as outlined.',
      de: 'gelesen, und stimme der Verarbeitung meiner Daten wie beschrieben zu.'
    },
    'errPolicy': {
      en: 'Please accept the privacy policy.',
      de: 'Bitte die Datenschutzbestimmung akzeptieren'
    }
  }

  txtFooter = {
    'mailTo': {
      en: "mailto:connect@marius-winterscheid.de?subject=Inquiry%20Regarding%20Your%20Services&body=Dear%20Winterscheid%20EDV%20Team,%0D%0A%0D%0AI%20hope%20this%20message%20finds%20you%20well.%20I%20am%20reaching%20out%20to%20inquire%20about%20your%20services%20and%20would%20appreciate%20the%20opportunity%20to%20discuss%20how%20we%20might%20work%20together.%0D%0A%0D%0APlease%20let%20me%20know%20a%20convenient%20time%20for%20a%20brief%20conversation.%0D%0A%0D%0AThank%20you%20in%20advance%20for%20your%20time.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Full%20Name]%0D%0A[Your%20Contact%20Information]",
      de: "mailto:connect@marius-winterscheid.de?subject=Anfrage%20zu%20Ihren%20Dienstleistungen&body=Sehr%20geehrtes%20Winterscheid%20EDV-Team,%0D%0A%0D%0Aich%20hoffe,%20dass%20diese%20Nachricht%20Sie%20wohlbehalten%20erreicht.%20Ich%20möchte%20mich%20über%20Ihre%20Dienstleistungen%20informieren%20und%20würde%20mich%20freuen,%20wenn%20wir%20die%20Möglichkeit%20zu%20einem%20Gespräch%20finden%20könnten.%0D%0A%0D%0ABitte%20teilen%20Sie%20mir%20einen%20passenden%20Termin%20für%20ein%20kurzes%20Gespräch%20mit.%0D%0A%0D%0AVielen%20Dank%20im%20Voraus%20für%20Ihre%20Zeit.%0D%0A%0D%0AMit%20freundlichen%20Grüßen,%0D%0A[Ihr%20vollständiger%20Name]%0D%0A[Ihre%20Kontaktinformationen]"
    }
  }

  txtLegal ={
    'mailTo': {
      en: "mailto:connect@marius-winterscheid.de?subject=Inquiry%20of%20Legal%20Notice&body=Dear%20Sir%20or%20Madam,%0D%0A%0D%0AI%20have%20a%20question%20regarding%20legal%20notice.%20Please%20get%20in%20touch%20with%20me.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]",
      de: "mailto:connect@marius-winterscheid.de?subject=Anfrage%20zum%20Impressum&body=Sehr%20geehrte%20Damen%20und%20Herren,%0D%0A%0D%0Aich%20habe%20eine%20Anfrage%20zum%20Impressum.%20Bitte%20nehmen%20Sie%20Kontakt%20mit%20mir%20auf.%0D%0A%0D%0AMit%20freundlichen%20Gr%C3%BC%C3%9Fen,%0D%0A%5BIhr%20Name%5D"
    }
  }
}
