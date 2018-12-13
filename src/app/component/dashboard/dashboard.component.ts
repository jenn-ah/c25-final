import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { SessionService } from '../../services/session.service';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
customer: any;

    constructor(private backend: BackendService, private session: SessionService) {
   
    }
    isLoggedIn() {
        return this.session.getIsLoggedIn();
    }

    isVendorLoggedIn() {
        return this.session.getIsVendorLoggedIn();
    }

    ngOnInit() { }

}