import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TextService {
  constructor() { }

  mailAddressTxt = 'info@marius-winterscheid.de'
  mailAddressHtml = 'info&#64;marius-winterscheid.de'

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
      en: 'Explore a selection of my work here - Interact with my projects to see my skills in action.',
      de: 'Hier finden Sie eine Auswahl meiner Arbeiten - Interagieren Sie mit meinen Projekten, um meine Fähigkeiten in Aktion zu sehen.'
    },
    'demoInfo': {
      en: 'INFO: Direct GitHub links to the project and corresponding test access will be available soon.',
      de: 'INFO: Direkte Githublinks zum Projekt, und jeweilige Testzugänge sind bald verfügbar.'
    }
  }

  txtRef = {
    'title': {
      en: 'References',
      de: 'Referenzen'
    },
    'disclaimer': {
      en: 'Below you will find opinions and feedback from others about me and my work.',
      de: 'Nachfolgend finden Sie Meinungen und Rückmeldungen anderer über mich und meine Arbeit.'
    },
    'demoInfo': {
      en: 'Current content is fictitious and for demonstration purposes only.',
      de: 'Der aktuelle Inhalt der Kommentare ist fiktiv und allein zu Demozwecken.'
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
      en: 'privacy policy',
      de: 'Datenschutzrichtlinie'
    },
    'policy3': {
      en: ' and agree to the processing of my data as outlined.',
      de: ' gelesen, und stimme der Verarbeitung meiner Daten wie beschrieben zu.'
    },
    'errPolicy': {
      en: 'Please accept the privacy policy.',
      de: 'Bitte die Datenschutzbestimmung akzeptieren'
    }
  }

  txtFooter = {
    'mailTo': {
      en: "mailto:" + this.mailAddressTxt + "?subject=Inquiry%20Regarding%20Your%20Services&body=Dear%20Winterscheid%20EDV%20Team,%0D%0A%0D%0AI%20hope%20this%20message%20finds%20you%20well.%20I%20am%20reaching%20out%20to%20inquire%20about%20your%20services%20and%20would%20appreciate%20the%20opportunity%20to%20discuss%20how%20we%20might%20work%20together.%0D%0A%0D%0APlease%20let%20me%20know%20a%20convenient%20time%20for%20a%20brief%20conversation.%0D%0A%0D%0AThank%20you%20in%20advance%20for%20your%20time.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Full%20Name]%0D%0A[Your%20Contact%20Information]",
      de: "mailto:" + this.mailAddressTxt + "?subject=Anfrage%20zu%20Ihren%20Dienstleistungen&body=Sehr%20geehrtes%20Winterscheid%20EDV-Team,%0D%0A%0D%0Aich%20hoffe,%20dass%20diese%20Nachricht%20Sie%20wohlbehalten%20erreicht.%20Ich%20möchte%20mich%20über%20Ihre%20Dienstleistungen%20informieren%20und%20würde%20mich%20freuen,%20wenn%20wir%20die%20Möglichkeit%20zu%20einem%20Gespräch%20finden%20könnten.%0D%0A%0D%0ABitte%20teilen%20Sie%20mir%20einen%20passenden%20Termin%20für%20ein%20kurzes%20Gespräch%20mit.%0D%0A%0D%0AVielen%20Dank%20im%20Voraus%20für%20Ihre%20Zeit.%0D%0A%0D%0AMit%20freundlichen%20Grüßen,%0D%0A[Ihr%20vollständiger%20Name]%0D%0A[Ihre%20Kontaktinformationen]"
    },
    'imprint': {
      en: 'Imprint',
      de: 'Impressum'
    }
  }

  txtLegal = {
    'title': {
      en: 'Legal Notice',
      de: 'Impressum'
    },
    'content': {
      en: `<h3>Imprint</h3>
           <ul>
           <li>Marius Winterscheid</li>
           <li>Im Binsenfeld 3</li>
           <li>51515 Kürten</li>
           <li>Germany</li>
           </ul><br>

           <h3>Exploring the Board</h3>
           <p>Email: `+ this.mailAddressHtml + `</p><br>

           <h3>Acceptance of terms</h3>
           <p>By accessing and using <span>Portfolio</span> (Product), you acknowledge and agree to the following terms and conditions, and any policies, guidelines, or amendments thereto that may be presented to you from time to time. We, the listed students, may update or change the terms and conditions from time to time without notice.</p>
           <br>

           <h3>Scope and ownership of the product</h3>
           <p><span>Portfolio</span> has been developed as part of a student group project in a web development bootcamp at the <span>Developer Akademie GmbH</span>. It has an educational purpose and is not intended for extensive personal & business usage. As such, we cannot guarantee consistent availability, reliability, accuracy, or any other aspect of quality regarding this Product.</p>
           <br>
           <p>The design of <span>Portfolio</span> is owned by the <span>Developer Akademie GmbH</span>. Unauthorized use, reproduction, modification, distribution, or replication of the design is strictly prohibited.</p>
           <br>

           <h3>Proprietary rights</h3>
           <p>Aside from the design owned by <span>Developer Akademie GmbH</span>, we, the listed students, retain all proprietary rights in <span>Portfolio</span>, including any associated copyrighted material, trademarks, and other proprietary information.</p>
           <br>

           <h3>Use of the product</h3>
           <p><span>Portfolio</span> is intended to be used for lawful purposes only, in accordance with all applicable laws and regulations. Any use of <span>Portfolio</span> for illegal activities, or to harass, harm, threaten, or intimidate another person, is strictly prohibited. You are solely responsible for your interactions with other users of Portfolio.</p>
           <br>

           <h3>Disclaimer of warranties and limitation of liability</h3>
           <p><span>Portfolio</span> is provided "as is" without warranty of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. In no event will we, the listed students, or the <span>Developer Akademie</span>, be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses, even if we have been advised of the possibility of such damages, arising out of or in connection with the use or performance of <span>Portfolio</span>.</p>
           <br>

           <h3>Indemnity</h3>
           <p>You agree to indemnify, defend and hold harmless us, the listed students, the <span>Developer Akademie</span>, and our affiliates, partners, officers, directors, agents, and employees, from and against any claim, demand, loss, damage, cost, or liability (including reasonable legal fees) arising out of or relating to your use of <span>Portfolio</span> and/or your breach of this Legal Notice.</p>
           <br>
           <p>For any questions or notices, please contact us at ` + this.mailAddressHtml + `</p>
           <br>
           <p>Last updated: December 2025</p>
           `,
      de: `<h3>Impressum</h3>
          <ul>
          <li>Marius Winterscheid</li>
          <li>Im Binsenfeld 3</li>
          <li>51515 Kürten</li>
          <li>Deutschland</li>
          </ul><br>

          <h3>Kontakt</h3>
          <p>E-Mail: `+ this.mailAddressHtml + `</p><br>

          <h3>Annahme der Bedingungen</h3>
          <p>Durch den Zugriff auf und die Nutzung von <span>Portfolio</span> (Produkt) erkennen Sie die folgenden Bedingungen und Richtlinien sowie etwaige Änderungen daran an und stimmen diesen zu. Wir, die aufgeführten Studierenden, behalten uns das Recht vor, die Bedingungen jederzeit ohne Ankündigung zu ändern oder zu aktualisieren.</p>
          <br>

          <h3>Zweck und Eigentum am Produkt</h3>
          <p><span>Portfolio</span> wurde als Teil eines Gruppenprojekts im Web-Development-Bootcamp der <span>Developer Akademie Gmbh</span> entwickelt. Es dient ausschließlich Bildungszwecken und ist nicht für umfangreiche private oder geschäftliche Nutzung vorgesehen. Daher können wir keine Garantie für Verfügbarkeit, Zuverlässigkeit, Genauigkeit oder sonstige Qualitätsmerkmale dieses Produkts übernehmen.</p>
          <br>
          <p>Das Design von <span>Portfolio</span> ist Eigentum der <span>Developer Akademie Gmbh</span>. Jegliche unbefugte Nutzung, Vervielfältigung, Modifikation, Verbreitung oder Reproduktion des Designs ist strengstens untersagt.</p>
          <br>

          <h3>Eigentumsrechte</h3>
          <p>Abgesehen vom Design der <span>Developer Akademie Gmbh</span> behalten wir, die aufgeführten Studierenden, alle Eigentumsrechte an <span>Portfolio</span>, einschließlich aller damit verbundenen urheberrechtlich geschützten Materialien, Marken und sonstigen proprietären Informationen.</p>
          <br>

          <h3>Nutzung des Produkts</h3>
          <p><span>Portfolio</span> darf ausschließlich zu rechtmäßigen Zwecken und im Einklang mit allen geltenden Gesetzen und Vorschriften genutzt werden. Jegliche Nutzung für illegale Aktivitäten oder zur Belästigung, Schädigung, Bedrohung oder Einschüchterung anderer Personen ist strengstens verboten. Sie sind allein für Ihre Interaktionen mit anderen Nutzern von <span>Portfolio</span> verantwortlich.</p>
          <br>

          <h3>Schutzhaftungsausschluss und Haftungsbeschränkung</h3>
          <p><span>Portfolio</span> wird "wie gesehen" ohne jegliche Garantien, ausdrücklich oder stillschweigend, bereitgestellt, einschließlich, aber nicht beschränkt auf die stillschweigenden Garantien der Marktfähigkeit, Eignung für einen bestimmten Zweck und Nicht-Verletzung von Rechten Dritter. Wir, die aufgeführten Studierenden, oder die <span>Developer Akademie</span> haften in keinem Fall für direkte, indirekte, zufällige, spezielle, folgenschwere oder vorbildliche Schäden, einschließlich, aber nicht beschränkt auf Schäden durch entgangenen Gewinn, Geschäftsunterbrechungen, Datenverlust oder sonstige immaterielle Verluste, auch wenn wir über die Möglichkeit solcher Schäden unterrichtet wurden, die sich aus der Nutzung oder Leistung von <span>Portfolio</span> ergeben.</p>
          <br>

          <h3>Schadensersatz</h3>
          <p>Sie verpflichten sich, uns, die aufgeführten Studierenden, die <span>Developer Akademie</span> sowie unsere verbundenen Unternehmen, Partner, Vorstände, Geschäftsführer, Bevollmächtigte und Mitarbeiter von und gegen alle Ansprüche, Forderungen, Verluste, Schäden, Kosten oder Haftungen (einschließlich angemessener Anwaltskosten) freizustellen, die sich aus Ihrer Nutzung von <span>Portfolio</span> und/oder der Verletzung dieses Impressums ergeben.</p>
          <br>
          <p>Bei Fragen oder Mitteilungen kontaktieren Sie uns bitte unter ` + this.mailAddressHtml + `</p>
          <br>
          <p>Zuletzt aktualisiert: Dezember 2025</p>`
    },
    'mailTo': {
      en: "mailto:" + this.mailAddressTxt + "?subject=Inquiry%20of%20Legal%20Notice&body=Dear%20Sir%20or%20Madam,%0D%0A%0D%0AI%20have%20a%20question%20regarding%20legal%20notice.%20Please%20get%20in%20touch%20with%20me.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]",
      de: "mailto:" + this.mailAddressTxt + "?subject=Anfrage%20zum%20Impressum&body=Sehr%20geehrte%20Damen%20und%20Herren,%0D%0A%0D%0Aich%20habe%20eine%20Anfrage%20zum%20Impressum.%20Bitte%20nehmen%20Sie%20Kontakt%20mit%20mir%20auf.%0D%0A%0D%0AMit%20freundlichen%20Gr%C3%BC%C3%9Fen,%0D%0A%5BIhr%20Name%5D"
    }
  }

  txtPrivacy = {
    'title': {
      en: 'Privacy Policy',
      de: 'Datenschutzerklärung'
    },
    'content': {
      en: `<h3>1. Data Protection at a Glance</h3>
         <p>General Notes</p>
         <p>The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is all data with which you can be personally identified. You will find detailed information on the subject of data protection in our data protection declaration listed under this text.</p>
         <p>Data Collection on this Website</p>
         <p>Who is responsible for data collection on this website?
         The data processing on this website is carried out by the website operator. You can find their contact details in the "Information on the Responsible Party" section in this data protection declaration.</p>
         <p>How do we collect your data?</p>
         <p>Your data is collected partly by you providing it to us. This may, for example, include data that you enter in a contact form.
         Other data is collected automatically or with your consent when you visit the website through our IT systems. These are primarily technical data (e.g. internet browser, operating system or time of page call). This data is collected automatically as soon as you enter this website.</p>
         <p>What do we use your data for?</p>
         <p>Part of the data is collected to ensure the error-free provision of the website. Other data may be used to analyze your user behavior. If contracts can be concluded or initiated via the website, the transmitted data will also be processed for contract offers,
         orders or other order requests.</p>
         <p>What rights do you have regarding your data?</p>
         <p>You have the right at any time to request free information about the origin, recipient and purpose of your stored personal data. You also have the right to request the correction or deletion of this data. If you have given your consent to data processing,
         you can revoke this consent at any time for the future. You also have the right to request the restriction of the processing of your personal data under certain circumstances.
         Furthermore, you have the right to lodge a complaint with the competent supervisory authority.
         You can contact us at any time with regard to this and other questions on the subject of data protection.
         Analysis tools and tools from third-party providers
         Your surfing behavior can be statistically evaluated when you visit this website. This is done primarily with so-called analysis programs.
         You will find detailed information about these analysis programs in the following
         data protection declaration.</p>
         <br></br>

         <h3>2. Hosting</h3>
         <p>We host the content of our website with the following provider:</p>
         <p>Hetzner</p>
         <p>The provider is Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen (hereinafter Hetzner).</p>
         <p>You can find details in Hetzner's data protection declaration:</p>
         <p>https://www.hetzner.com/de/legal/privacy-policy/.</p>
         <p>The use of Hetzner is based on Art. 6 para. 1 lit. f GDPR. We have a
         legitimate interest in the most reliable presentation of our website possible. If appropriate consent has been obtained, processing is carried out exclusively on the basis of Art.
         6 para. 1 lit. a GDPR and § 25 para. 1 TDDDG, insofar as the consent includes the storage of cookies or access to information on the user's end device (e.g. device fingerprinting) within the meaning of the TDDDG.
         Consent can be revoked at any time.</p>
         <br></br>

         <h3>3. General Notes and Mandatory Information</h3>
         <p>Data Protection</p>
         <p>The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this data protection declaration.</p>
         <p>If you use this website, various personal data will be collected.
         Personal data is data with which you can be personally identified. This data protection declaration explains which data we collect and what we use it for. It also explains how and for what purpose this is done.</p>
         <p>We would like to point out that data transmission over the Internet (e.g. communication by e-mail)
         may have security vulnerabilities. Complete protection of data against access by third parties is not possible.</p>
         <p>Information on the responsible party</p>
         <p>The responsible party for data processing on this website is:</p>
         <p>Marius Winterscheid</p>
         <p>Im Binsenfeld 3</p>
         <p>51515 Kürten</p>
         <p>Phone: [Phone number of the responsible party]</p>
         <p>E-Mail: info@marius-winterscheid.de</p>
         <p>The responsible party is the natural or legal person who alone or jointly with others decides on
         the purposes and means of processing personal data (e.g. names, e-mail addresses, etc.).</p>
         <p>Storage duration</p>
         <p>Unless a more specific storage period is specified within this data protection declaration, your personal data will remain with us until the purpose for data processing no longer applies. If you assert a legitimate request for deletion or revoke your consent to data processing,
         your data will be deleted unless we have other legally permissible reasons for storing your
         personal data (e.g. retention periods under tax or commercial law); in the
         latter case, deletion will take place after these reasons cease to apply.</p>
         <p>General notes on the legal basis for data processing on this
         website</p>
         <p>If you have consented to data processing, we process your personal data on
         the basis of Art. 6 para. 1 lit. a GDPR or Art. 9 para. 2 lit. a GDPR, insofar as special categories of data
         are processed according to Art. 9 para. 1 GDPR. In the case of express consent to the transfer of personal data to third countries, the data processing is also carried out on the basis of Art.
         49 para. 1 lit. a GDPR. If you have consented to the storage of cookies or access to information in
         your end device (e.g. via device fingerprinting), the data processing is additionally carried out on the basis of § 25 para. 1 TDDDG. Consent can be revoked at any time. If your data is required for the performance of the contract or for the implementation of pre-contractual measures, we process your data on the basis of Art. 6 para. 1 lit. b GDPR. Furthermore, we process your data if it is required for the fulfillment of a legal obligation on the basis of Art. 6 para. 1 lit. c GDPR.
         Data processing may also be carried out on the basis of our legitimate interest pursuant to Art. 6 para. 1 lit. f
         GDPR. You will find information on the respective legal bases in the following
         sections of this data protection declaration.</p>
         <p>Recipients of personal data</p>
         <p>In the course of our business activities, we work with various external bodies. In some cases, it is also necessary to transmit personal data to these external bodies.
         We only pass on personal data to external bodies if this is necessary for the performance of a contract, if we are legally obliged to do so (e.g. passing on data to tax authorities), if we have a legitimate interest in the transfer pursuant to Art. 6 para. 1 lit. f GDPR or if another legal basis permits the transfer of data. When using processors, we only pass on our customers' personal data on the basis of a valid contract for order processing. In the case of joint processing, a contract for joint processing is concluded.</p>
         <p>Revocation of your consent to data processing</p>
         <p>Many data processing operations are only possible with your express consent. You can revoke a consent once given at any time. The lawfulness of the data processing carried out until revocation remains unaffected by the revocation.</p>
         <p>Right to object to data collection in specific cases and to direct marketing (Art. 21 GDPR)</p>
         <p>IF THE DATA PROCESSING IS CARRIED OUT ON THE BASIS OF ART. 6 PARA. 1 LIT. E OR F GDPR, YOU HAVE THE RIGHT AT ANY TIME, ON GROUNDS RELATING TO YOUR PARTICULAR SITUATION, TO OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA; THIS ALSO APPLIES TO PROFILING BASED ON THESE PROVISIONS. YOU WILL FIND THE RESPECTIVE LEGAL BASIS ON WHICH PROCESSING IS BASED IN THIS DATA PROTECTION DECLARATION. IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR AFFECTED PERSONAL DATA UNLESS WE CAN DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR THE PROCESSING WHICH OVERRIDE YOUR INTERESTS, RIGHTS AND FREEDOMS OR THE PROCESSING SERVES THE ESTABLISHMENT, EXERCISE OR DEFENSE OF LEGAL CLAIMS (OBJECTION PURSUANT TO ART. 21 PARA. 1 GDPR).</p>
         <p>IF YOUR PERSONAL DATA IS PROCESSED FOR DIRECT MARKETING PURPOSES, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF PERSONAL DATA CONCERNING YOU FOR THE PURPOSE OF SUCH ADVERTISING; THIS ALSO APPLIES TO PROFILING TO THE EXTENT IT IS RELATED TO SUCH DIRECT ADVERTISING. IF YOU OBJECT, YOUR PERSONAL DATA WILL NO LONGER BE USED FOR THE PURPOSE OF DIRECT ADVERTISING (OBJECTION PURSUANT TO ART. 21 PARA. 2 GDPR).</p>
         <p>Right to complain to the competent supervisory authority</p>
         <p>In the event of violations of the GDPR, data subjects have the right to lodge a complaint with a supervisory authority, in particular in the Member State of their habitual residence, place of work or place of the alleged violation. The right to lodge a complaint is without prejudice to any other administrative or court remedies.</p>
         <p>Right to data portability</p>
         <p>You have the right to have data that we process automatically on the basis of your consent or in fulfillment of a contract handed over to you or to a third party in a common, machine-readable format. If you request the direct transfer of the data to another controller, this will only be done insofar as it is technically feasible.</p>
         <p>Information, correction and deletion</p>
         <p>You have the right to free information about your stored personal data, its origin and recipient and the purpose of the data processing and, if applicable, a right to correction or deletion of this data at any time within the framework of the applicable legal provisions. You can contact us at any time with regard to this and other questions on the subject of personal data.</p>
         <p>Right to restriction of processing</p>
         <p>You have the right to request the restriction of the processing of your personal data.
         You can contact us at any time for this purpose. The right to restriction of processing exists in the following cases:</p>
         <p>If you contest the accuracy of your personal data stored with us, we usually need time to verify this. For the duration of the check, you have the right to request the restriction of the processing of your personal data.</p>
         <p>If the processing of your personal data was/is unlawful, you can request the restriction of data processing instead of deletion.</p>
         <p>If we no longer need your personal data, but you need it for the exercise, defense or assertion of legal claims, you have the right to request the restriction of the processing of your personal data instead of deletion.</p>
         <p>If you have lodged an objection pursuant to Art. 21 para. 1 GDPR, a balance must be struck between your and our interests. As long as it has not yet been determined whose interests prevail, you have the right to request the restriction of the processing of your personal data.</p>
         <p>If you have restricted the processing of your personal data, these data – apart from their storage – may only be processed with your consent or for the establishment, exercise or defense of legal claims or for the protection of the rights of another natural or legal person or for reasons of important public interest of the European Union or of a Member State.</p>
         <p>SSL or TLS encryption</p>
         <p>This page uses SSL or TLS encryption for security reasons and to protect the transmission of confidential content, such as orders or inquiries, that you send to us as the site operator. You can recognize an encrypted connection by the fact that the browser's address line changes from "http://" to "https://" and by the lock symbol in your browser line.</p>
         <p>If SSL or TLS encryption is activated, the data you transmit to us cannot be read by third parties.</p>
         <p>Objection to advertising e-mails</p>
         <p>We hereby object to the use of contact data published in the context of the imprint requirement for the transmission of advertising and information material not expressly requested. The operators of the pages expressly reserve the right to take legal action in the event of the unsolicited sending of advertising information, for example through spam e-mails.</p>
         <br></br>

         <h3>4. Data Collection on this Website</h3>
         <p>Cookies</p>
         <p>Our websites use so-called "cookies". Cookies are small data packets that do not cause any damage to your end device. They are either stored temporarily for the duration of a session (session cookies) or permanently (persistent cookies) on your end device. Session cookies are automatically deleted after the end of your visit. Persistent cookies remain stored on your end device until you delete them yourself or an automatic deletion by your web browser takes place.</p>
         <p>Cookies can be set by us (first-party cookies) or by third-party companies (so-called third-party cookies). Third-party cookies enable the integration of certain services of third-party companies within websites (e.g. cookies for processing payment services).</p>
         <p>Cookies have various functions. Numerous cookies are technically necessary because certain website functions would not work without them (e.g. shopping cart function or video display). Other cookies may be used to evaluate user behavior or for advertising purposes.</p>
         <p>Cookies that are necessary for the performance of the electronic communication process, for providing certain functions you have requested (e.g. for the shopping cart function) or for optimizing the website (e.g. cookies to measure web traffic) (necessary cookies) are stored on the basis of Art. 6 para. 1 lit. f GDPR, unless another legal basis is specified. The website operator has a legitimate interest in the storage of necessary cookies for the technically error-free and optimized provision of his services. If consent to the storage of cookies and similar recognition technologies has been requested, processing is carried out exclusively on the basis of this consent (Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TDDDG); consent can be revoked at any time.</p>
         <p>You can configure your browser so that you are informed about the setting of cookies and only allow cookies in individual cases, exclude the acceptance of cookies for certain cases or in general, and activate the automatic deletion of cookies when closing the browser. If cookies are deactivated, the functionality of this website may be restricted.
         You can find out which cookies and services are used on this website from this data protection declaration.</p>
         <p>Contact form</p>
         <p>If you send us inquiries via the contact form, your details from the inquiry form, including the contact details you provide there, will be stored by us for the purpose of processing the inquiry and in the event of follow-up questions. We do not pass this data on without your consent.</p>
         <p>The processing of this data is based on Art. 6 para. 1 lit. b GDPR if your inquiry is related to the fulfillment of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective processing of the inquiries addressed to us (Art. 6 para. 1 lit. f GDPR) or on your consent (Art. 6 para. 1 lit. a GDPR) if this has been requested; consent can be revoked at any time.</p>
         <p>The data you enter in the contact form will remain with us until you ask us to delete it, revoke your consent to storage or the purpose for data storage no longer applies (e.g. after your inquiry has been processed). Mandatory statutory provisions – in particular retention periods – remain unaffected.</p>
         <p>Inquiry by e-mail, telephone or fax</p>
         <p>If you contact us by e-mail, telephone or fax, your inquiry including all resulting personal data (name, inquiry) will be stored and processed by us for the purpose of processing your request. We do not pass this data on without your consent.</p>
         <p>The processing of this data is based on Art. 6 para. 1 lit. b GDPR if your inquiry is related to the fulfillment of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective processing of the inquiries addressed to us (Art. 6 para. 1 lit. f GDPR) or on your consent (Art. 6 para. 1 lit. a GDPR) if this has been requested; consent can be revoked at any time.</p>
         <p>The data you send us in the context of contact requests will remain with us until you ask us to delete it, revoke your consent to storage or the purpose for data storage no longer applies (e.g. after your request has been processed). Mandatory statutory provisions – in particular statutory retention periods – remain unaffected.</p>
         <br></br>

         <h3>5. Newsletter</h3>
         <p>Newsletter data</p>
         <p>If you would like to receive the newsletter offered on the website, we need an e-mail address from you as well as information that allows us to verify that you are the owner of the specified e-mail address and agree to receive the newsletter. No further data or only on a voluntary basis. We use this data exclusively for sending the requested information and do not pass it on to third parties.</p>
         <p>The processing of the data entered in the newsletter registration form takes place exclusively on the basis of your consent (Art. 6 para. 1 lit. a GDPR). The consent given to store the data, the e-mail address and its use for sending the newsletter can be revoked at any time, for example via the "unsubscribe" link in the newsletter. The lawfulness of the data processing operations already carried out remains unaffected by the revocation.</p>
         <p>The data you have provided us for the purpose of subscribing to the newsletter will be stored by us until your unsubscription from the newsletter with us or the newsletter service provider and deleted from the newsletter distribution list after you unsubscribe from the newsletter or after the purpose ceases to apply. We reserve the right to delete or block e-mail addresses from our newsletter distribution list at our own discretion within the framework of our legitimate interest pursuant to Art. 6 para. 1 lit. f GDPR.</p>
         <p>Data that has been stored by us for other purposes remains unaffected by this.</p>
         <p>After you unsubscribe from the newsletter distribution list, your e-mail address may be stored by us or the newsletter service provider in a blacklist, if necessary to prevent future mailings. The data from the blacklist will only be used for this purpose and will not be merged with other data. This serves both your interest and our interest in complying with legal requirements for sending newsletters (legitimate interest within the meaning of Art. 6 para. 1 lit. f GDPR). Storage in the blacklist is not time-limited. You can object to the storage if your interests outweigh our legitimate interest.</p>
         <br></br>

         <h3>6. Plugins and Tools</h3>
         <p>Google Fonts (local hosting)</p>
         <p>This page uses so-called Google Fonts provided by Google for the uniform display of fonts. The Google Fonts are installed locally. No connection to Google servers takes place.</p>
         <p>You can find further information on Google Fonts at
         https://developers.google.com/fonts/faq and in Google's data protection declaration:
         https://policies.google.com/privacy?hl=de.</p>
         <p>Font Awesome (local hosting)</p>
         <p>This page uses Font Awesome for the uniform display of fonts. Font Awesome is installed locally. No connection to Fonticons, Inc. servers takes place.</p>
         <p>You can find further information on Font Awesome in the Font Awesome data protection declaration at:
         https://fontawesome.com/privacy.</p>
         <p>MyFonts</p>
         <p>This page uses MyFonts. These are fonts that are loaded into your browser when you call up our website in order to ensure a uniform font display on the website. The provider is Monotype Imaging Holdings Inc., 600 Unicorn Park Drive, Woburn, Massachusetts 01801, USA.</p>
         <p>To check compliance with the license conditions and the number of monthly page views, MyFonts transmits your IP address together with the URL of our website and our contract data to its servers in the USA. According to Monotype, your IP address is anonymized immediately after transmission so that no personal reference can be established (anonymization).</p>
         <p>You can find details in Monotype's data protection declaration at
         https://www.monotype.com/de/rechtshinweise/datenschutzrichtlinie/datenschutzrichtlinie-zum-trackingvon-webschriften.</p>
         <p>The company has certification under the "EU-US Data Privacy Framework" (DPF). The DPF is an agreement between the European Union and the USA that is intended to ensure compliance with European data protection standards for data processing in the USA. Every company certified under the DPF undertakes to comply with these data protection standards. You can find further information on this from the provider at the following link:
         https://www.dataprivacyframework.gov/participant/6347.</p>
         <p>Source:</p>
         <p>https://www.e-recht24.de</p>`
,
      de: `<h3>1. Datenschutz auf einen Blick</h3>
          <p>Allgemeine Hinweise</p>
          <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
          passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen
          Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
          <p>Datenerfassung auf dieser Website</p>
          <p>Wer ist verantwortlich für die Datenerfassung auf dieser Website?
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
          können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.</p>
          <p>Wie erfassen wir Ihre Daten?</p>
          <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um
          Daten handeln, die Sie in ein Kontaktformular eingeben.
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere ITSysteme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit
          des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>
          <p>Wofür nutzen wir Ihre Daten?</p>
          <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere
          Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge
          geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote,
          Bestellungen oder sonstige Auftragsanfragen verarbeitet.</p>
          <p>Welche Rechte haben Sie bezüglich Ihrer Daten?</p>
          <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
          gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
          Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
          können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
          bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
          Analyse-Tools und Tools von Drittanbietern
          Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor
          allem mit sogenannten Analyseprogrammen.
          Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden
          Datenschutzerklärung.</p>
          <br></br>

          <h3>2. Hosting</h3>
          <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
          <p>Hetzner</p>
          <p>Anbieter ist die Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen (nachfolgend Hetzner).</p>
          <p>Details entnehmen Sie der Datenschutzerklärung von Hetzner:</p>
          <p>https://www.hetzner.com/de/legal/privacy-policy/.</p>
          <p>Die Verwendung von Hetzner erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein
          berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine
          entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art.
          6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den
          Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG
          umfasst. Die Einwilligung ist jederzeit widerrufbar.</p>
          <br></br>

          <h3>3. Allgemeine Hinweise und Pflichtinformationen</h3>
          <p>Datenschutz</p>
          <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
          personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
          dieser Datenschutzerklärung.</p>
          <p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
          Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende
          Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie
          und zu welchem Zweck das geschieht.</p>
          <p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
          Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
          möglich.</p>
          <p>Hinweis zur verantwortlichen Stelle</p>
          <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
          <p>Marius Winterscheid</p>
          <p>Im Binsenfeld 3</p>
          <p>51515 Kürten</p>
          <p>Telefon: [Telefonnummer der verantwortlichen Stelle]</p>
          <p>E-Mail: info@marius-winterscheid.de</p>
          <p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über
          die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.)
          entscheidet.</p>
          <p>Speicherdauer</p>
          <p>Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
          Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
          berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
          werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
          personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
          letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.</p>
          <p>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser
          Website</p>
          <p>Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf
          Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien
          nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung
          personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art.
          49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in
          Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich
          auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
          Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre
          Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese
          zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO.
          Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f
          DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden
          Absätzen dieser Datenschutzerklärung informiert.</p>
          <p>Empfänger von personenbezogenen Daten</p>
          <p>Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei
          ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich.
          Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer
          Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten
          an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe
          haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von
          Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen
          Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über
          gemeinsame Verarbeitung geschlossen.</p>
          <p>Widerruf Ihrer Einwilligung zur Datenverarbeitung</p>
          <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine
          bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
          Datenverarbeitung bleibt vom Widerruf unberührt.</p>
          <p>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen
          Direktwerbung (Art. 21 DSGVO)</p>
          <p>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO
          ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN
          SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN
          WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES
          PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT,
          ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN,
          WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES
          SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG
          NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE
          VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON
          RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</p>
          <p>WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN,
          SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE
          BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG
          EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN
          VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN
          ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH
          NACH ART. 21 ABS. 2 DSGVO).</p>
          <p>Beschwerderecht bei der zuständigen Aufsichtsbehörde</p>
          <p>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
          Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
          oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger
          verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>
          <p>Recht auf Datenübertragbarkeit</p>
          <p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
          automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format
          aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen
          verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>
          <p>Auskunft, Berichtigung und Löschung</p>
          <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
          Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den
          Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie
          zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.</p>
          <p>Recht auf Einschränkung der Verarbeitung</p>
          <p>Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
          folgenden Fällen:</p>
          <p>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir
          in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die
          Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</p>
          <p>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie
          statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</p>
          <p>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung,
          Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der
          Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</p>
          <p>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen
          Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen
          überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
          zu verlangen.</p>
          <p>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von
          ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder
          Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder
          juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder
          eines Mitgliedstaats verarbeitet werden.</p>
          <p>SSL- bzw. TLS-Verschlüsselung</p>
          <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum
          Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLSVerschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
          „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>
          <p>Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht
          von Dritten mitgelesen werden.</p>
          <p>Widerspruch gegen Werbe-E-Mails</p>
          <p>Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von
          nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die
          Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von
          Werbeinformationen, etwa durch Spam-E-Mails, vor.</p>
          <br></br>

          <h3>4. Datenerfassung auf dieser Website</h3>
          <p>Cookies</p>
          <p>Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Datenpakete und richten auf
          Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung
          (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies
          werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät
          gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.</p>
          <p>Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-PartyCookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von
          Drittunternehmen innerhalb von Webseiten (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).</p>
          <p>Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte
          Webseitenfunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige
          von Videos). Andere Cookies können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken
          verwendet werden.</p>
          <p>Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung
          bestimmter, von Ihnen erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur Optimierung der
          Website (z. B. Cookies zur Messung des Webpublikums) erforderlich sind (notwendige Cookies), werden auf
          Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird.
          Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur
          technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur
          Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die
          Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
          TDDDG); die Einwilligung ist jederzeit widerrufbar.</p>
          <p>Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und
          Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen
          sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der
          Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
          Welche Cookies und Dienste auf dieser Website eingesetzt werden, können Sie dieser
          Datenschutzerklärung entnehmen.</p>
          <p>Kontaktformular</p>
          <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
          Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage
          und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre
          Einwilligung weiter.</p>
          <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit
          der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
          erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
          effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
          Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit
          widerrufbar.</p>
          <p>Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
          auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
          (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen –
          insbesondere Aufbewahrungsfristen – bleiben unberührt.</p>
          <p>Anfrage per E-Mail, Telefon oder Telefax</p>
          <p>Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus
          hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens
          bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
          <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit
          der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
          erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
          effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
          Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit
          widerrufbar.</p>
          <p>Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung
          auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
          (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen –
          insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.</p>
          <br></br>

          <h3>5. Newsletter</h3>
          <p>Newsletterdaten</p>
          <p>Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine EMail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der
          angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere
          Daten werden nicht bzw. nur auf freiwilliger Basis erhoben. Diese Daten verwenden wir ausschließlich für
          den Versand der angeforderten Informationen und geben diese nicht an Dritte weiter.</p>
          <p>Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen Daten erfolgt ausschließlich auf
          Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte Einwilligung zur Speicherung der
          Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters können Sie jederzeit
          widerrufen, etwa über den „Austragen“-Link im Newsletter. Die Rechtmäßigkeit der bereits erfolgten
          Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.</p>
          <p>Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden von uns bis zu Ihrer
          Austragung aus dem Newsletter bei uns bzw. dem Newsletterdiensteanbieter gespeichert und nach der
          Abbestellung des Newsletters oder nach Zweckfortfall aus der Newsletterverteilerliste gelöscht. Wir
          behalten uns vor, E-Mail-Adressen aus unserem Newsletterverteiler nach eigenem Ermessen im Rahmen
          unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO zu löschen oder zu sperren.</p>
          <p>Daten, die zu anderen Zwecken bei uns gespeichert wurden, bleiben hiervon unberührt.</p>
          <p>Nach Ihrer Austragung aus der Newsletterverteilerliste wird Ihre E-Mail-Adresse bei uns bzw. dem
          Newsletterdiensteanbieter ggf. in einer Blacklist gespeichert, sofern dies zur Verhinderung künftiger
          Mailings erforderlich ist. Die Daten aus der Blacklist werden nur für diesen Zweck verwendet und nicht mit
          anderen Daten zusammengeführt. Dies dient sowohl Ihrem Interesse als auch unserem Interesse an der
          Einhaltung der gesetzlichen Vorgaben beim Versand von Newslettern (berechtigtes Interesse im Sinne des
          Art. 6 Abs. 1 lit. f DSGVO). Die Speicherung in der Blacklist ist zeitlich nicht befristet. Sie können der
          Speicherung widersprechen, sofern Ihre Interessen unser berechtigtes Interesse überwiegen.</p>
          <br></br>

          <h3>6. Plugins und Tools</h3>
          <p>Google Fonts (lokales Hosting)</p>
          <p>Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google
          bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet
          dabei nicht statt.</p>
          <p>Weitere Informationen zu Google Fonts finden Sie unter
          https://developers.google.com/fonts/faq und in der Datenschutzerklärung von Google:
          https://policies.google.com/privacy?hl=de.</p>
          <p>Font Awesome (lokales Hosting)</p>
          <p>Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten Font Awesome. Font Awesome ist lokal
          installiert. Eine Verbindung zu Servern von Fonticons, Inc. findet dabei nicht statt.</p>
          <p>Weitere Informationen zu Font Awesome finden Sie in der Datenschutzerklärung für Font Awesome unter:
          https://fontawesome.com/privacy.</p>
          <p>MyFonts</p>
          <p>Diese Seite nutzt MyFonts. Hierbei handelt es sich um Schriftarten, die beim Aufrufen unserer Website in
          Ihren Browser geladen werden, um ein einheitliches Schriftbild bei der Webseitendarstellung zu
          gewährleisten. Anbieter ist die Monotype Imaging Holdings Inc., 600 Unicorn Park Drive, Woburn,
          Massachusetts 01801, USA.</p>
          <p>Um die Einhaltung der Lizenzbedingungen und die Anzahl der monatlichen Seitenaufrufe zu überprüfen,
          überträgt MyFonts Ihre IP-Adresse zusammen mit der URL unserer Webseite und unseren Vertragsdaten
          auf seine Server in den USA. Ihre IP-Adresse wird laut Monotype unmittelbar nach der Übertragung
          anonymisiert, sodass kein Personenbezug mehr hergestellt werden kann (Anonymisierung).</p>
          <p>Details entnehmen Sie der Datenschutzerklärung von Monotype unter
          https://www.monotype.com/de/rechtshinweise/datenschutzrichtlinie/datenschutzrichtlinie-zum-trackingvon-webschriften.</p>
          <p>Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Der
          DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung
          europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach
          dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere
          Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:
          https://www.dataprivacyframework.gov/participant/6347.</p>
          <p>Quelle:</p>
          <p>https://www.e-recht24.de</p>
`
    },
    'mailTo': {
      en: "mailto:" + this.mailAddressTxt + "?subject=Inquiry%20of%20Legal%20Notice&body=Dear%20Sir%20or%20Madam,%0D%0A%0D%0AI%20have%20a%20question%20regarding%20legal%20notice.%20Please%20get%20in%20touch%20with%20me.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]",
      de: "mailto:" + this.mailAddressTxt + "?subject=Anfrage%20zum%20Impressum&body=Sehr%20geehrte%20Damen%20und%20Herren,%0D%0A%0D%0Aich%20habe%20eine%20Anfrage%20zum%20Impressum.%20Bitte%20nehmen%20Sie%20Kontakt%20mit%20mir%20auf.%0D%0A%0D%0AMit%20freundlichen%20Gr%C3%BC%C3%9Fen,%0D%0A%5BIhr%20Name%5D"
    }
  }

  userFeedback = {
    'msg': {
      en: '[Message]',
      de: '[Nachricht]'
    }
  }
}
