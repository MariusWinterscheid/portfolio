import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { TextService } from '../shared/services/text.service';
import { CommonModule } from '@angular/common';
import { GlobalStatesService } from '../shared/services/global-states.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit, OnDestroy {
  currentLang: 'en' | 'de' = 'en';
  sub: Subscription | null = null;

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

  projects = [
    {
      title: 'Join',
      skillset: 'Angular | TypeScript | HTML CSS | Firebase',
      description: {
        en: 'Task manager inspired by the Kanban System. Create and organize your tasks using drag and drop functions, assign users and categories.',
        de: 'Task-Manager inspiriert vom Kanban-System. Erstellen und organisieren Sie Ihre Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.'
      },
      img: 'join.png'
    },
    {
      title: 'Sharkie',
      skillset: 'JavaScript | HTML | CSS',
      description: {
        en: 'A simple Jump-and-Run game based on a object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
        de: 'Ein einfaches Jump-and-Run-Spiel, das auf einem objektorientierten Ansatz basiert. Helfen Sie Sharkie, Münzen und Giftflaschen zu finden, um gegen den Killerwal zu kämpfen.'
      },
      img: 'sharkie.png'
    },
    {
      title: 'Pokedex',
      skillset: 'JavaScript | HTML | CSS | Api',
      description: {
        en: 'Based on the PokeAPI a simpl libary that provides an catalouges pokemon information.',
        de: 'Basierend auf der PokeAPI eine einfache Bibliothek, die Kataloginformationen zu Pokemon bereitstellt'
      },
      img: 'pokedex.png'
    }
  ];
}
