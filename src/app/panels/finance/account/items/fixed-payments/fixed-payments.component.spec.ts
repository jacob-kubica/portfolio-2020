import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedPaymentsComponent } from './fixed-payments.component';

describe('FixedPaymentsComponent', () => {
  let component: FixedPaymentsComponent;
  let fixture: ComponentFixture<FixedPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FixedPaymentsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
