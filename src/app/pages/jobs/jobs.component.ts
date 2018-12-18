import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";
import { Router } from '@angular/router';

@Component({
    templateUrl: './jobs.component.html',
    styleUrls: ['./jobs.component.scss']
})

export class JobsComponent implements OnInit {
    posts: any;

    constructor(private backend: BackendService, private router: Router) {

        this.backend.getAllHomeItems()
            .then((data) => {
                this.posts = data
                console.log('this is the posts', this.posts)
            })
            .catch(err => {
                return this.router.navigate(['/error']);
            });

    }
    ngOnInit() { }
}
