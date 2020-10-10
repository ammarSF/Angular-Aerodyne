import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country } from '../country';
import { Restaurant } from '../restaurant';

@Injectable()
export class CountryService {
  private restaurant: Restaurant;
  private baseUri: string = "http://localhost:8080";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  createCountry(restaurant: Restaurant) {
    return this.http.post(this.baseUri + '/create', restaurant, { headers: this.headers });
  }

  readCountry() {
    return this.http.get(this.baseUri + '/read', { headers: this.headers });
  }

  updateCountry(restaurant: Restaurant) {
    return this.http.put(this.baseUri + '/update', restaurant, { headers: this.headers });
  }

  deleteCountry(id: string) {
    return this.http.delete(this.baseUri + '/delete/' + id, { headers: this.headers });
  }

  setter(restaurant: Restaurant) {
    this.restaurant = restaurant;
  }

  getter() {
    return this.restaurant;
  }

}
