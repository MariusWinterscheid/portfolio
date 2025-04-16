import { Component, inject } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { CommonModule } from '@angular/common';
import { SettingsService } from '../shared/services/settings.service';

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
export class HeaderComponent {
  isNavOpen = false;

  settingsService = inject(SettingsService);

  constructor() { }

  onClickBurgerMenu() {
    this.animateBurgerMenu();
  }

  onClickLenSwitcher() {
    this.settingsService.currentLang = this.settingsService.currentLang === 'en' ? 'de' : 'en';
  }

  animateBurgerMenu() {
    let path = 'assets/img/icons/burgerMenu.png';
    const burgerMenu = document.getElementById('burgerMenu') as HTMLImageElement;

    if (!burgerMenu) return;
    this.playAnimationBurgerMenu(path, burgerMenu);

    this.isNavOpen = !this.isNavOpen;
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