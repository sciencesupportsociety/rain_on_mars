import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invest',
  template: `
  <div class="invest">
    <p class="your-money-i shadowed">100% of your money investments brings people to the Mars.</p>
    <p class="you-can-transform-th-copy-2 shadowed">You can transform the future of your children and yourself.</p>
    <div class="mars"><img src="assets/Top-Mars.png" /></div>
  </div>
  `,
  styleUrls: ['./invest.component.css']
})
export class InvestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
