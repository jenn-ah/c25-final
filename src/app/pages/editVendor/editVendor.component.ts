import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './editVendor.component.html',
    styleUrls: ['./editVendor.component.scss']
})

export class EditVendorComponent implements OnInit {

    data: {
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

    constructor(private backend: BackendService, private router: Router, private session: SessionService) {

    }

    ngOnInit() { }


    editVendor() {
        console.log('this is data fr fr', this.data)
        event.preventDefault();
        return this.backend
            .editVendor(this.data)
            .then(() => {
                return this.router.navigate(['/home']);
            })
            .catch(err => {
                return this.router.navigate(['/error']);
            });
    }

}