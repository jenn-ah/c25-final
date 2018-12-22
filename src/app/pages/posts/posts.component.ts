import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service'

@Component({
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
post: any;

    constructor(private backend: BackendService, 
        private router: Router,
        private session: SessionService) {

    }

    ngOnInit() { }

    
}