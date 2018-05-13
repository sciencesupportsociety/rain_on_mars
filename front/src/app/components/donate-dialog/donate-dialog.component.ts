import { Component, ComponentRef } from '@angular/core';
import { IModalDialog, IModalDialogButton, IModalDialogOptions } from 'ngx-modal-dialog';
import 'rxjs';

@Component({
  selector: 'app-donate-dialog',
  template: `
    <div class="donate">
      <app-stripe-form [isOneTimePayment]=isOneTimePayment></app-stripe-form>
    </div>
  `,
  styleUrls: ['./donate-dialog.component.css']
})
export class DonateDialogComponent implements IModalDialog {
  private isOneTimePayment;

  actionButtons: IModalDialogButton[];

  constructor() {
    this.actionButtons = [
      {buttonClass: 'closeDialog', text: 'x', onAction: () => true }
    ];
  }

  dialogInit(reference: ComponentRef<IModalDialog>, options: Partial<IModalDialogOptions<any>>) {
    console.log('is Onet time', options.data.isOneTimePayment);
    this.isOneTimePayment = options.data.isOneTimePayment;
  }
}
