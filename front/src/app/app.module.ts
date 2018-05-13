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
import { DonateDialogComponent } from './components/donate-dialog/donate-dialog.component';
import { MissionComponent } from './components/mission/mission.component';
import { GeneratorComponent } from './components/generator/generator.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StripeFormComponent,
    InvestComponent,
    MapComponent,
    DonateDialogComponent,
    MissionComponent,
    GeneratorComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxStripeModule.forRoot(environment.stripePublishable),
    ModalDialogModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [DonateDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
