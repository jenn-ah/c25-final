import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(
    private backend: BackendService,
    private session: SessionService,
  ){}

  customerLoginCheck(customer, username, password){
    if(customer.password === password && customer.username === username){
    return this.session.setCustomerSession(customer)
  }else{
    return `Username and/or password, incorrect.`
  }
  }

  vendorLoginCheck(vendor, companyName, password){
    if(vendor.password === password && vendor.company_name === companyName){
      return this.session.setVendorSession(vendor)
    }else{
      return `Company Name and/or password, incorrect.`
    }
  }
}