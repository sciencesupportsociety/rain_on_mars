import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrReadComponent } from './qrRead.component';

describe('QrShowComponent', () => {
  let component: QrReadComponent;
  let fixture: ComponentFixture<QrReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
