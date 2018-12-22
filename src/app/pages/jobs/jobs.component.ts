import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";
import { Router } from '@angular/router';

@Component({
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})

export class JobsComponent implements OnInit {

  jobs: object;

  constructor(private backend: BackendService, private router: Router) {

    this.backend.getVendorJobs()
      .then((data) => {
        return this.jobs = data;
      })
      .catch(err => {
        return this.router.navigate(['/error']);
      });

  }
  ngOnInit() { }
}
