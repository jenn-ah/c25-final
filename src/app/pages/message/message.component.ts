import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../../app/services/backend.service";
import { Router } from '@angular/router';

@Component({
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss']
})

export class MessageComponent implements OnInit {

    constructor(private backend: BackendService, private router: Router) {

    }

    ngOnInit() { }

}