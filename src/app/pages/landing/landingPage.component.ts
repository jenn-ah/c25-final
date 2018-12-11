import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../app/services/backend.service';

@Component({
  templateUrl: './landingPage.component.html',
  styleUrls: ['./landingPage.component.scss']
})

export class LandingPageComponent implements OnInit {
  isLoggedIn: boolean = false;
  customerLoginPressed: boolean = false;
  vendorLoginPressed: boolean = false;
  isCustomer: boolean = true;
  isVendor: boolean = true;
  loginForm:{
  username: string,
  company_name: string,
  password: string
  } = {
    username:"",
    company_name:'',
    password:''
  };

  constructor(
    private backend: BackendService,
  ) { }

  ngOnInit() { };

  customerLoginBtnPress() {
    this.isVendor = false;
    return this.customerLoginPressed = true;
  }

  vendorLoginBtnPress() {
    this.isCustomer = false;
    return this.vendorLoginPressed = true;
  }

  customerLogin() {
     return this.backend.customerLogin(this.loginForm.username, this.loginForm.password)
  }

  vendorLogin(){
    return this.backend.vendorLogin(this.loginForm.company_name, this.loginForm.password)
  }

  

}