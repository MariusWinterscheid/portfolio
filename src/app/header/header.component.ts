import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule,NavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isNavOpen = false;
  currentLang: 'en' | 'de' = 'en';

  constructor() {}

  onClickBurgerMenu(){
    this.animateBurgerMenu();
    this.toogleLenSwitcherVisibility();
    
  }

  onClickLenSwitcher(){
    const lenSwitcherEn = document.getElementById('lenSwitcherEn') as HTMLImageElement;
    const lenSwitcherDe = document.getElementById('lenSwitcherDe') as HTMLImageElement;
    
    if (!lenSwitcherEn || !lenSwitcherDe) return;

    lenSwitcherEn.classList.toggle('lan-active');
    lenSwitcherDe.classList.toggle('lan-active');

    this.currentLang = this.currentLang === 'en' ? 'de' : 'en';

    console.log('Language switched to: ' + (this.currentLang === 'en' ? 'English' : 'German'));
  }

  toogleLenSwitcherVisibility(){
    const lenSwitcherMain = document.getElementById('lanSwitcherMain') as HTMLImageElement;
    if (!lenSwitcherMain) return;
    lenSwitcherMain.style.left = this.isNavOpen ? '0' : '150dvw';
  }

  animateBurgerMenu(){
    let path = 'assets/img/icons/burgerMenu.png';
    const burgerMenu = document.getElementById('burgerMenu') as HTMLImageElement;

    if (!burgerMenu) return;
    this.playAnimationBurgerMenu(path, burgerMenu);

    this.isNavOpen = !this.isNavOpen;
    console.log('Navbar is now ' + (this.isNavOpen ? 'open' : 'closed'));
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