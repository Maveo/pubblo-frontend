import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AuthInterceptor } from './shared/api/interceptors/auth.interceptor';
import { environment } from '../environments/environment';
import { MockApiHttpRequestInterceptor } from './shared/api/interceptors/mock-api/mock-api.interceptor';
import { AuthGuard } from './shared/api/auth/auth.guard';
import { AuthService } from './shared/api/auth/auth.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withHashLocation()),
    provideHttpClient(
      // DI-based interceptors must be explicitly enabled.
      withInterceptorsFromDi(),
    ),

    // authentification
    AuthService,
    AuthGuard,

    // HTTP interceptors
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    ...(environment.apiUrl == '' ? [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: MockApiHttpRequestInterceptor,
        multi: true
      }
    ] : [])
  ],
};
