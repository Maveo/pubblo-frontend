import { Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { ANameTagComponent } from './step-by-step/a-name-tag/a-name-tag.component';
import { BShortPitchComponent } from './step-by-step/b-short-pitch/b-short-pitch.component';
import { CCategoriesGenreTagsComponent } from './step-by-step/c-categories-genre-tags/c-categories-genre-tags.component';
import { DVisualsComponent } from './step-by-step/d-visuals/d-visuals.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/api/auth/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },  // Redirect to login if no route matches

  { path: 'overview', component: OverviewComponent, canActivate: [AuthGuard] },

  { path: 'step-a', component: ANameTagComponent, canActivate: [AuthGuard] },
  { path: 'step-b', component: BShortPitchComponent, canActivate: [AuthGuard] },
  { path: 'step-c', component: CCategoriesGenreTagsComponent, canActivate: [AuthGuard] },
  { path: 'step-d', component: DVisualsComponent, canActivate: [AuthGuard] },

  { path: 'login', component: LoginComponent },  // Login page does not need guard
  { path: '**', redirectTo: '/login' }  // Handle invalid routes by redirecting to login
];
