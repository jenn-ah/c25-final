import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { AuthService } from "../services/auth.service"
@Injectable({
  providedIn: "root"
})
export class BackendService {
  baseUrl: string = "http://localhost:4200/";
  // username: string ="";
  // company_name:string = "";
  // password: string = "";
  customer: {
    username: string,
    password: string,
  } = {
      username: '',
      password: '',
    };


  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

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

  registerVendor(data) {
    const userUrl = this.baseUrl + `api/vendors`;
    return this.http
      .post(userUrl, {
        first_name: data.first_name,
        last_name: data.last_name,
        company_name: data.company_name,
        password: data.password,
        email: data.email,
        street_address: data.street_address,
        city: data.city,
        state: data.state,
        zip_code: data.zip_code,
        photo: data.photo,
        website: data.website,
        description: data.description,
        phone_number: data.phone_number,
        license_number: data.license_number
      })
      .toPromise();
  }


  createNewPost(data) {
    const url = this.baseUrl + "api/posts";
    return this.http.post(url, {
      title: data.title,
      customer_id: data.customer_id,
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

  customerLogin(username, password) {
    const customerUrl = this.baseUrl + "api/login";
    return this.http.post(customerUrl, { username: username, password: password }).toPromise()
      .then((resp) => {
        return this.auth.customerLoginCheck(resp);
      })
  }

  vendorLogin(company_name, password) {
    const vendorUrl = this.baseUrl + "api/vendors/login";
    return this.http.post(vendorUrl, { company_name: company_name, password: password }).toPromise()
      .then((resp) => {
        return this.auth.vendorLoginCheck(resp);
      })
  }

}