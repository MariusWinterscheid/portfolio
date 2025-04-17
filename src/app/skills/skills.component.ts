import { Component, inject } from '@angular/core';
import { TextService } from '../shared/services/text.service';
import { SettingsService } from '../shared/services/settings.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  txtService = inject(TextService);
  settingsService = inject(SettingsService);

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
