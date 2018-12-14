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
  // loginForm:{
  // username: string,
  // company_name: string,
  // password: string
  // } = {
  //   username:"",
  //   company_name:'',
  //   password:''
  // };
  username: string = "";
  password: string = "";
  company_name: string = "";

  constructor(
    private backend: BackendService,
      // private auth: AuthService,
       private router: Router, 
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
    return this.backend.customerLogin(this.username, this.password)
     .then(resp =>{
       return this.router.navigate(['/home']);
     })
     .catch(err => {
       console.log(err)
     })
  }

  vendorLogin() {
    return this.backend.vendorLogin(this.company_name, this.password)
  .then((resp)=> {
    return this.router.navigate(["/home"]);
  })
  .catch((err)=>{
    console.log(err)
  })
  }



}