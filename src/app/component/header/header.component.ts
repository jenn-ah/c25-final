import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service'
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service'
import { IPost } from '../../interfaces/interfaces'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  post:IPost={
    id: null,
    first_name:'',
    username:'',
    category_id:null,
    customerId:null,
    title: '',
    description: '',
    photo: '',
    post_status_id: null,
    post_priority_id: null,
    city: '',
    state: '',
    zip_code: null,
    email: '',
    customer_id: null,
    can_bid: false,
    budget: null,
    created_at:null,
  };
  search: string;
  filter: Object[] = [];
  filterSearch: Object[];

  constructor(
    private backend: BackendService,
    private router: Router,
    private postService: PostService
  ) { }
  ngOnInit() { }

  postSearch() {
    return this.backend.fetchPost(this.search)
      .then((resp) => {
        this.search = '';
        return this.router.navigate(['/posts/resp', resp]);
      })
  }

categoriesEvent(event){
  return this.router.navigate(['/categoryPostPage',event]);
}

postSearcher(){
  if(this.search.toLowerCase){
    return this.filterSearch = this.backend.fetchAllPosts(this.search)
  
  .then((resp)=>{
    return this.router.navigate(['/posts/resp', resp]);
  })}
  
}

}