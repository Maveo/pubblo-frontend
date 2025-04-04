import { Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { ANameTagComponent } from './step-by-step/a-name-tag/a-name-tag.component';
import { BShortPitchComponent } from './step-by-step/b-short-pitch/b-short-pitch.component';
import { CCategoriesGenreTagsComponent } from './step-by-step/c-categories-genre-tags/c-categories-genre-tags.component';
import { DVisualsComponent } from './step-by-step/d-visuals/d-visuals.component';

export const routes: Routes = [
  { path: '', component: OverviewComponent, pathMatch: 'full' },
  { path: 'step-a', component: ANameTagComponent },
  { path: 'step-b', component: BShortPitchComponent },
  { path: 'step-c', component: CCategoriesGenreTagsComponent },
  { path: 'step-d', component: DVisualsComponent },
];
