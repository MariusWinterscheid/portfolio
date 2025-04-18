import { Component, inject } from '@angular/core';
import { TextService } from '../shared/services/text.service';
import { SettingsService } from '../shared/services/settings.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  txtService = inject(TextService);
  settingsService = inject(SettingsService);

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      policy: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formular abgesendet:', this.contactForm.value);
    } else {
      this.contactForm.markAllAsTouched(); // zeigt sofort alle Fehler an
    }
  }
}
