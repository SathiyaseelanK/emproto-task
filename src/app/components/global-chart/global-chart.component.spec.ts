import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalChartComponent } from './global-chart.component';

describe('GlobalChartComponent', () => {
  let component: GlobalChartComponent;
  let fixture: ComponentFixture<GlobalChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
