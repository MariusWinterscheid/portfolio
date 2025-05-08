import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { TextService } from '../../shared/services/text.service';
import { GlobalStatesService } from '../../shared/services/global-states.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit, OnDestroy {
  currentLang: 'en' | 'de' = 'en';
  private sub: Subscription | null = null;

  txtService = inject(TextService);
 
  constructor(private statesService: GlobalStatesService) { }
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

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, {
      threshold: 0.8
    });
  
    const elements = document.querySelectorAll('.project');
    elements.forEach(el => observer.observe(el));
  }

  projects = [
    {
      title: 'Join',
      skillset: 'Angular | TypeScript | HTML CSS | Firebase',
      description: {
        en: 'Task manager inspired by the Kanban System. Create and organize your tasks using drag and drop functions, assign users and categories.',
        de: 'Task-Manager inspiriert vom Kanban-System. Erstellen und organisieren Sie Ihre Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.'
      },
      img: 'join.png',
      domain: 'https://stage.marius-winterscheid.de/join',
      git: 'https://github.com/MariusWinterscheid/stageJoin'
    },
    {
      title: 'Sharkie',
      skillset: 'JavaScript | HTML | CSS',
      description: {
        en: 'A simple Jump-and-Run game based on a object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
        de: 'Ein einfaches Jump-and-Run-Spiel, das auf einem objektorientierten Ansatz basiert. Helfen Sie Sharkie, Münzen und Giftflaschen zu finden, um gegen den Killerwal zu kämpfen.'
      },
      img: 'sharkie.png',
      domain: 'https://stage.marius-winterscheid.de/sharkie',
      git: 'https://github.com/MariusWinterscheid/stageSharkie'
    },
    {
      title: 'Pokedex',
      skillset: 'JavaScript | HTML | CSS | Api',
      description: {
        en: 'Based on the PokeAPI a simpl libary that provides an catalouges pokemon information.',
        de: 'Basierend auf der PokeAPI eine einfache Bibliothek, die Kataloginformationen zu Pokemon bereitstellt'
      },
      img: 'pokedex.png',
      domain: 'https://stage.marius-winterscheid.de/pokedex',
      git: 'https://github.com/MariusWinterscheid/stagePokedex'
    }
  ];
}
