import { Component } from '@angular/core';
import { AppStateService } from './shared/app-state.service';

@Component({
  selector: 'app-root',
  template: `
    <div class='container'>
    <app-header></app-header>
    <app-invest></app-invest>
    <app-map></app-map>
    <br><br>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(appState: AppStateService) {
    console.log(appState.username);
  }
}
