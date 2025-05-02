import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { TextService } from '../../shared/services/text.service';
import { GlobalStatesService } from '../../shared/services/global-states.service';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
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
  private sub: Subscription | null = null;


  constructor(private statesService: GlobalStatesService) {}

  ngOnInit(): void {
    this.sub = this.statesService.currentLang$.subscribe((lang) => {
      this.currentLang = lang;
    });
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
          },
          complete: () => console.info('send post complete'),
        });
    } else if (contactForm.submitted && contactForm.form.valid && this.mailTest) {
      contactForm.resetForm();
    }
  }
}
