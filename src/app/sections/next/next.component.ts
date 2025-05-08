import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

const IMAGES_NEXT_EVEN = [
  'assets/img/icons/arrowNext/even1.png',
  'assets/img/icons/arrowNext/even2.png',
  'assets/img/icons/arrowNext/even3.png'
];

const IMAGES_NEXT_ODD = [
  'assets/img/icons/arrowNext/odd1.png',
  'assets/img/icons/arrowNext/odd2.png',
  'assets/img/icons/arrowNext/odd3.png'
];

@Component({
  selector: 'app-next',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './next.component.html',
  styleUrl: './next.component.scss'
})
export class NextComponent {
  @Input() isOdd: boolean = false;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animateNextArrow(entry.target as HTMLImageElement, entry.target.id);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 1 // 100% sichtbar
    });
  
    const elements = document.querySelectorAll('.next-img');
    elements.forEach(el => observer.observe(el));
  }

  animateNextArrow(element: HTMLImageElement, elementId: string) {
    let path = 'assets/img/icons/arrowNext/even1.png';
    const nextArrow = element as HTMLImageElement;

    if (!nextArrow) return;
    this.playAnimationHtmlImgElement(path, nextArrow, elementId);
  }

  playAnimationHtmlImgElement(path: string, htmlImgElement: HTMLImageElement, elementId: string) {
    
    const choosenArray = elementId === 'imgOdd' ? IMAGES_NEXT_ODD : IMAGES_NEXT_EVEN;    
    
    for (let i = 0; i < choosenArray.length; i++) {
      setTimeout(() => {
        path = choosenArray[i];
        htmlImgElement.src = path;
      }, i * 80);
    }
  }
}
