import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { SessionService } from '../../services/session.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Capability } from 'protractor';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
    customer:{
        id:number,
        first_name:string,
        last_name:string,
        username:string,
        password:string,
        email:string,
        state:string,
        city:string,
        zip_code:number,
    } 
    post:{
        id:number,
        title:string,
        category_id:number,
        post_status_id:number,
        post_priority_id:number,
        vendor_id:number,
        photo:string,
        description:string,
        city:string,
        state:string,
        zip_code:number,
        budget:number,
        can_bid:boolean,
        created_at:string
    }

    posts:Object[]

    constructor(
        private backend: BackendService,
        private session: SessionService,
        private route: ActivatedRoute,
        private router: Router
    ) {

    }
    isLoggedIn() {
        return this.session.getIsLoggedIn();
    }

    isVendorLoggedIn() {
        return this.session.getIsVendorLoggedIn();
    }

    ngOnInit() { }

    getPosts() {
        let customerId = this.session.getCustomer()
        return this.backend.getPostByCustomer(customerId.id)
            .then((resp:Object[]) => {
                this.posts = resp
                return this.router.navigate([`/posts/${customerId.id}`, this.posts])
            });
    }



}