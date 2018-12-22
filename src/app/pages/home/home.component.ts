import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";
import { Router } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  posts: object;
  post: any;
  // post: {
  //   id: number,
  //   title: string,
  //   username: string,
  //   description: string,
  //   photo: string,
  //   post_status_id: number,
  //   post_priority_id: number,
  //   city: string,
  //   state: string,
  //   zip_code: string,
  //   email: string,
  //   customer_id: number,
  //   customerId: string,
  //   can_bid: boolean,
  //   budget: number,
  //   category_id: number,
  // } = {
  //     id: -1,
  //     title: '',
  //     description: '',
  //     username: '',
  //     photo: '',
  //     post_status_id: null,
  //     post_priority_id: null,
  //     city: '',
  //     state: '',
  //     zip_code: '',
  //     email: '',
  //     customer_id: null,
  //     customerId: null,
  //     can_bid: false,
  //     budget: null,
  //     category_id: null,
  //   }

  isAuthorized: boolean;
  hasAdminAccess: boolean;
  id: number;
  constructor(private backend: BackendService, private router: Router) {

    this.backend.getAllHomeItems()
      .then((data) => {
        this.posts = data;
      })
      .catch((err) => {
        return this.router.navigate(['/error']);
      })
  }
  ngOnInit() { }

  fetchPostDetail(id) {
    return this.backend.fetchPost(id)
      .then((resp) => {
        this.post = resp;
        return this.router.navigate(['/postDetail/id', this.post]);
      });
  }

}