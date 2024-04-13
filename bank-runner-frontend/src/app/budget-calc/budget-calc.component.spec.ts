import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetCalcComponent } from './budget-calc.component';

describe('BudgetCalcComponent', () => {
  let component: BudgetCalcComponent;
  let fixture: ComponentFixture<BudgetCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
