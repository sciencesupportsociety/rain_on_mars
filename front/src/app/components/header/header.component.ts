import { Component, OnInit } from '@angular/core';
import { TrymeService } from '../tryme.service';

@Component({
  selector: 'app-header',
  template: `
  <div class="header">
    <a class="logo" href="#"><img src="assets/marcity-logo.png" /></a>
    <div class="social shadowed">
      <a class="social_icon" href="#"><img src="assets/soc-ico-fb.png" /></a>
      <a class="social_icon" href="#"><img src="assets/soc-ico-tw.png" /></a>
      <a class="social_icon" href="#"><img src="assets/soc-ico-gp.png" /></a>
    </div>
    <nav class="navigation shadowed">
      <a href="#">base</a>
      <a href="#">active projects</a>
      <a href="#">our jury</a>
    </nav>
  </div>
`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private tryme: TrymeService) { }

  ngOnInit() {
    this.tryme.try();
  }

}
