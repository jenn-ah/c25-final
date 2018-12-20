import { Component } from '@angular/core';
import { BackendService } from "../../services/backend.service";
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service'

@Component({
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})

export class CreateComponent {

    NewPostForm: {
        title: string;
        customer_id: number;
        category_id: number;
        post_priority_id: number;
        post_status_id:number;
        vendor_id: number;
        photo: string;
        city: string;
        state: string;
        budget: number;
        emergency: number;
        description: string;
        zip_code: string;
        can_bid: boolean;
    } = {
            title: '',
            customer_id: this.session.getCustomer().id,
            category_id:null,
            post_priority_id: null,
            post_status_id:null,
            vendor_id: null,
            photo: null,
            city: '',
            state: '',
            budget: null,
            emergency: null,
            description: '',
            zip_code: '',
            can_bid: null,
        };

    constructor(private backend: BackendService, 
        private router: Router,
        private session: SessionService) {
         }

    createPost() {
        event.preventDefault();
        return this.backend
            .createNewPost(this.NewPostForm, this.session.getCustomer())
            .then((resp) => {
                return this.router.navigate(['/home']);
            })
            .catch(err => {
                return this.router.navigate(['/error']);
            });
    }
}
