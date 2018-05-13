import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModalDialogService } from 'ngx-modal-dialog';
import { DonateDialogComponent } from '../donate-dialog/donate-dialog.component';


@Component({
  selector: 'app-invest',
  template: `
  <div class="invest">
    <h1 class="your-money-i shadowed">100% of your money investments brings people to the Mars.</h1>
    <h2 class="you-can-transform shadowed">You can transform the future of your children and yourself.</h2>
    <div class="mars"><img src="assets/Top-Mars.png" /></div>
    <button (click)="openModal()" class="invest-button shadowed" >Invest</button>
  </div>
  `,
  styleUrls: ['./invest.component.css']
})
export class InvestComponent implements OnInit {

  constructor(private modalService: ModalDialogService, private viewRef: ViewContainerRef) {}

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
      }
    });
  }
}
