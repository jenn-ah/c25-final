import { Injectable } from '@angular/core';
import { SessionService } from './session.service';
import { BackendService } from './backend.service'

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(
    private session: SessionService,
    private backend: BackendService
  ) { }

  register(data) {
    console.log('succesful')
    return this.backend.register(data)
    //should look more like a login.
  }

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
    