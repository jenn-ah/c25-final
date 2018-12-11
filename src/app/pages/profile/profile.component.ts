import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";
import { Router } from '@angular/router';

@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    constructor(private backend: BackendService, private router: Router) {

    }

    ngOnInit() { }

}