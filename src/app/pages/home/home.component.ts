import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    posts: Object[] = [];
    post: any;
    isAuthorized: boolean;
    hasAdminAccess: boolean;
    id: number;
    constructor(
        private backend: BackendService,
        private router: Router,
        private route: ActivatedRoute) {

        this.backend.getAllHomeItems()
            .then((data: Object[]) => {
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