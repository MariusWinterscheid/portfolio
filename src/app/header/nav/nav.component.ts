import { Component, inject, Input } from '@angular/core';
import { TxtproviderService } from '../../shared/services/txtprovider.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  @Input() isNavOpen = false;
  @Input() currentLang: 'en' | 'de' = 'en';

  txtService = inject(TxtproviderService);
  txtNav = this.txtService.navtxt;
}
