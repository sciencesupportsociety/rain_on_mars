import { Component, ComponentRef } from '@angular/core';
import { IModalDialog, IModalDialogButton, IModalDialogOptions } from 'ngx-modal-dialog';
import 'rxjs';

@Component({
  selector: 'app-donate-dialog',
  template: `
    <div class="donate">
      <app-stripe-form></app-stripe-form>
    </div>
  `,
  styleUrls: ['./donate-dialog.component.css']
})
export class DonateDialogComponent implements IModalDialog {
  actionButtons: IModalDialogButton[];
  settings = {};

  constructor() {
    this.actionButtons = [
      { text: 'I will always close', onAction: () => true },
      { text: 'I never close', onAction: () => false }
    ];
  }

  dialogInit(reference: ComponentRef<IModalDialog>, options: Partial<IModalDialogOptions<any>>) {
    // no processing needed
  }
}
