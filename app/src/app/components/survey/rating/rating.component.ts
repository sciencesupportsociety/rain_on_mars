import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  template: `
  <div *ngFor="let r of [1, 2, 3, 4, 5]" class="rating {{prefix}}" >
    <div class="star" (click)="voted(r)" (mouseenter)="hover(r)"  (mouseleave) ="unhover(r)"></div>
  </div>`,
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Output() onRatingUpdated = new EventEmitter();

  @Input()
  prefix;

  private list;
  private vote = -1;

  private setFullStar = (element: Element ) => (element['style'].background = 'url(/assets/vendor/icons/star-gr-full.svg) no-repeat');
  private setEmptyStar = (element: Element ) => (element['style'].background = 'url(/assets/vendor/icons/star-gr.svg) no-repeat');

  voted(a) {
    this.vote = a;
    this.onRatingUpdated.emit(a);
    for (let i = 0; i < this.list.length; i++) {
      if (i < a) {
        this.setFullStar(this.list[i]);
      } else {
        this.setEmptyStar(this.list[i]);
      }
    }
  }

  hover(a) {
    for (let i = 0; i < a; i++) {
      this.setFullStar(this.list[i]);
    }
  }

  unhover(a) {
    if (a > this.vote) {
      for (let i = (this.vote > 0) ? (this.vote) : 0; i < a; i++) {
        this.setEmptyStar(this.list[i]);
      }
    }
  }

  ngOnInit() {
    this.list = document.getElementsByClassName(this.prefix);
  }
}
