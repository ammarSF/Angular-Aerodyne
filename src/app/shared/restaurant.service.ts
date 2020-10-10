import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Restaurant } from '../restaurant';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  public restaurant: Restaurant;
  private baseUri: string = "http://localhost:8080";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  submit(restaurant: Restaurant) {
    return this.http.post(this.baseUri + '/create', restaurant, { headers: this.headers });
  }

  deleteCountry(id: string) {
    return this.http.delete(this.baseUri + '/delete' + id, { headers: this.headers });
  }

  setter(restaurant: Restaurant) {
    this.restaurant = restaurant;
  }

  getter() {
    return this.restaurant;
  }

}
