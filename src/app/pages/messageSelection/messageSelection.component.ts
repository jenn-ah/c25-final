import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';



@Component({
    selector: 'app-messages',
    templateUrl: './messageSelection.component.html',
    styleUrls: ['./messageSelection.component.scss']
})
export class MessagesSelectionComponent implements OnInit {
    customer: object;
    vendor: object;
    id: number = 2;

    constructor(
        private session: SessionService,
        private router: Router
    ) {

    }

    ngOnInit() { }

    onClick() {
        return this.router.navigate(['/messages']);
    }
    isLoggedIn() {
        return this.session.getIsLoggedIn();
    }

    isVendorLoggedIn() {
        return this.session.getIsVendorLoggedIn();
    }

}
