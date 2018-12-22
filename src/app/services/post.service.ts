import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl: string = "http://localhost:4200/";
  post: any;
  constructor(
    private http: HttpClient,

  ) {

  }

  getCategory(category) {
    const fetchCategory = this.baseUrl + `api/posts/categories/${category}`
    return this.http.get(fetchCategory).toPromise();
  };




}