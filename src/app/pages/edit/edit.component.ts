import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit {

    data: {
        username: string,
        first_name: string,
        last_name: string,
        email: string,
        state: string
        city: string,
        zip_code: number,
    } = {
            username: '',
            first_name: '',
            last_name: '',
            email: '',
            state: '',
            city: '',
            zip_code: null
        }

    constructor(private backend: BackendService, private router: Router, private session: SessionService) {

    }

    ngOnInit() { }


    editCustomer() {
        event.preventDefault();
        return this.backend
            .editCustomer(this.data)
            .then(() => {
                return this.router.navigate(['/home']);
            })
            .catch(err => {
                return this.router.navigate(['/error']);
            });
    }

}