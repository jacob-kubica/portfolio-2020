import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TFSAComponent } from './tfsa.component';

describe('TFSAComponent', () => {
  let component: TFSAComponent;
  let fixture: ComponentFixture<TFSAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TFSAComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TFSAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
