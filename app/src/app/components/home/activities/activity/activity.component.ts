import { Component, Input } from '@angular/core';
import { Activity } from './activity';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent {
  @Input()
  activity: Activity;
}
