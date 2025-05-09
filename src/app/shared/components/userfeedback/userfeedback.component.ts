import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalStatesService } from '../../services/global-states.service';
import { TextService } from '../../services/text.service';

@Component({
  selector: 'app-userfeedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './userfeedback.component.html',
  styleUrl: './userfeedback.component.scss'
})
export class UserfeedbackComponent implements OnInit, OnDestroy {
  txtService = inject(TextService);

  isMsgOpen = true;
  currentLang: 'en' | 'de' = 'en';
  msgBg: 'warn' | 'info' = 'info';
  private sub: Subscription | null = null;

  constructor(private statesService: GlobalStatesService) { }

  ngOnInit(): void {
    const subIsMsgOpen = this.statesService.isMsgOpen$.subscribe((isMsgOpen) => {
      this.isMsgOpen = isMsgOpen;
    });

    const subCurrLan = this.statesService.currentLang$.subscribe((currentLang) => {
      this.currentLang = currentLang;
    });

    const subMsgBg = this.statesService.msgBg$.subscribe((msgBg) => {
      this.msgBg = msgBg;
    })

    this.sub = new Subscription();
    this.sub.add(subIsMsgOpen);
    this.sub.add(subCurrLan);
    this.sub.add(subMsgBg);
  }
  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
