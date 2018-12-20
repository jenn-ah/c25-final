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


}