import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  templateUrl: './postDetail.component.html',
  styleUrls: ['./postDetail.component.scss']
})

export class PostDetailComponent implements OnInit {
  post: {
    id: number,
    title: string,
    username: string,
    description: string,
    photo: string,
    post_status_id: number,
    post_priority_id: number,
    city: string,
    state: string,
    zip_code: string,
    email: string,
    customer_id: number,
    customerId: string,
    can_bid: boolean,
    budget: number
  } = {
      id: -1,
      title: '',
      description: '',
      username: '',
      photo: '',
      post_status_id: null,
      post_priority_id: null,
      city: '',
      state: '',
      zip_code: '',
      email: '',
      customer_id: null,
      customerId: null,
      can_bid: false,
      budget: null
    }

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
        return this.router.navigate(['/home']);
      })
  }

}