import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service'
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './customerProfile.component.html',
    styleUrls: ['./customerProfile.component.scss']
})

export class CustomerProfileComponent implements OnInit {
    isLoggedIn: boolean = false;
    loginPressed: boolean = false;
    editClicked: boolean = true;
    customer: object;

    constructor(private backend: BackendService, private router: Router, private session: SessionService) {

        this.backend.getCustomer()
            .then((data) => {
                console.log('datazs', data);
                this.customer = data
            })
            .catch((err) => {
                return this.router.navigate(['/error']);
            })
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

}