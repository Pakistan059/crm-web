import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import {
  LoginRequestDto,
  LoginResponseDto,
  RegisterRequestDto,
  RegisterResponseDto
} from './auth.models';

/** Simple environment shim; replace with real environment import if available. */
const API_BASE_URL = '/api';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);

  register(payload: RegisterRequestDto): Observable<RegisterResponseDto> {
    return this.http.post<RegisterResponseDto>(`${API_BASE_URL}/auth/register`, payload);
  }

  login(payload: LoginRequestDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(`${API_BASE_URL}/auth/login`, payload).pipe(
      map((res) => {
        this.persistTokens(res);
        return res;
      })
    );
  }

  logout(): void {
    this.clearTokens();
  }

  getAccessToken(): string | null {
    return localStorage.getItem('access_token');
  }

  private persistTokens(res: LoginResponseDto): void {
    localStorage.setItem('access_token', res.accessToken);
    if (res.refreshToken) {
      localStorage.setItem('refresh_token', res.refreshToken);
    }
  }

  private clearTokens(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }
}


