import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { Router } from '@angular/router';


@Component({
  templateUrl: './vendorRegister.component.html',
  styleUrls: ['./vendorRegister.component.scss']
})


export class VendorRegisterComponent {
  newVendorForm: {
    username: string;
    first_name: string;
    last_name: string;
    company_name: string;
    password: string;
    email: string;
    street_address: string;
    city: string;
    state: string;
    zip_code: string;
    photo: string;
    website: string;
    description: string;
    phone_number: string;
    license_number: string;
  } = {
      username: "",
      first_name: "",
      last_name: "",
      company_name: "",
      password: "",
      email: "",
      street_address: "",
      city: "",
      state: "",
      zip_code:"",
      photo: "",
      website: "",
      description: "",
      phone_number: "",
      license_number: ""
    }
  constructor(
    private backend: BackendService,
    private router: Router,
  ) {
  }

  createNewVendor() {
    event.preventDefault()
    return this.backend.vendorReg(this.newVendorForm)
    .then((resp)=>{
      return this.router.navigate(['/profile'])
    })
    .catch((err)=>{
      return this.router.navigate(['/vendorRegister'])
    })
  }

}