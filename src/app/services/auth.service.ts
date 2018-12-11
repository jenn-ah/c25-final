import { Injectable } from '@angular/core';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(
    private session: SessionService,
  ){}

  customerLoginCheck(customer){
    return this.session.setCustomerSession(customer)
  }

  vendorLoginCheck(vendor){
      return this.session.setVendorSession(vendor)
    }
}
    // .then((vendor)=>{
    //   return this.auth.vendorLoginCheck(vendor, this.company_name, this.password )
    
    // })
    