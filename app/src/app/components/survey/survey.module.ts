import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HeaderModule } from '../header/header.module';
import { SurveyComponent } from './survey/survey.component';
import { SurveyHeaderComponent } from './survey-header/survey-header.component';
import { RatingComponent } from './rating/rating.component';
import { SurveyService } from './survey.service';

const routes: Routes = [
  { path: 'survey', component: SurveyComponent }
];

@NgModule({
  declarations: [
    SurveyComponent,
    SurveyHeaderComponent,
    RatingComponent,
  ],
  providers: [SurveyService],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes),
    HeaderModule,
    AngularFireDatabaseModule,
  ],
})

export class SurveyModule {}
