import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { AuthService } from "../services/auth.service"
import { SessionService } from "../services/session.service"

@Injectable({
  providedIn: "root"
})
export class BackendService {
  baseUrl: string = "http://localhost:4200/";

  data: any;
  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private session: SessionService
  ) { }

  fetchAllPosts(param) {
    const searchUrl = this.baseUrl + `api/posts/search/` + param;
    return this.http.post(searchUrl, { title: param }).toPromise()
  };

  fetchPost(param) {
    const searchUrl = this.baseUrl + `api/posts/` + param;
    return this.http.get(searchUrl).toPromise()
  };

  getAllHomeItems() {
    const url = this.baseUrl + 'api/posts'
    return this.http.get(url).toPromise()
  };

  getVendorJobs() {
    const vendorId = this.session.getVendorId();
    const url = this.baseUrl + `api/vendors/jobs/${vendorId}`;
    return this.http.get(url).toPromise();
  };

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
  };

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
  };

  getPostByCustomer(id) {
    const getMyPosts = this.baseUrl + `api/posts/all/${id}`;
    return this.http.get(getMyPosts).toPromise();
  };

  customerLogin(username, password) {
    const customerUrl = this.baseUrl + "api/customer/login";
    return this.http.post(customerUrl, { username: username, password: password }).toPromise()
      .then((resp) => {
        return this.auth.customerLoginCheck(resp);
      })
  };

  getCustomer(id) {
    const url = this.baseUrl + `api/customers/${id}`;
    return this.http.get(url).toPromise()
  };

  editCustomer(data) {
    const userUrl = this.baseUrl + `api/customers/edit`;
    return this.http
      .put(userUrl, {
        username: data.username,
        first_name: data.first_name,
        last_name: data.last_name,
        state: data.state,
        zip_code: data.zip_code,
        city: data.city,
        email: data.email
      })
      .toPromise();
  };

  getVendor(id) {
    const url = this.baseUrl + `api/vendors/${id}`;
    return this.http.get(url).toPromise();
  };

  editVendor(vendor, id) {
    const vendorUrl = this.baseUrl + `api/vendors/${id}/edit`;
    return this.http
      .put(vendorUrl, {
        first_name: vendor.first_name,
        last_name: vendor.last_name,
        phone_number: vendor.phone_number,
        email: vendor.email,
        website: vendor.website,
        description: vendor.description,
        company_name: vendor.company_name,
        city: vendor.city,
        state: vendor.state,
        street_address: vendor.street_address,
        zip_code: vendor.zip_code,
        photo: vendor.photo,
        license_number: vendor.license_number
      })
      .toPromise();
  };

  vendorLogin(username, password) {
    const vendorUrl = this.baseUrl + 'api/vendors/login';
    return this.http.post(vendorUrl, { username: username, password: password }).toPromise()
      .then((resp) => {
        return this.auth.vendorLoginCheck(resp);
      })
  };

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
  };
};