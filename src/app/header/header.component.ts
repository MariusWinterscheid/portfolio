import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { CommonModule } from '@angular/common';
import { GlobalStatesService } from '../shared/services/global-states.service';
import { Subscription } from 'rxjs';



const IMAGES_BURGER_MENU_OPEN = [
  'assets/img/icons/burgerMenuTransition/open/burgerMenuOpen1.png',
  'assets/img/icons/burgerMenuTransition/open/burgerMenuOpen2.png',
  'assets/img/icons/burgerMenuTransition/open/burgerMenuOpen3.png',
  'assets/img/icons/burgerMenuTransition/open/burgerMenuOpen4.png'
];
const IMAGES_BURGER_MENU_CLOSE = [
  'assets/img/icons/burgerMenuTransition/close/burgerMenuClose1.png',
  'assets/img/icons/burgerMenuTransition/close/burgerMenuClose2.png',
  'assets/img/icons/burgerMenuTransition/close/burgerMenuClose3.png',
  'assets/img/icons/burgerMenu.png'
];

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentLang: 'en' | 'de' = 'en';
  isNavOpen = false;
  private sub: Subscription | null = null;

  statesService = inject(GlobalStatesService);

  constructor(private globalState: GlobalStatesService) { }

  ngOnInit(): void {
    this.sub = this.globalState.isNavOpen$.subscribe((isNavOpen) => {
      this.isNavOpen = isNavOpen;
      console.log('isNavOpen', isNavOpen);
    });
    this.sub = this.globalState.currentLang$.subscribe((lang) => {
      this.currentLang = lang;
    });
  }
  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onClickBurgerMenu() {
    this.animateBurgerMenu();
    this.statesService.toggleNav();
  }

  onClickLangSwitcher() {
    this.statesService.switchLang();
    this.animateBurgerMenu();
    this.statesService.toggleNav();
  }

  animateBurgerMenu() {
    let path = 'assets/img/icons/burgerMenu.png';
    const burgerMenu = document.getElementById('burgerMenu') as HTMLImageElement;

    if (!burgerMenu) return;
    this.playAnimationBurgerMenu(path, burgerMenu);
  }

  playAnimationBurgerMenu(path: string, burgerMenu: HTMLImageElement) {
    const choosenArray = this.isNavOpen ? IMAGES_BURGER_MENU_CLOSE : IMAGES_BURGER_MENU_OPEN;
    for (let i = 0; i < choosenArray.length; i++) {
      setTimeout(() => {
        path = choosenArray[i];
        burgerMenu.src = path;
      }, i * 100);
    }
  }

}