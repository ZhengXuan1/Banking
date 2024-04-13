import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoutcreationComponent } from './accountcreation.component';

describe('AccoutcreationComponent', () => {
  let component: AccoutcreationComponent;
  let fixture: ComponentFixture<AccoutcreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccoutcreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccoutcreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
