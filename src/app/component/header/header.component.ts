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
  post:any;
  search: string;
  filter: Object[] = [];
  filterSearch: Object;

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

  categoriesEvent(event) {
    return this.router.navigate(['/categoryPostPage', event]);
  }

  postSearcher() {
    let filterArray = []
    filterArray.push(this.search.toLowerCase())
    if (this.search.toLowerCase) {
      let param = filterArray.filter((element) => {
        return element;
      })
      return this.backend.fetchAllPosts(param)

        .then((resp) => {
          let postData = resp
          return this.router.navigate(['/postDetail/postData', postData]);
        })
    }
  }
}