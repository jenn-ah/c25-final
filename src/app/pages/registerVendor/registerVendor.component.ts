import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { BackendService } from '../../services/backend.service';

@Component({
  templateUrl: "./registerVendor.component.html",
  styleUrls: ["./registerVendor.component.scss"]
})
export class RegisterVendorComponent {
  newVendorForm: {
    first_name: string;
    last_name: string;
    company_name: string;
    password: string;
    email: string;
    street_address: string;
    city: string;
    state: string;
    zip_code: number;
    photo: string;
    website: string;
    description: string;
    phone_number: string;
    license_number: number;
  } = {
      first_name: '',
      last_name: '',
      company_name: '',
      password: '',
      street_address: '',
      city: '',
      email: '',
      state: '',
      zip_code: null,
      photo: '',
      website: '',
      description: '',
      phone_number: '',
      license_number: null
    };

  constructor(private backend: BackendService, private router: Router) { }

  createVendor() {
    event.preventDefault();
    return this.backend
      .registerVendor(this.newVendorForm)
      .then(() => {
        return this.router.navigate(['/home']);
      })
      .catch(err => {
        return this.router.navigate(['/error']);
      });
  }
}
