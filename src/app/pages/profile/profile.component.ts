import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    isLoggedIn: boolean = false;
    loginPressed: boolean = false;
    data: any;
    vendor: object;
    customer: object;

    constructor(private backend: BackendService, private router: Router, private session: SessionService) {
        this.backend.getVendor()
        .then((data) => {
            this.vendor = data
        })
        .catch((err) => {
            return this.router.navigate(['/error']);
        })
    }

    ngOnInit() {
    }

    vendorLogIn() {
        return this.session.getIsVendorLoggedIn();
    }

    logout() {
        this.session.clearSession()
        this.isLoggedIn = false;
        this.loginPressed = false;
        return this.router.navigate([''])
    }
}