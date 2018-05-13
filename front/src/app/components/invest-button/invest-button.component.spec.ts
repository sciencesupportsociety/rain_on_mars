import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestButtonComponent } from './invest-button.component';

describe('InvestButtonComponent', () => {
  let component: InvestButtonComponent;
  let fixture: ComponentFixture<InvestButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
