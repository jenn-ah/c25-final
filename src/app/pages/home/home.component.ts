import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";
import { Router } from '@angular/router';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    posts: object;
    currentPosts: object;

    constructor(private backend: BackendService, private router: Router) {

        this.backend.getAllHomeItems()
            .then((data) => {
                this.posts = data
            })
            .catch((err) => {
                return this.router.navigate(['/error']);
            })
    }
    ngOnInit() { }

    filter() {
        this.backend.getAllHomeItems()
            .then((data) => {
                this.currentPosts = data
            })
    }

}