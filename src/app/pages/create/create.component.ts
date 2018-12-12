import { Component } from '@angular/core';
import { BackendService } from "../../services/backend.service";
import { Router } from '@angular/router';

@Component({
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})

export class CreateComponent {
    NewPostForm: {
        title: string;
        customer_id: number;
        post_priority: number;
        vendor_id: number;
        photo: string;
        city: string;
        state: string;
        budget: number;
        emergency: string;
        description: string;
        zip_code: string;
        can_bid: boolean
    } = {
            title: '',
            customer_id: null,
            post_priority: null,
            vendor_id: null,
            photo: null,
            city: '',
            state: '',
            budget: null,
            emergency: '',
            description: '',
            zip_code: '',
            can_bid: false
        };

    constructor(private backend: BackendService, private router: Router) { }

    createPost() {
        event.preventDefault();
        return this.backend
            .createNewPost(this.NewPostForm)
            .then(() => {
                return this.router.navigate(['/home']);
            })
            .catch(err => {
                return this.router.navigate(['/error']);
            });
    }
}
