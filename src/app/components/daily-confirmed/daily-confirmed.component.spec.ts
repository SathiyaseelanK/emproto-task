import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyConfirmedComponent } from './daily-confirmed.component';

describe('DailyConfirmedComponent', () => {
  let component: DailyConfirmedComponent;
  let fixture: ComponentFixture<DailyConfirmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyConfirmedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
