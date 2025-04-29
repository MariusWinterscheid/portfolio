import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { TextService } from '../shared/services/text.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { GlobalStatesService } from '../shared/services/global-states.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FooterComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  txtService = inject(TextService);

  currentLang: 'en' | 'de' = 'en';
  private sub: Subscription | null = null;

  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private statesService: GlobalStatesService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      policy: [false, Validators.requiredTrue]
    });
  }

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

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formular abgesendet:', this.contactForm.value);
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
