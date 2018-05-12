import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QRCodeModule } from 'angular2-qrcode';
import { IsLoggedinGuard } from '../../shared/is-loggedin.guard';
import { HeaderModule } from '../header/header.module';
import { SurveyModule } from '../survey/survey.module';
import { SurveyComponent } from '../survey/survey//survey.component';
import { HomeComponent } from './home.component';
import { QrShowComponent } from './qr-show/qr-show.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivitiesService } from './activities/activities.service';
import { ActivityComponent } from './activities/activity/activity.component';
import { FeaturedActivityComponent } from './activities/activity/featured-activity.component';

const routes: Routes = [
  {
    canActivate: [IsLoggedinGuard],
    path: 'home', component: HomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'activities' },
      { path: 'activities', component: ActivitiesComponent },
      { path: 'qr', component: QrShowComponent },
      { path: 'survey', component: SurveyComponent },
    ],
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    ActivitiesComponent,
    QrShowComponent,
    ActivityComponent,
    FeaturedActivityComponent,
  ],
  providers: [IsLoggedinGuard, ActivitiesService],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HeaderModule,
    QRCodeModule,
    SurveyModule,
  ],
})
export class HomeModule {
}
