import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/api/auth/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthLoginTx } from '../shared/api/auth/models/login-tx.model';


@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  loading = false;
  httpError?: HttpErrorResponse;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.loading = false;
    this.httpError = undefined;
    this.loginForm.reset();
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.httpError = undefined;
      this.loading = true;

      this.authService.login({
        username: this.loginForm.value.username!,
        password: this.loginForm.value.password!,
      }).subscribe({
        next: () => {
          // Successful login, redirect to the dashboard
          this.router.navigate(['/overview']);
        },
        error: (error: HttpErrorResponse) => {
          // Handle error and show error message
          this.httpError = error;  // Or any other error message you want to show
        }
      });
    }
  }
}
