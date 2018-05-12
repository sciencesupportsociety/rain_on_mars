import { trigger, style, animate, transition, state } from '@angular/animations';
import { environment } from '../../../../environments/environment';
import { Component} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AppScope } from '../../../shared/appScope';
import { Dictionary, Translations } from '../../../shared/Dictionary';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-survey',
  animations: [
    trigger('FadeInOut', [
      state('true', style({ opacity: 1 })),
      state('false', style({ opacity: 0 })),
      transition('shown => hidden', animate('600ms')),
      transition('hidden => shown', animate('300ms')),
    ]),
  ],
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
})
export class SurveyComponent{
  public formSubmitted = false;
  public survey: {
    organizationRate?: string;
    lectorsRate?: string;
    whatEnjoyMost?: string;
    isAsExpected?: string;
  } = {};

  public translate = new Dictionary(translations).translate;

  constructor(private fire: AngularFireDatabase,
              private appScope: AppScope,
              private surveyService: SurveyService) {
  }

  submitSurvey() {
    this.fire
        .database
        .ref(`${environment.projectName}/survey/${this.appScope.qr}`)
        .set(this.survey)
        .then(() => {
          this.formSubmitted = true;
          this.surveyService.pushSurvey(this.appScope.id);
        })
    ;
  }
}

export const translations: Translations = {
  'thank-you' : { en: 'Thank you!', lv: 'Paldies!' },
  send: { en: 'SEND', lv: 'NOSŪTĪT' },
};
