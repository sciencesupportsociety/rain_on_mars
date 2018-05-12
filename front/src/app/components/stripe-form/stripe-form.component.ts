import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StripeService, Elements, Element as StripeElement, ElementsOptions } from 'ngx-stripe';

import { TrymeService } from '../tryme.service';


@Component({
  selector: 'app-stripe-form',
  template: `
  <form novalidate (ngSubmit)="buy($event)" [formGroup]="stripeTest">
    <input type="text" formControlName="amount" value="5"><br>
    <input type="text" formControlName="name" placeholder="Jane Doe">
    <div id="card-element" class="field"></div>
    <button type="submit">
      BUY
    </button>
  </form>
  `
})
export class StripeFormComponent implements OnInit {
  elements: Elements;
  card: StripeElement;

  // optional parameters
  elementsOptions: ElementsOptions = {
    locale: 'es'
  };

  stripeTest: FormGroup;

  constructor(
    private fb: FormBuilder,
    private stripeService: StripeService,
    private trymeService: TrymeService
  ) {}

  ngOnInit() {
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]],
      amount: ['', [Validators.required]]
    });
    this.stripeService.elements(this.elementsOptions)
      .subscribe(elements => {
        this.elements = elements;
        // Only mount the element the first time
        if (!this.card) {
          this.card = this.elements.create('card', {
            style: {
              base: {
                iconColor: '#666EE8',
                color: '#31325F',
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

  buy() {
    const name = this.stripeTest.get('name').value;
    const amount = this.stripeTest.get('amount').value;
    this.stripeService
      .createToken(this.card, { name })
      .subscribe(token => {
         if (token) {
          this.trymeService.passToken(token.token.id, amount);
          console.log('Success', token);
        }
      });
  }
}
