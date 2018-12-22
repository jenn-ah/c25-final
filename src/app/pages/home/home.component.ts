import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { IPost } from '../../interfaces/interfaces'

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    posts: Object[] = [];
    post: IPost = {
        id: null,
        title: '',
        first_name: '',
        username: '',
        category_id: null,
        customer_id: null,
        post_status_id: null,
        post_priority_id: null,
        photo: '',
        description: '',
        email: '',
        city: '',
        state: '',
        zip_code: null,
        budget: null,
        can_bid: false,
        created_at: '',
        customerId: null,
    }
    isAuthorized: boolean;
    hasAdminAccess: boolean;
    id: number;
    constructor(
        private backend: BackendService,
        private router: Router,
        private route: ActivatedRoute) {

        this.backend.getAllHomeItems()
            .then((data) => {
                console.log(data)
                return this.posts = data
            })
            .catch((err) => {
                return this.router.navigate(['/error']);
            })
    }
    ngOnInit() { }

    fetchPostDetail(id) {
        return this.backend.fetchPost(id)
            .then((resp) => {
                this.post = resp
                return this.router.navigate(['/postDetail/id', this.post])
            });
    }

}