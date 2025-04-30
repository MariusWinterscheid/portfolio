import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalStatesService } from '../shared/services/global-states.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './legal.component.html',
  styleUrl: './legal.component.scss'
})
export class LegalComponent implements OnInit, OnDestroy {
  isLegalOpen = false;
  private sub: Subscription | null = null;

  constructor(private statesService: GlobalStatesService) { }

  ngOnInit(): void {
    this.sub = this.statesService.isLegalOpen$.subscribe((isLegalOpen) => {
      this.isLegalOpen = isLegalOpen;
    });
  }
  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onClickLegal() {
    this.statesService.toggleLegal();
  }
}
