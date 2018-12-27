import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { SessionService } from '../../services/session.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  templateUrl: './customerProfile.component.html',
  styleUrls: ['./customerProfile.component.scss']
})

export class CustomerProfileComponent implements OnInit {
    isLoggedIn: boolean = false;
    loginPressed: boolean = false;
    customer: any;

    
  urlId: string;
  editClicked: boolean = true;
  ownProfile: boolean = false;

  constructor(private backend: BackendService, private router: Router, private session: SessionService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.customer = this.session.getCustomer();
  };

  customerLogIn() {
    return this.session.getIsLoggedIn();
  };

  logout() {
    this.session.clearSession()
    this.isLoggedIn = false;
    this.loginPressed = false;
    return this.router.navigate([''])
  };

};