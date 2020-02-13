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

export class CarShopComponent {
  constructor(public service: CarService) {
  }
}
