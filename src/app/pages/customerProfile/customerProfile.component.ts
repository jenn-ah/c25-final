import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service'
import { SessionService } from '../../services/session.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    templateUrl: './customerProfile.component.html',
    styleUrls: ['./customerProfile.component.scss']
})

export class CustomerProfileComponent implements OnInit {
    urlId: string;
    isLoggedIn: boolean = false;
    loginPressed: boolean = false;
    editClicked: boolean = true;
    customer: any;
    correctCustomer: boolean = false;

    constructor(private backend: BackendService, private router: Router, private session: SessionService,
        private route: ActivatedRoute) {
        this.customer = this.session.getCustomer()
        // this.backend.getCustomer()
        //     .then((data) => {
        //         this.customer = data
        //     })
        //     .catch((err) => {
        //         return this.router.navigate(['/error']);
        //     })
    }

    ngOnInit() {
        this.urlId = this.route.snapshot.paramMap.get('id');

        if (this.urlId === `${this.customer.id}`) {
            this.correctCustomer = true;
        }
        return this.backend.getCustomer(this.urlId)

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