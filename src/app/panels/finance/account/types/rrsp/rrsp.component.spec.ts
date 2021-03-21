import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RRSPComponent } from './rrsp.component';

describe('RRSPComponent', () => {
  let component: RRSPComponent;
  let fixture: ComponentFixture<RRSPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RRSPComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RRSPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
