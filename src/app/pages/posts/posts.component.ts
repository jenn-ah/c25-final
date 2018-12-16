import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service'

@Component({
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
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
        private session: SessionService) {

    }

    ngOnInit() { }

    showPosts(){
    }
}