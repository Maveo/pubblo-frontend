import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCategoriesGenreTagsComponent } from './c-categories-genre-tags.component';
import { provideRouter } from '@angular/router';

describe('CCategoriesGenreTagsComponent', () => {
  let component: CCategoriesGenreTagsComponent;
  let fixture: ComponentFixture<CCategoriesGenreTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CCategoriesGenreTagsComponent],
      providers: [
        provideRouter([
            // TODO: test routes
        ]),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CCategoriesGenreTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
