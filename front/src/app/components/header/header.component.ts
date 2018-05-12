import { Component, OnInit } from '@angular/core';
import { TrymeService } from '../tryme.service';

@Component({
  selector: 'app-header',
  template: `
  <p>
    header works!
  </p>`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private tryme: TrymeService) { }

  ngOnInit() {
    this.tryme.try();
  }

}
