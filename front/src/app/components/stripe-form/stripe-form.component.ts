import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Element as StripeElement, Elements, ElementsOptions, StripeService} from 'ngx-stripe';

import {TrymeService} from '../tryme.service';
import {Response} from '@angular/http';


@Component({
  selector: 'app-stripe-form',
  template: `
    <form style="width: 400px" novalidate [formGroup]="stripeTest">
      <input type="text" formControlName="amount" placeholder="Amount" isNumber><br>
      <span *ngIf="stripeTest.hasError('numberRequired')">Needs to be a number</span>
      <input type="text" formControlName="name" placeholder="Name on card">
      <div id="card-element" class="field"></div>
      <button type="submit" (click)="investMonthly()">INVEST MONTHLY</button>
      <button type="submit" (click)="invest()">INVEST</button>
    </form>
  `
})
export class StripeFormComponent implements OnInit {
  elements: Elements;
  card: StripeElement;

  // optional parameters
  elementsOptions: ElementsOptions = {
    locale: 'en'
  };

  stripeTest: FormGroup;

  constructor(
    private fb: FormBuilder,
    private stripeService: StripeService,
    private trymeService: TrymeService
  ) {
  }

  ngOnInit() {
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]],
      amount: [, [Validators.required]]
    });
    this.stripeService.elements(this.elementsOptions)
      .subscribe(elements => {
        this.elements = elements;
        // Only mount the element the first time
        if (!this.card) {
          this.card = this.elements.create('card', {
            style: {
              base: {
                color: '#32325d',
                lineHeight: '18px',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                  color: '#aab7c4'
                }
              },
              invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
              }
            }
          });
          this.card.mount('#card-element');
        }
      });
  }

  investMonthly() {
    this.basicInvest(this.trymeService.investMonthly);
  }

  invest() {
    this.basicInvest(this.trymeService.invest);
  }

  private basicInvest(investFnc: (id: string, amount: number) => Promise<Response>) {
    const name = this.stripeTest.get('name').value;
    const amount = this.stripeTest.get('amount').value;
    this.stripeService
      .createToken(this.card, {name})
      .subscribe(token => {
        if (token) {
          investFnc(token.token.id, amount);
          console.log('Success', token);
        }
      });
  }
}
