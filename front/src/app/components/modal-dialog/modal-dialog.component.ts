import { Component, ComponentRef } from '@angular/core';
import { IModalDialog, IModalDialogButton, IModalDialogOptions } from 'ngx-modal-dialog';
import 'rxjs';

@Component({
  selector: 'app-modal-dialog',
  template: `
  <div>
  modal window
  </div>
  `,
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent implements IModalDialog {
  actionButtons: IModalDialogButton[];

  constructor() {
    this.actionButtons = [
      { text: 'Close' }, // no special processing here
      { text: 'I will always close', onAction: () => true },
      { text: 'I never close', onAction: () => false }
    ];
  }

  dialogInit(reference: ComponentRef<IModalDialog>, options: Partial<IModalDialogOptions<any>>) {
    // no processing needed
  }
}
