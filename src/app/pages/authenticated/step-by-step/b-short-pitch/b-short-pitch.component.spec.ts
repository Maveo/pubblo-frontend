import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BShortPitchComponent } from './b-short-pitch.component';
import { provideRouter } from '@angular/router';

describe('BShortPitchComponent', () => {
  let component: BShortPitchComponent;
  let fixture: ComponentFixture<BShortPitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BShortPitchComponent],
      providers: [
        provideRouter([
            // TODO: test routes
        ]),
      ],
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
