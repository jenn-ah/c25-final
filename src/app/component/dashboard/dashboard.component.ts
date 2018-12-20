import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { SessionService } from '../../services/session.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
    customer: any;
    posts: any

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
        let postId = this.session.getCustomer()
        return this.backend.getPostByCustomer(postId.id)
            .then((resp) => {
                this.posts = resp
                return this.router.navigate([`/posts/${postId.id}`, this.posts])
            });
    }



}