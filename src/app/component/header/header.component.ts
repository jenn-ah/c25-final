import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service'
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  post: {
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
  search: string;
  filter: Object[] = [];
  // categories:[{id:1, category:"Automotive"},
  //              {id:2, category:"Electrical"},
  //              {id:3, category:"Plumbing"},
  //              {id:4, category:"Landscaping"},
  //              {id:5, category:"Tayloring"},
  //              {id:6, category:"Childcare"},
  //              {id:7, category:"Painting"},
  //              {id:8, category:"Carpentry"},
  //              {id:9, category:"Pressure Washing"},
  //              {id:10, category:"Other"}];


  constructor(
    private backend: BackendService,
    private router: Router,
    private postService: PostService
  ) { }
  ngOnInit() { }

  postSearch() {
   console.log(this.search)
    return this.backend.fetchPost(this.search)
      .then((resp) => {
        this.search = '';
        console.log(resp)
        return this.router.navigate(['/posts/resp', resp]);
      })
  }

categoriesEvent(event){
  console.log('this cat event', event)
  return this.router.navigate(['/categoryPostPage',event]);
}


}