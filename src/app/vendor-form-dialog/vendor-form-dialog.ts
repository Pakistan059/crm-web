import { Component } from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatError, MatFormField} from '@angular/material/form-field';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatInput, MatLabel} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {CreateVendor} from '../vendors/vendor.model';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-vendor-form-dialog',
  templateUrl: './vendor-form-dialog.html',
  imports: [
    MatDialogContent,
    MatFormField,
    ReactiveFormsModule,
    MatLabel,
    MatError,
    MatCheckbox,
    MatDialogActions,
    MatInput,
    MatButton,
    MatDialogTitle,
    MatSelectModule,
  ],
  styleUrls: ['./vendor-form-dialog.css']
})
export class VendorFormDialogComponent {
  vendorForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<VendorFormDialogComponent>
  ) {
    this.vendorForm = this.fb.group({
      vendorBusinessTypeId: [null, [Validators.required, Validators.min(1)]],
      name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: [''],
        zipCode: [''],
        country: ['']
      }),
      contacts: this.fb.array([this.createContactForm()])
    });
  }

  // helper for new contacts
  createContactForm(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      isAccountManager: [false, Validators.required],
      departmentTypeId: [null, [Validators.required, Validators.min(1)]],
      departmentName: ['', [Validators.minLength(1), Validators.maxLength(50)]],
    });
  }

  get contacts(): FormArray {
    return this.vendorForm.get('contacts') as FormArray;
  }

  addContact(): void {
    this.contacts.push(this.createContactForm());
  }

  removeContact(index: number): void {
    this.contacts.removeAt(index);
  }

  save(): void {
    if (this.vendorForm.valid) {
      const payload: CreateVendor = this.vendorForm.value;
      this.dialogRef.close(payload);
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
