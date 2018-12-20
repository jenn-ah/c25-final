import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  templateUrl: './postDetail.component.html',
  styleUrls: ['./postDetail.component.scss']
})

export class PostDetailComponent implements OnInit {
  post: any;
  
  constructor(
    private backend: BackendService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.post
  }
  ngOnInit() {
    let postId = this.route.snapshot.paramMap.get('id');
    this.backend.fetchPost(postId)
      .then((resp) => {
        return this.post = resp;
      })
      .catch((err) => {
        return this.router.navigate(['/home'])
      })
  }






}