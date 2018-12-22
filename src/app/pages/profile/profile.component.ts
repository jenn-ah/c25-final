import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";
import { SessionService } from '../../services/session.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  urlId: string;
  isLoggedIn: boolean = false;
  loginPressed: boolean = false;

  vendorProfile: {
    id: number,
    username: string,
    first_name: string,
    last_name: string,
    phone_number: number,
    email: string,
    website: string,
    description: string,
    company_name: string,
    isLoggedIn: boolean,
    city: string,
    state: string,
    zip_code: number
  } = {
      id: null,
      username: "",
      first_name: "",
      last_name: "",
      phone_number: null,
      email: "",
      website: "",
      description: "",
      company_name: "",
      isLoggedIn: false,
      city: "",
      state: "",
      zip_code: null,
    }

  ownProfile: boolean = false;


  constructor(private backend: BackendService, private router: Router, private session: SessionService,
    private route: ActivatedRoute) {
    this.vendorProfile = this.session.getVendor();
  }

  ngOnInit() {
    this.urlId = this.route.snapshot.paramMap.get('id');

    if (this.urlId === `${this.vendorProfile.id}`) {
      this.ownProfile = true;
    }
    return this.backend.getVendor(this.urlId)

  };

  vendorLogIn() {
    return this.session.getIsVendorLoggedIn();
  };

  logout() {
    this.session.clearSession()
    this.isLoggedIn = false;
    this.loginPressed = false;
    return this.router.navigate([''])
  };
};