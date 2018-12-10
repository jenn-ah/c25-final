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
 
  constructor(

  ){}
  ngOnInit(){}

  

  postSearch(){
    console.log(this.search)
    return this.search="";
  }

  searchBar(){
    console.log(this.search)
  }
}