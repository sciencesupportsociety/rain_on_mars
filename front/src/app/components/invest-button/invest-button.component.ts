import { Component, OnInit, ViewContainerRef, Input } from '@angular/core';
import { ModalDialogService } from 'ngx-modal-dialog';
import { DonateDialogComponent } from '../donate-dialog/donate-dialog.component';

@Component({
  selector: 'app-invest-button',
  template: `
    <button (click)="openModal()" class="invest-button shadowed">
      {{(isOneTimePayment? "Invest" : "Invest monthly") | uppercase }}
    </button>
  `,
  styleUrls: ['./invest-button.component.css']
})
export class InvestButtonComponent implements OnInit {

  constructor(private modalService: ModalDialogService, private viewRef: ViewContainerRef) {}

  @Input() isOneTimePayment?;


  ngOnInit() {
  }

  openModal() {
    this.modalService.openDialog(this.viewRef, {
      title: 'Invest in future',
      childComponent: DonateDialogComponent,
      settings: {
        overlayClass: 'overlayDonate',
        modalClass: 'donateDialog',
        closeButtonClass: 'closeDialog',
      },
      data: {
        isOneTimePayment: this.isOneTimePayment,
      }
    });
  }
}
