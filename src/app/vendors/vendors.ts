import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';
import {NgClass} from '@angular/common';
import {MatPaginator} from '@angular/material/paginator';

// vendor-overview.component.ts
export interface KeyValue {
  key: string;
  value: string;
}

export interface Address {
  street?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
}

export interface VendorOverview {
  id: number;
  vendorBusinessType?: KeyValue;
  name: string;
  address?: Address;
  isActive: boolean;
  accountManagers: string[];
}


@Component({
  selector: 'app-vendors',
  imports: [
    FormsModule,
    MatFormField,
    MatLabel,
    MatTable,
    MatHeaderCellDef,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatButton,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRowDef,
    MatInput,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatRow,
    MatIconButton,
    NgClass,
    MatPaginator
  ],
  templateUrl: './vendors.html',
  styleUrl: './vendors.css'
})
export class Vendors {
  searchText = '';
  displayedColumns: string[] = ['id', 'name', 'businessType', 'address', 'isActive', 'accountManagers', 'actions'];
  vendors: VendorOverview[] = [
    {
      id: 1,
      vendorBusinessType: { key: 'tech', value: 'Technology' },
      name: 'Apple Co.',
      address: { street: '1 Infinite Loop', city: 'Cupertino' },
      isActive: true,
      accountManagers: ['John Doe', 'Jane Smith']
    },
    {
      id: 2,
      vendorBusinessType: { key: 'retail', value: 'Retail' },
      name: 'BestBuy',
      address: { street: '123 Market St', city: 'San Jose' },
      isActive: false,
      accountManagers: ['Mike Ross']
    },
    {
      id: 3,
      vendorBusinessType: { key: 'retail', value: 'Retail' },
      name: 'BestBuy',
      address: { street: '123 Market St', city: 'San Jose' },
      isActive: false,
      accountManagers: ['Mike Ross']
    },
    {
      id: 4,
      vendorBusinessType: { key: 'retail', value: 'Retail' },
      name: 'BestBuy',
      address: { street: '123 Market St', city: 'San Jose' },
      isActive: false,
      accountManagers: ['Mike Ross']
    }
  ];

  get filteredVendors() {
    return this.vendors.filter(v =>
      v.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  get activeVendors() {
    return this.vendors.filter(v => v.isActive).length;
  }

  get inactiveVendors() {
    return this.vendors.filter(v => !v.isActive).length;
  }

  createVendor() {
    console.log('Create Vendor clicked');
  }

  editVendor(vendor: VendorOverview) {
    console.log('Edit', vendor);
  }

  deleteVendor(vendor: VendorOverview) {
    console.log('Delete', vendor);
  }
}
