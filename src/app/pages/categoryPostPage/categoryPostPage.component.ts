import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  templateUrl: './categoryPostPage.component.html',
  styleUrls: ['./categoryPostPage.component.scss']
})

export class CategoryPostPage implements OnInit {
  posts: Object[] = [];

  constructor(
    private backend: BackendService,
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService
  ) {
    let catergoryId = this.route.snapshot.paramMap.get('event');
    this.postService.getCategory(catergoryId)
      .then((resp: Object[]) => {
        return this.posts = resp;
      })
  };

  ngOnInit() {
  };
};