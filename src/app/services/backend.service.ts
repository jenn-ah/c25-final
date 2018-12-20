import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { AuthService } from "../services/auth.service"
import { SessionService } from "../services/session.service"


@Injectable({
  providedIn: "root"
})
export class BackendService {
  baseUrl: string = "http://localhost:4200/";
  customer: {
    id: number,
    username: string,
    password: string,
    first_name: string,
    last_name: string,
    email: string,
    state: string, 
    city: string,
    zip_code:number
  } = {
      id: null,
      username: '',
      password: '',
      first_name:'',
      last_name:'',
      email:'',
      state:'',
      city:'',
      zip_code:null
    };
  vendor: {
    id: number,
    username: string,
    password: string,
    first_name: string, 
    last_name: string,
    company_name: string,
    email: string,
    street_address: string,
    city:string,
    state: string,
    zip_code: number,
    photo: string,
    website: string,
    description: string, 
    phone_number: string,
    license_number: string
  } = {
      id: null,
      username: '',
      password: '',
      first_name: '',
      last_name: '',
      company_name: '',
      email: '',
      street_address: '',
      city: '',
      state: '',
      zip_code: null,
      photo: '',
      website: '',
      description: '',
      phone_number: '',
      license_number:''   
    }

    post:{
      id:number,
      title:string,
      username:string,
      category_id: number,
      customer_id: number,
      post_status_id: number,
      post_priority_id: number,
      vendor_id: number,
      photo: string,
      description: string,
      city: string,
      state: string,
      zip_code: null,
      budget: null, 
      can_bid: boolean,
    } = {
      id:null,
      title:'',
      username:'',
      category_id: null,
      customer_id: null,
      post_status_id: null,
      post_priority_id: null,
      vendor_id: null,
      photo: '',
      description: '',
      city: '',
      state: '',
      zip_code: null,
      budget: null,
      can_bid: false
    }

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private session: SessionService
  ) { }

  fetchPost(param) {
    const searchUrl = this.baseUrl + `api/posts/`+param;
    return this.http.get(searchUrl).toPromise()
    .then((resp)=>{
      return resp
    })
  }

  getVendor(id: number) {
    const url = this.baseUrl + "api/vendors" + id;
    return this.http.get(url).toPromise();
  }

  getAllHomeItems() {
    const url = this.baseUrl + 'api/posts'
    return this.http.get(url).toPromise()
  }

  register(data) {
    const userUrl = this.baseUrl + `api/customers`;
    return this.http
      .post(userUrl, {
        username: data.username,
        password: data.password,
        first_name: data.first_name,
        last_name: data.last_name,
        state: data.state,
        zip_code: data.zip_code,
        city: data.city,
        email: data.email
      })
      .toPromise();
  }

  createNewPost(data, customer) {
    const url = this.baseUrl + "api/posts";
    return this.http.post(url, {
      title: data.title,
      customer_id: data.customer_id,
      category_id: data.category_id,
      post_status_id: data.post_status_id,
      post_priority_id: data.post_priority_id,
      vendor_id: data.vendor_id,
      photo: data.photo,
      state: data.state,
      city: data.city,
      budget: data.budget,
      description: data.description,
      can_bid: data.can_bid,
      zip_code: data.zip_code,
    }).toPromise()
  }

  getPostByCustomer(id) {
    const getMyPosts = this.baseUrl + `api/posts/all/${id}`;
    return this.http.get(getMyPosts).toPromise();
  }

  customerLogin(username, password) {
    const customerUrl = this.baseUrl + "api/customer/login";
    return this.http.post(customerUrl, { username: username, password: password }).toPromise()
      .then((resp) => {
        return this.auth.customerLoginCheck(resp);
      })
  }

  vendorLogin(username, password) {
    const vendorUrl = this.baseUrl + 'api/vendors/login';
    return this.http.post(vendorUrl, { username: username, password: password }).toPromise()
      .then((resp) => {
        return this.auth.vendorLoginCheck(resp);
      })
  }

  vendorReg(data) {
    const vendorRegUrl = this.baseUrl + 'api/vendors/register';
    return this.http.post(vendorRegUrl, {
      company_name: data.company_name,
      category_id: data.category_id,
      username: data.username,
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
      street_address: data.street_address,
      city: data.city,
      state: data.state,
      zip_code: data.zip_code,
      photo: data.photo,
      website: data.website,
      description: data.description,
      phone_number: data.phone_number,
      license_number: data.license_number
    }).toPromise();
  }

  

}