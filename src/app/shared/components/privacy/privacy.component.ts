import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalStatesService } from '../../services/global-states.service';


@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent implements OnInit, OnDestroy {

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
