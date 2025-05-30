import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsHeaderComponent } from './steps-header.component';

describe('StepsHeaderComponent', () => {
  let component: StepsHeaderComponent;
  let fixture: ComponentFixture<StepsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepsHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
