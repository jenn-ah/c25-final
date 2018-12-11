import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../../app/services/backend.service";
import { Router } from '@angular/router';

@Component({
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})

export class CreateComponent implements OnInit {

    constructor(private backend: BackendService, private router: Router) {

    }

    ngOnInit() { }

}