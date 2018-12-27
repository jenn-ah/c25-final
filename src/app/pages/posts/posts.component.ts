import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
    posts: Object[] = [];
    post: any;
    
    constructor(private backend: BackendService,
        private router: Router,
        private route: ActivatedRoute) {

    }

    ngOnInit() {
        let postId = this.route.snapshot.paramMap.get('id');
        this.backend.getPostByCustomer(postId)
            .then((resp: Object[]) => {
                this.posts = resp;
                console.log(this.posts)
                return this.posts
            })
    };

    fetchPostDetail(id) {
        return this.backend.fetchPost(id)
            .then((resp) => {
                this.post = resp
                return this.router.navigate(['/postDetail/id', this.post])
            });
    }
};