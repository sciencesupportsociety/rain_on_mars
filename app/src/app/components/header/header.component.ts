import { Component, Input } from '@angular/core';
import { Dictionary, Translations } from "../../shared/Dictionary";
import { AppScope } from "../../shared/appScope";

@Component({
  selector: 'app-header',
  styleUrls: ['../../shared/color-palette.scss'],
  template: `
<nav class="container gradient-bottom-right" style="float: left;">
  <div class="row">
    <div class="col-xs-1 icon">
      <img routerLink="/{{path}}" src="/assets/icon-left-arrow.svg" class="pointer">
    </div>
    <div class="col-xs-4">
      <span routerLink="/{{path}}" class="pointer">{{translate('back')}}</span>
    </div>
    <div class="col-xs-2 logo">
      <img routerLink="/{{path}}" src="/assets/vendor/lmt/logo-loop.svg" class="pointer">
    </div>
  </div>
</nav>
`,
})
export class HeaderComponent {
  @Input()
  path;

  public translate = new Dictionary(translations).translate;
}

export const translations: Translations = {
  back: { en: 'BACK', lv: 'ATPAKAĻ' },
};
