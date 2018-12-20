import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PostService } from '../../services/post.service'

@Component({
  templateUrl: './categoryPostPage.component.html',
  styleUrls: ['./categoryPostPage.component.scss']
})

export class CategoryPostPage implements OnInit {
posts:any;

  constructor(
    private backend: BackendService,
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService
    ) { 
      let catergoryId = this.route.snapshot.paramMap.get('event');
      console.log(catergoryId);
      
      this.postService.getCategory(catergoryId)
      .then((resp)=>{
        return this.posts = resp;
      })
    };
    
    ngOnInit() {
    }
  }
  // let postId = this.route.snapshot.paramMap.getAll('resp');
  // console.log('this post id snap', postId)
  // this.backend.getCategory(postId)
  //   .then((resp) => {
    //     console.log(resp)
    //     return this.posts = resp;
  // })