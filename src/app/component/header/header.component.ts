import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit{
 post:{
  id: number,
  title: string,
  description: string,
  photo: string,
  post_status: string,
  post_priority: string,
  city: string,
  state: string,
  zip_code: string,
  email: string,
  customer_id: string,
  can_bid: boolean,
  budget: number
};
 search:string;
 filter:Object[]=[];
 
  constructor(
private backend: BackendService,
private router: Router
  ){}
  ngOnInit(){}

  

  postSearch(){
    return this.backend.fetchPost(this.search)
    .then((resp)=>{
      this.search='';
      return this.router.navigate(['postDetail/:resp.id']);
    })
  }

  
}