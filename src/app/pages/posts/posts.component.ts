import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from '../../services/session.service'

@Component({
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
    posts:any;
post:{
    id:number,
    title:string,
    first_name:string,
    category_id:number,
    customer_id:number,
    post_status_id:number,
    post_priority: number,
    photo:string,
    description:string,
    city:string,
    state:string,
    zip_code:number,
    budget:number,
    can_bid:boolean,
    created_at:string,
} = {
    id:null,
    title:'',
    first_name:'',
    category_id:null,
    customer_id:null,
    post_status_id:null,
    post_priority: null,
    photo:'',
    description:'',
    city:'',
    state:'',
    zip_code:null,
    budget:null,
    can_bid: false,
    created_at:'',
}
    constructor(private backend: BackendService, 
        private router: Router,
        private session: SessionService,
        private route: ActivatedRoute) {

    }

    ngOnInit() { 
        let postId = this.route.snapshot.paramMap.get('id');
        console.log(postId)
    this.backend.getPostByCustomer(postId)
      .then((resp) => {
          console.log(resp)
          this.posts = resp;
        return 
      })
    //   .catch((err) => {
    //     return this.router.navigate(['/home'])
    //   })
    }

    
}