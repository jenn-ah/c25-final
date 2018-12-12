import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { BackendService } from '../../services/backend.service';

@Component({
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent {
  newCustomerForm: {
    first_name: string;
    last_name: string;
    username: string;
    password: string;
    email: string;
    state: string;
    zip_code: string;
    city: string
  } = {
      first_name: '',
      last_name: '',
      username: '',
      password: '',
      email: '',
      state: '',
      zip_code: '',
      city: ''
    };

  constructor(private backend: BackendService, private router: Router) { }

  createCustomer() {
    event.preventDefault();
    return this.backend
      .register(this.newCustomerForm)
      .then(() => {
        return this.router.navigate(['/home']);
      })
      .catch(err => {
        return this.router.navigate(['/error']);
      });
  }
}
