import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: "root"
})
export class BackendService{
  baseUrl: string = 'http://localhost:4200/';
  customer: {
    id: number,
    username:string,
    password: string,
    first_name: string,
    last_name: string,
    email: string,
    state: string,
    city: string,
    zip_code: number,
  }={
    id: null,
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    email: '',
    state: '',
    city: '',
    zip_code: null,
  };
 vendor: {
   id: number,
   first_name: string,
   last_name: string,
   company_name: string,
   password: string,
   email: string,
   street_address: string,
   city: string,
   state: string,
   zip_code: number,
   photo: string,
   website: string,
   description: string,
   phone_number: number,
   license_number: number,
 } = {
   id: null,
   first_name: '',
   last_name: '',
   company_name: '',
   password: '',
   email: '',
   street_address: '',
   city: '',
   state: '',
   zip_code: null,
   photo: '',
   website: '',
   description: '',
   phone_number: null,
   license_number: null,
 };
 post:{
   id: number,
   title: string,
   customer_id: number,
   post_priority: number,
   post_status_id: number,
   vendor_id: number,
   photo: string,
   description: string,
   city: string,
   state: string,
   zip_code: number,
   budget: number,
   can_bid: boolean,
 } = {
   id:null,
   title: '',
   customer_id: null,
   post_priority: null,
   post_status_id: null,
   vendor_id: null,
   photo: '',
   description: '',
   city: '',
   state: '',
   zip_code: null,
   budget: null,
   can_bid: false,
 };

constructor(
  private http: HttpClient,
){}

customerLogin(username, password){
  const customerUrl = this.baseUrl + "/customers";
  return this.http.post(customerUrl, { username: username, password:password}).toPromise();
}




}