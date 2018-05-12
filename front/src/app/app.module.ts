import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgxStripeModule } from 'ngx-stripe';
import { ModalDialogModule } from 'ngx-modal-dialog';

import { environment } from '../environments/environment';
import { StripeFormComponent } from './components/stripe-form/stripe-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvestComponent } from './components/invest/invest.component';
import { MapComponent } from './components/map/map.component';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StripeFormComponent,
    InvestComponent,
    MapComponent,
    ModalDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxStripeModule.forRoot(environment.stripePublishable),
    ModalDialogModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
