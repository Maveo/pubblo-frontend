import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DVisualsComponent } from './d-visuals.component';

describe('DVisualsComponent', () => {
  let component: DVisualsComponent;
  let fixture: ComponentFixture<DVisualsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DVisualsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DVisualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
