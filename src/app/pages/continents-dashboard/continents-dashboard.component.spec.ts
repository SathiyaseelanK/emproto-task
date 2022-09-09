import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentDashboardComponent } from './continents-dashboard.component';

describe('ContinentDashboardComponent', () => {
  let component: ContinentDashboardComponent;
  let fixture: ComponentFixture<ContinentDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinentDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
