import { environment } from '../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/timer';
import { ActivitiesService } from './activities.service';
import { Activity } from './activity/activity';
import { AppScope } from '../../../shared/appScope';
import { Dictionary, Translations } from '../../../shared/Dictionary';

const DEFAULT_IMAGE_PATH = environment.walmoo.businessUrl + '/assets/img/w/empty_coupon.png';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit {
  activities: Activity[] = [];
  featuredActivities: Activity[] = [];

  public translate = new Dictionary(translations).translate;

  constructor(
    public appScope: AppScope,
    private activitiesService: ActivitiesService,
  ) {}

  ngOnInit(): void {
    this.activitiesService.getShops()
      .then(shops =>
        Promise.all(
          shops.map(shop =>
            this.activitiesService.getShopLoyalties(shop.id)
              .then(loyalties => this.pushActivities(shop, loyalties)),
          ),
        ),
      )
      .then(this.activitiesService.getDoneLoyalties)
      .then(this.mapDoneActivities)
      .then(this.sort);
  }

  private pushActivities(shop: any, loyalties: any[]) {
    loyalties.forEach(loyalty => {
        const existingActivity =
          this.activities.find(activity => activity.id === loyalty.id)
          || this.featuredActivities.find(activity => activity.id === loyalty.id);
        if (existingActivity) {
          existingActivity.venues.push(venue(shop));
        } else {
          const activity = {
            id: loyalty.id,
            name: loyalty.name,
            description: loyalty.description,
            image: fullImagePath(loyalty.prog_image),
            venues: [venue(shop)],
            featured: isFeatured(loyalty.id),
            done: false,
            survey: isSurvey(loyalty.id),
          } as Activity;
          if (activity.featured) {
            this.featuredActivities.push(activity);
          } else {
            this.activities.push(activity);
          }
        }
      });
    }

  private mapDoneActivities = (doneActivities: any[]): void => {
    this.activities.concat(this.featuredActivities)
      .forEach(activity => {
      if (isDone(doneActivities, activity.id)) {
        activity.done = true;
      }
    });
  };

  private sort = () => {
    this.activities.sort(activitySortingFunction);
    this.featuredActivities.sort(activitySortingFunction);
  }
}

function venue(shop: any): string {
  return shop.address;
}

function fullImagePath(path: string): string {
  if (!path) {
    return DEFAULT_IMAGE_PATH;
  }
  return path.startsWith('http') ?
    path.replace("http://","https://").replace("//files","/files") :
    environment.walmoo.businessUrl + path;
}

function isFeatured(id: string): boolean {
  return environment.walmoo.featuredActivitiesIds.some(featuredId => featuredId === Number(id));
}

function isSurvey(id: string): boolean {
  return environment.walmoo.surveyId === id;
}

function isDone(doneActivities: any, id: string): boolean {
  return doneActivities.some(activity => activity.id === id);
}

function activitySortingFunction(a, b) {
  return Number(a.done) - Number(b.done);
}

const translations: Translations = {
  activities: { en: 'Activities', lv: 'Aktivitātes' },
};
