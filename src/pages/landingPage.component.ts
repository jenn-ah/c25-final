import { Component, OnInit } from '@angular/core';
import { BackendService } from '../app/services/backend.service';

@Component({
  templateUrl: './landingPage.component.html',
  styleUrls: ['./landingPage.component.scss']
})

export class LandingPageComponent implements OnInit {
  isLoggedIn: boolean = false;
  customerLoginPressed: boolean = false;
  vendorLoginPressed: boolean = false;
  username: string;
  password: string;



  constructor(
    private backend: BackendService,
  ) { }

  ngOnInit() { };

  customerLoginBtnPress() {
    return this.customerLoginPressed = true;
  }

  vendorLoginBtnPress() {
    return this.vendorLoginPressed = true;
  }

customerLogin(){
  return this.backend.customerLogin
  
}



}