import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritiesExchangeComponent } from './securities-exchange.component';

describe('SecuritiesExchangeComponent', () => {
  let component: SecuritiesExchangeComponent;
  let fixture: ComponentFixture<SecuritiesExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SecuritiesExchangeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritiesExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
