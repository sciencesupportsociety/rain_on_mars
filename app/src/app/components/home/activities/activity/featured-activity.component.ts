import { Component, Input } from '@angular/core';
import { Activity } from "./activity";

@Component({
  selector: 'app-featured-activity',
  templateUrl: './featured-activity.component.html',
  styleUrls: ['./featured-activity.component.scss'],
})
export class FeaturedActivityComponent{
  @Input()
  activity: Activity;
}
