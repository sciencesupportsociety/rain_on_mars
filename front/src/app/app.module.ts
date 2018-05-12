import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgxStripeModule } from 'ngx-stripe';

import { environment } from '../environments/environment';
import { StripeFormComponent } from './components/stripe-form/stripe-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvestComponent } from './components/invest/invest.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StripeFormComponent,
    InvestComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxStripeModule.forRoot(environment.stripePublishable),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
