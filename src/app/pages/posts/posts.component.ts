import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from '../../services/session.service'
import { IPost } from '../../interfaces/interfaces'

@Component({
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
    posts:Object[]=[];
    post:  IPost = {
    id:null,
    title:'',
    first_name:'',
    username:'',
    category_id:null,
    customer_id:null,
    post_status_id:null,
    post_priority_id: null,
    photo:'',
    description:'',
    email:'',
    city:'',
    state:'',
    zip_code:null,
    budget:null,
    can_bid: false,
    created_at:'',
    customerId:null,
}
    constructor(private backend: BackendService, 
        private router: Router,
        private session: SessionService,
        private route: ActivatedRoute) {

    }

    ngOnInit() { 
        let postId = this.route.snapshot.paramMap.get('id');
    this.backend.getPostByCustomer(postId)
      .then((resp) => {
          this.posts = resp;
        return this.posts
      })
    }

    fetchPostDetail(id){
     return this.backend.fetchPost(id)
     .then((resp)=>{
         this.post = resp
         return this.router.navigate(['/postDetail/id', this.post])
     });
    }
}