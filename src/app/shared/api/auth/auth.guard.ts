import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthService } from './auth.service';  // Your AuthService to check login status

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {

    // Check if the user is logged in (based on your token or user ID stored in localStorage)
    if (this.authService.isLoggedIn()) {
      return true;
    }
    return this.authService.getMe().pipe(
      map(response => {
        // If the response is true, user is logged in
        return true;
      }),
      catchError((error) => {
        // on error redirect to login
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }
}
