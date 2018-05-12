import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from "../login.service";
import { Router } from '@angular/router';
import { AppScope } from "../../../shared/appScope";

@Component({
  selector: 'app-qr-read',
  templateUrl: './qrRead.component.html',
  styleUrls: ['./qrRead.component.scss'],
})
export class QrReadComponent implements OnInit, OnDestroy {

  private side = 274;

  private qrSuccess = (qr: string) => {
    console.log("just read qr ", qr);
    this.appScope.qr = qr;
    this.router.navigate([""]);
  };

  constructor(private router: Router, private appScope: AppScope) {
  }

  ngOnInit() {
    this.start();
  }

  ngOnDestroy(): void {
    stopQr();
  }

  start() {
    startQr(this.side, this.qrSuccess, QrReadComponent.qrNotSupported);
  }

  static qrNotSupported(err: string) {
    console.log("qr error", err);
  }
}
