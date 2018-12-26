import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../app/services/backend.service';
import { Router } from '@angular/router';
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
  
  username: string = "";
  first_name: string = "";
  last_name: string = "";
  password: string = "";

  constructor(
    private backend: BackendService,
       private router: Router, 
    ) { }

  ngOnInit() { };

  customerLoginBtnPress() {
    this.isVendor = false;
    return this.customerLoginPressed = true;
  };

  vendorLoginBtnPress() {
    this.isCustomer = false;
    return this.vendorLoginPressed = true;
  };

  customerLogin() {
    return this.backend.customerLogin(this.username, this.password)
     .then(resp =>{
       return this.router.navigate(['/home']);
     })
     .catch(err => {
       return this.router.navigate(['/'])
     })
  };

  vendorLogin() {
    return this.backend.vendorLogin(this.username, this.password)
  .then((resp)=> {
    return this.router.navigate(['/home']);
  })
  .catch((err)=>{
    return this.router.navigate(['/'])
  })
  };



};