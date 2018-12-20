import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './editVendor.component.html',
    styleUrls: ['./editVendor.component.scss']
})

export class EditVendorComponent implements OnInit {
    urlId: string;
    vendor: any;
    correctVendor: boolean = false;
    id: any;

    data: {
        first_name: string;
        last_name: string;
        company_name: string;
        email: string;
        street_address: string;
        city: string;
        state: string;
        zip_code: number;
        photo: string;
        website: string;
        description: string;
        phone_number: number;
        license_number: number;
    } = {
            first_name: "",
            last_name: "",
            company_name: "",
            email: "",
            street_address: "",
            city: "",
            state: "",
            zip_code: null,
            photo: "",
            website: "",
            description: "",
            phone_number: null,
            license_number: null
        }

    constructor(private backend: BackendService, private router: Router, private session: SessionService,
        private route: ActivatedRoute) {
        this.vendor = this.session.getVendor()
        this.id = this.vendor.id
    }

    ngOnInit() { }

    editVendor() {
        event.preventDefault();
        return this.backend
            .editVendor(this.data, this.id)
            .then(() => {
                return this.router.navigate(['/']);
            })
            .catch(err => {
                return this.router.navigate(['/error']);
            });
    }

}