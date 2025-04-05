import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthMeRx } from './models/me-rx.model';
import { environment } from '../../../../environments/environment';
import { Observable, switchMap, tap } from 'rxjs';
import { AuthLoginTx } from './models/login-tx.model';
import { LOCAL_STORAGE_KEYS } from '../../local-storage-keys';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  setAuthLocalStorage(auth: AuthMeRx) {
    localStorage.setItem(LOCAL_STORAGE_KEYS.authTokenExpiration, auth.tokenExpiration);
    localStorage.setItem(LOCAL_STORAGE_KEYS.authUserId, auth.id);
    localStorage.setItem(LOCAL_STORAGE_KEYS.authUserName, auth.name);
    localStorage.setItem(LOCAL_STORAGE_KEYS.authUserImage, auth.image);
  }

  getAuthLocalStorage(): AuthMeRx | undefined {
    const tokenExpiration = localStorage.getItem(LOCAL_STORAGE_KEYS.authTokenExpiration);
    const id = localStorage.getItem(LOCAL_STORAGE_KEYS.authUserId);
    const name = localStorage.getItem(LOCAL_STORAGE_KEYS.authUserName);
    const image = localStorage.getItem(LOCAL_STORAGE_KEYS.authUserImage);

    if (!tokenExpiration || !id || !name || !image) return undefined;

    return {
      tokenExpiration,
      id,
      name,
      image,
    };
  }

  getMe(): Observable<AuthMeRx> {
    return this.http.get<AuthMeRx>(environment.apiUrl + '/me').pipe(
      tap((auth) => this.setAuthLocalStorage(auth))
    );
  }

  login(loginData: AuthLoginTx): Observable<{}> {
    return this.http.post<{}>(environment.apiUrl + '/login', loginData).pipe(switchMap(() => this.getMe()));
  }

  isLoggedIn(): boolean {
    const auth = this.getAuthLocalStorage();
    if (!auth) return false;
    const tokenExpiration = new Date(auth.tokenExpiration).getTime();
    const currentTime = new Date().getTime();
    console.log(`[Login Check] ${isNaN(tokenExpiration)}`)
    return !isNaN(tokenExpiration) && tokenExpiration > currentTime;
  }
}
