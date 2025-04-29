import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { TextService } from '../shared/services/text.service';
import { CommonModule } from '@angular/common';
import { GlobalStatesService } from '../shared/services/global-states.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  currentLang: 'en' | 'de' = 'en';
  private sub: Subscription | null = null;

  txtService = inject(TextService);
  
  constructor(private statesService: GlobalStatesService){}

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

  skills = [
    {
      title: 'Angular',
      icon: 'angular.png'
    },
    {
      title: 'TypeScript',
      icon: 'typescript.png'
    },
    {
      title: 'JavaScript',
      icon: 'javascript.png'
    },
    {
      title: 'HTML',
      icon: 'html5.png'
    },
    {
      title: 'CSS',
      icon: 'css.png'
    },
    {
      title: 'Firebase',
      icon: 'firebase.png'
    },
    {
      title: 'Git',
      icon: 'git.png'
    },
    {
      title: 'Rest Api',
      icon: 'api.png'
    },
    {
      title: 'Scrum',
      icon: 'scrum.png'
    },
    {
      title: 'Material Design',
      icon: 'material.png'
    }
  ];
}
