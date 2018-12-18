import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  customer: {
    id: number,
    first_name: string,
    last_name: string,
    username: string,
    isLoggedIn: boolean,
    email: string,
    city: string,
    state: string,
    zip_code: number,
  } = {
      id: null,
      first_name: '',
      last_name: '',
      username: '',
      isLoggedIn: false,
      email: "",
      city: "",
      state: "",
      zip_code: null,
    }
  vendor: {
    id: number,
    first_name: string,
    last_name: string,
    phone_number: number,
    email: string,
    website: string,
    description: string,
    company_name: string,
    isLoggedIn: boolean,
    city: string,
    state: string,
    zip_code: number
  } = {
      id: null,
      first_name: "",
      last_name: "",
      phone_number: null,
      email: "",
      website: "",
      description: "",
      company_name: "",
      isLoggedIn: false,
      city: "",
      state: "",
      zip_code: null,
    }

  constructor() {
    const customerString = localStorage.getItem("customer");
    if (customerString) {
      try { this.customer = JSON.parse(customerString); }
      catch (err) { console.log(err) }
    }

    const vendorString = localStorage.getItem("vendor");
    if (vendorString) {
      try { this.vendor = JSON.parse(vendorString); }
      catch (err) { console.log(err) }
    }
  }

  setCustomerSession(customer) {
    this.customer.id = customer.id;
    this.customer.first_name = customer.first_name;
    this.customer.last_name = customer.last_name;
    this.customer.username = customer.username;
    this.customer.email = customer.email;
    this.customer.isLoggedIn = true;
    this.customer.city = customer.city;
    this.customer.state = customer.state;
    this.customer.zip_code = customer.zip_code;
    localStorage.setItem('customer', JSON.stringify(this.customer))
  }

  setVendorSession(vendor) {
    this.vendor.id = vendor.id,
      this.vendor.first_name = vendor.first_name,
      this.vendor.last_name = vendor.last_name,
      this.vendor.phone_number = vendor.phone_number,
      this.vendor.email = vendor.email,
      this.vendor.website = vendor.website,
      this.vendor.description = vendor.description,
      this.vendor.company_name = vendor.company_name,
      this.vendor.isLoggedIn = true,
      this.vendor.city = vendor.city,
      this.vendor.state = vendor.state,
      this.vendor.zip_code = vendor.zip_code,
      localStorage.setItem('vendor', JSON.stringify(this.vendor))
  }

  getIsLoggedIn() {
    return this.customer.isLoggedIn;
  }

  getVendor() {
    return this.vendor;
  }

  getCustomer() {
    return this.customer;
  }
  getIsVendorLoggedIn() {
    return this.vendor.isLoggedIn;
  }

  clearSession() {
    this.customer.id = undefined;
    this.vendor.id = undefined;
    this.customer.username = '';
    this.vendor.company_name = '';
    this.customer.isLoggedIn = false;
    this.vendor.isLoggedIn = false;

    localStorage.removeItem('customer');
    localStorage.removeItem('vendor');
  }

}