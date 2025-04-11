let isNavOpen = false;
let isLenEn = true;

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

import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

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

    isLenEn = !isLenEn;

    console.log('Language switched to: ' + (isLenEn ? 'English' : 'German'));
  }

  toogleLenSwitcherVisibility(){
    const lenSwitcherMain = document.getElementById('lanSwitcherMain') as HTMLImageElement;
    if (!lenSwitcherMain) return;
    lenSwitcherMain.style.left = isNavOpen ? '0' : '150dvw';
  }

  animateBurgerMenu(){
    let path = 'assets/img/icons/burgerMenu.png';
    const burgerMenu = document.getElementById('burgerMenu') as HTMLImageElement;

    if (!burgerMenu) return;
    this.playAnimationBurgerMenu(path, burgerMenu);

    isNavOpen = !isNavOpen;
    console.log('Navbar is now ' + (isNavOpen ? 'open' : 'closed'));
  }

  playAnimationBurgerMenu(path: string, burgerMenu: HTMLImageElement) {
    const choosenArray = isNavOpen ? IMAGES_BURGER_MENU_CLOSE : IMAGES_BURGER_MENU_OPEN;
    for (let i = 0; i < choosenArray.length; i++) {
      setTimeout(() => {
        path = choosenArray[i];
        burgerMenu.src = path;
      }, i * 100);
    }
  }

}