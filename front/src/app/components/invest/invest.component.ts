import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invest',
  template: `
  <div class="invest">
    <p class="your-money-i shadowed">100% of your money investments brings people to the Mars.</p><br>
    <p class="you-can-transform shadowed">You can transform the future of your children and yourself.</p><br>
    <div class="mars"><img src="assets/Top-Mars.png" /></div>
    <button class="invest-button shadowed">Invest</button>
  </div>
  `,
  styleUrls: ['./invest.component.css']
})
export class InvestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
