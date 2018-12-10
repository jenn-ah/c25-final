import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit{
 post:any;
 search:string;
 filter:Object[]=[];
 isLoggedIn: boolean = false;
 customerLoginPressed: boolean = false;
 vendorLoginPressed: boolean = false;
 username: string;
 password: string;
  constructor(

  ){}
  ngOnInit(){}

  customerLoginBtnPress(){
   return this.customerLoginPressed = true;
  }

  vendorLoginBtnPress(){
    return this.vendorLoginPressed = true;
  }

  postSearch(){
    console.log(this.search)
    return this.search="";
  }

  searchBar(){
    console.log(this.search)
  }
}