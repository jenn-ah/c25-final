import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './customerProfile.component.html',
    styleUrls: ['./customerProfile.component.scss']
})

export class CustomerProfileComponent implements OnInit {
    isLoggedIn: boolean = false;
    loginPressed: boolean = false;
    customer: object;

    constructor(private backend: BackendService, private router: Router, private session: SessionService) {
        this.customer = this.session.getCustomer();

    }

    ngOnInit() {
    }

    customerLogIn() {
        return this.session.getIsLoggedIn();
    }

    logout() {
        this.session.clearSession()
        this.isLoggedIn = false;
        this.loginPressed = false;
        return this.router.navigate([''])
    }

    // edit() {
    //     console.log('now in edit mode')
    // }

}