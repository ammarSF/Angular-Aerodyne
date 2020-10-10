import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../shared/country.service';
import { Restaurant } from '../../restaurant';
import { Router } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public restaurants: Restaurant[];
  public restaurant: Restaurant;
  public restaurantInput: Restaurant;
  public searchText: string;

  constructor(private _restaurantService: CountryService, private router: Router) { }

  ngOnInit(): void {
    this.restaurant = this._restaurantService.getter();
    this.restaurantInput = new Restaurant();
    this.searchText = "";
    this.readCountries();
  }

  readCountries() {
    this._restaurantService.readCountry().subscribe(
      data => {
        console.log(data);
        this.restaurants = data['msg'];
      },
      error => {
        console.log(error);
      }
    )
  }

  nameInput(event: any) {
    this.restaurantInput.name = event.target.value;
  }

  cityInput(event: any) {
    this.restaurantInput.city = event.target.value;
  }

  create() {
    this._restaurantService.createCountry(this.restaurantInput).subscribe(
      data => {
        console.log(data);
        this.readCountries();
      },
      error => {
        console.log(error);
      }
    )
  }

  delete(id: string) {
    this._restaurantService.deleteCountry(id).subscribe(
      data => {
        console.log(data);
        this.readCountries();
      },
      error => {
        console.log(error);
      }
    )
  }

}
