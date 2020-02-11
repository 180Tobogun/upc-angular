import {Injectable} from '@angular/core';
import {CarModel} from './model/car.model';
import {CarShopModel} from './model/car-shop.model';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  car: CarModel[] = [];
  carShop: CarShopModel[] = [];

  constructor() {
  }

  setCarToShop(shop) {
    return this.car.map(cars => cars.id === shop);
  }

  getDataToShop(shopId) {
    return this.carShop.map(cars => cars.id === shopId);
  }
}
