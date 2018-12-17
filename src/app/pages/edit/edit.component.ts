import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit {
    data: any;

    constructor(private backend: BackendService, private router: Router, private session: SessionService) {

    }

    ngOnInit() {  }

    edit(data){
        this.backend.editCustomer(data)
        console.log('this new data', data)
    }

}