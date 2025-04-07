import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCategoriesGenreTagsComponent } from './c-categories-genre-tags.component';

describe('CCategoriesGenreTagsComponent', () => {
  let component: CCategoriesGenreTagsComponent;
  let fixture: ComponentFixture<CCategoriesGenreTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CCategoriesGenreTagsComponent]
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
