import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ANameTagComponent } from './a-name-tag.component';

describe('ANameTagComponent', () => {
  let component: ANameTagComponent;
  let fixture: ComponentFixture<ANameTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ANameTagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ANameTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
