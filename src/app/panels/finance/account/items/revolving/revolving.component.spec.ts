import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevolvingComponent } from './revolving.component';

describe('RevolvingComponent', () => {
  let component: RevolvingComponent;
  let fixture: ComponentFixture<RevolvingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RevolvingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevolvingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
