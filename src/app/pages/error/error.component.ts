import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";
import { Router } from '@angular/router';

@Component({
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss']
})

export class ErrorComponent implements OnInit {

    constructor(private backend: BackendService, private router: Router) {  }
    
    ngOnInit() { }


}