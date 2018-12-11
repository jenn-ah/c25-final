import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";
import { Router } from '@angular/router';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    home: object;

    constructor(private backend: BackendService, private router: Router) {

        this.backend.getAllHomeItems()
            .then((data) => {
                console.log(data)
                this.home = data
            })
            .catch((err) => {
                alert('error has occured')
                window.location.href = '/error'
                console.log('failure', err)
            })

    }

    ngOnInit() { }


}