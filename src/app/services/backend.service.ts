import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { AuthService } from "../services/auth.service"
@Injectable({
  providedIn: "root"
})
export class BackendService {
  baseUrl: string = "http://localhost:4200/";
  id: number;

  customer: {
    username: string,
    password: string,
    first_name: string,
    last_name: string
  } = {
      username: '',
      password: '',
      first_name: '',
      last_name: ''
    };
  vendor: {
    username: string,
    password: string,
  } = {
      username: '',
      password: ''
    }

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

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


  createNewPost(data) {
    const url = this.baseUrl + "api/posts";
    return this.http.post(url, {
      title: data.title,
      customer_id: data.customer_id,
      post_status_id: data.post_status_id,
      post_priority: data.post_priority,
      vendor_id: data.vendor_id,
      photo: data.photo,
      state: data.state,
      city: data.city,
      budget: data.budget,
      description: data.description,
      can_bid: data.can_bid,
      zip_code: data.zip_code,
    }).toPromise();
  }


  customerLogin(username, password, first_name, last_name ) {
    const customerUrl = this.baseUrl + "api/customer/login";
    return this.http.post(customerUrl, { username: username, password: password, first_name: first_name, last_name: last_name }).toPromise()
      .then((resp) => {
        return this.auth.customerLoginCheck(resp);
      })
  }

  getCustomer(){
    const url = this.baseUrl + 'api/customers/2'
    return this.http.get(url).toPromise()
  }

  editCustomer(data) {
    const url = this.baseUrl + 'api/customers/2/edit';
    return this.http.put(url, data).toPromise();
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