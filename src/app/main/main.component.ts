import { Component } from '@angular/core';
import { HeroComponent } from '../sections/hero/hero.component';
import { AboutComponent } from '../sections/about/about.component';
import { NextComponent } from '../sections/next/next.component';
import { SkillsComponent } from '../sections/skills/skills.component';
import { PortfolioComponent } from '../sections/portfolio/portfolio.component';
import { ReferencesComponent } from '../sections/references/references.component';
import { ContactComponent } from '../sections/contact/contact.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    NextComponent,
    SkillsComponent,
    PortfolioComponent,
    ReferencesComponent,
    ContactComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
