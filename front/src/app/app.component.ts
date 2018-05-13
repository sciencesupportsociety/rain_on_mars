import { Component } from '@angular/core';
import { AppStateService } from './shared/app-state.service';

@Component({
  selector: 'app-root',
  template: `
    <div class='container'>
    <app-header></app-header>
    <app-invest></app-invest>
    <app-mission></app-mission>
    <app-map></app-map>
    <app-generator></app-generator>
    <app-rover></app-rover>
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
