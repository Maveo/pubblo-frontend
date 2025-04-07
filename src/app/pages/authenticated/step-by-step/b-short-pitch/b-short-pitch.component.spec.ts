import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BShortPitchComponent } from './b-short-pitch.component';

describe('BShortPitchComponent', () => {
  let component: BShortPitchComponent;
  let fixture: ComponentFixture<BShortPitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BShortPitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BShortPitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
