import { Component } from '@angular/core';
import { Dictionary, Translations } from '../../../shared/Dictionary';

@Component({
  selector: 'app-survey-header',
  templateUrl: './survey-header.component.html',
  styleUrls: ['./survey-header.component.scss']
})
export class SurveyHeaderComponent {

  public translate = new Dictionary(translations).translate;

}

export const translations: Translations = {
  back: { en: 'BACK', lv: 'ATPAKAĻ' },
  survey: { en: 'SUTVEY', lv: 'APTAUJA' },
};
