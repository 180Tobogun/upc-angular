import {Component, OnInit} from '@angular/core';
import {CarService} from '../car.service';
import {CarModel} from '../model/car.model';
import {CARS} from '../model/carData';
import {SHOPS} from '../model/shopData';

@Component({
  selector: 'app-car-shop',
  templateUrl: './car-shop.component.html',
  styleUrls: ['./car-shop.component.css']
})

export class CarShopComponent implements OnInit {

  cars = CARS;
  shops = SHOPS;

  constructor(private service: CarService) {
  }

  ngOnInit() {
  }

  setCarToShop(car: CarModel, shop, row) {
    this.service.setCarToShop(shop);
    this.cars.splice(row, 1);
  }

}
