import { Component } from '@angular/core';
import { AppScope } from "../../../shared/appScope";
import { Dictionary, Translations } from "../../../shared/Dictionary";

@Component({
  selector: 'app-qr-show',
  template: `
<app-header path="home"></app-header>
<div class="qr row">
  <div class="square">
    <qr-code [value]="appScope.qr" [size]="300"></qr-code>
    <div class="text">{{translate('show_qr')}} <b>{{translate('badge')}}</b></div>
  </div>
</div>
`,
  styleUrls: ['./qr-show.component.scss'],
})
export class QrShowComponent {
  public translate = new Dictionary(translations).translate;

  constructor(public appScope: AppScope) {
  }
}

export const translations: Translations = {
  show_qr: {
    en: 'or show  QR code on your',
    lv: 'vai uzrādi QR kodu uz savas',
  },
  badge: {
    en: 'badge',
    lv: 'ID kartes',
  },
};
