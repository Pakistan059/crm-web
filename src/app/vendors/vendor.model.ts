export interface CreateVendor {
  vendorBusinessTypeId: number;
  name: string;
  address: Address;
  contacts: CreateVendorContact[];
}

export interface Address {
  street: string;
  city: string;
  state?: string;
  zipCode?: string;
  country?: string;
}

export interface CreateVendorContact extends Contact {
  isAccountManager: boolean;
  departmentTypeId: number;
  departmentName?: string;
}


export interface Contact {
  firstName: string;
  lastName: string;
  jobTitle?: string;
  email: string;
  phone: string;
}
