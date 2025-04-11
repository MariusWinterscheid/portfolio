import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  @Input()isNavOpen: boolean = false;

  constructor() {
    this.test();
  }

  test() {
    if (!this.isNavOpen) {
      console.log('test');
    }
  }
}
