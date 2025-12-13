import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { TextService } from '../../shared/services/text.service';
import { GlobalStatesService } from '../../shared/services/global-states.service';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    FormsModule,
    RouterModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit, OnDestroy {

  txtService = inject(TextService);
  http = inject(HttpClient);
  mailTest = false;

  contactData = {
    name: '',
    email: '',
    message: '',
    policyCkecked: false
  }

  post = {
    endPoint: 'https://marius-winterscheid.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  currentLang: 'en' | 'de' = 'en';
  isPrivacyOpen = false;
  msgBg: 'warn' | 'info' = 'warn';
  private sub: Subscription | null = null;

  constructor(private statesService: GlobalStatesService) { }

  ngOnInit(): void {
    const subIsLegalOpen = this.statesService.isPrivacyOpen$.subscribe((isPrivacyOpen) => {
      this.isPrivacyOpen = isPrivacyOpen;
    });

    const subLang = this.statesService.currentLang$.subscribe((lang) => {
      this.currentLang = lang;
    });

    const subMsgBg = this.statesService.msgBg$.subscribe((msgBg) => {
      this.msgBg = msgBg;
    })

    this.sub = new Subscription();
    this.sub.add(subIsLegalOpen);
    this.sub.add(subLang);
    this.sub.add(subMsgBg);
  }
  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onSubmit(contactForm: NgForm) {
    if (contactForm.submitted && contactForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            /* Show Userfeedback? */
            contactForm.resetForm();
          },
          error: (error) => {
            console.error(error);
            this.sentUserFeedback('warn');
          },
          complete: () => this.sentUserFeedback('info'),
        });
    } else if (contactForm.submitted && contactForm.form.valid && this.mailTest) {
      contactForm.resetForm();
      this.sentUserFeedback('info');
    } else {
      this.sentUserFeedback('warn');
    }
  }

  onClickPrivacy() {
    this.statesService.setHideContactForm(true);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  sentUserFeedback(form: 'warn' | 'info') {
    if (form === 'info') {
      this.txtService.userFeedback.msg.en = 'Your message has been sent!';
      this.txtService.userFeedback.msg.de = 'Deine Nachricht wurde erfolgreich gesendet!';
      this.statesService.sendUserFeedback('info');
    } else {
      this.txtService.userFeedback.msg.en = 'Oops! Something went wrong. Please try again.';
      this.txtService.userFeedback.msg.de = 'Ups! Etwas ist schiefgelaufen. Bitte versuche es erneut.';
      this.statesService.sendUserFeedback('warn');
    }
  }
}
