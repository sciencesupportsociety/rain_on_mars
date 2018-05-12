import { Component } from '@angular/core';
import { AppStateService } from './shared/app-state.service';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <app-stripe-form></app-stripe-form>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(appState: AppStateService) {
    console.log(appState.username);
  }
}
