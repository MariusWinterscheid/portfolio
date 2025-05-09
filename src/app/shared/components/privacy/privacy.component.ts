import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalStatesService } from '../../services/global-states.service';
import { TextService } from '../../services/text.service';



@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent implements OnInit, OnDestroy {

  txtService = inject(TextService);

  isPrivacyOpen = false;
  private sub: Subscription | null = null;

  constructor(private statesService: GlobalStatesService) { }

  ngOnInit(): void {
    const subIsLegalOpen = this.statesService.isPrivacyOpen$.subscribe((isPrivacyOpen) => {
      this.isPrivacyOpen = isPrivacyOpen;
    });

    this.sub = new Subscription();
    this.sub.add(subIsLegalOpen);
  }
  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onClickPrivacy() {
    this.statesService.togglePrivacy();
  }
}
