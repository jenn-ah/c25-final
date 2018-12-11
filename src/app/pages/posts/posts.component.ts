import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";
import { Router } from '@angular/router';

@Component({
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {

    constructor(private backend: BackendService, private router: Router) {

    }

    ngOnInit() { }

}