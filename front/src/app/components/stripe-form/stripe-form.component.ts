import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Element as StripeElement, Elements, ElementsOptions, StripeService} from 'ngx-stripe';

import {TrymeService} from '../tryme.service';
import {Response} from '@angular/http';


@Component({
  selector: 'app-stripe-form',
  template: `
    <form style="width: 400px" novalidate [formGroup]="stripeTest">
      <input type="number" formControlName="amount"><br>
      <input type="text" formControlName="name" placeholder="Jane Doe">
      <div id="card-element" class="field"></div>
      <button type="button" (click)="investMonthly()">INVEST MONTHLY</button>
      <button type="button" (click)="invest()">INVEST</button>
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
      name: ['Kriss', [Validators.required]],
      amount: [5, [Validators.required]]
    });
    this.stripeService.elements(this.elementsOptions)
      .subscribe(elements => {
        this.elements = elements;
        // Only mount the element the first time
        if (!this.card) {
          this.card = this.elements.create('card', {
            style: {
              base: {
                iconColor: '#fff',
                color: '#fff',
                lineHeight: '40px',
                fontWeight: 300,
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSize: '18px',
                '::placeholder': {
                  color: '#CFD7E0'
                }
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
