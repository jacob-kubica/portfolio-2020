import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeingComponent } from './chequeing.component';

describe('ChequeingComponent', () => {
  let component: ChequeingComponent;
  let fixture: ComponentFixture<ChequeingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChequeingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
