import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";
import { SessionService } from '../../services/session.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    urlId: string;
    isLoggedIn: boolean = false;
    loginPressed: boolean = false;
    data: any;
    vendor: any;
    correctVendor: boolean = false;


    constructor(private backend: BackendService, private router: Router, private session: SessionService,
        private route: ActivatedRoute) {
        this.vendor = this.session.getVendor()
    }

    ngOnInit() {
        this.urlId = this.route.snapshot.paramMap.get('id');

        if (this.urlId === `${this.vendor.id}`) {
            this.correctVendor = true;
        }
        return this.backend.getVendor(this.urlId)

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