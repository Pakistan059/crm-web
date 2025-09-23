import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, NgOptimizedImage, ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  form: FormGroup;
  isSubmitting = false;
  constructor(private readonly formBuilder: FormBuilder, private readonly auth: AuthService) {
    this.form = this.formBuilder.group(
      {
        name: this.formBuilder.control('', {
          validators: [Validators.required, Validators.minLength(2)],
          nonNullable: true
        }),
        email: this.formBuilder.control('', {
          validators: [Validators.required, Validators.email],
          nonNullable: true
        }),
        password: this.formBuilder.control('', {
          validators: [Validators.required, Validators.minLength(8)],
          nonNullable: true
        }),
        confirmPassword: this.formBuilder.control('', {
          validators: [Validators.required],
          nonNullable: true
        })
      },
      { validators: [this.passwordsMatchValidator] }
    );
  }
  private passwordsMatchValidator(controlGroup: AbstractControl): ValidationErrors | null {
    const password = controlGroup.get('password')?.value as string | undefined;
    const confirm = controlGroup.get('confirmPassword')?.value as string | undefined;
    if (!password || !confirm) {
      return null;
    }
    return password === confirm ? null : { passwordMismatch: true };
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, email, password } = this.form.getRawValue() as { name: string; email: string; password: string };
    this.isSubmitting = true;
    this.auth.register({ name, email, password }).subscribe({
      next: () => {
        this.isSubmitting = false;
        // eslint-disable-next-line no-console
        console.log('Registration successful');
      },
      error: () => {
        this.isSubmitting = false;
      }
    });
  }
}
