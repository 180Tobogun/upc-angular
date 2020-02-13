import {Injectable} from '@angular/core';
import {CarModel} from './model/car.model';
import {CarShopModel} from './model/car-shop.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { SHOPS } from './model/shopData';
import { CARS } from './model/carData';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  private shopsBSubject: BehaviorSubject<CarShopModel[]> = new BehaviorSubject(SHOPS);
  private carsBSubject: BehaviorSubject<CarModel[]> = new BehaviorSubject(CARS);

  get cars$(): Observable<CarModel[]>{
    return this.carsBSubject.asObservable();
  }

  get shops$(): Observable<CarShopModel[]>{
    return this.shopsBSubject.asObservable();
  }

  private get cars(): CarModel[] {
    return this.carsBSubject.getValue();
  }

  private set cars(value: CarModel[]) {
     this.carsBSubject.next(value);
  }

  private get shops(): CarShopModel[] {
    return this.shopsBSubject.getValue();
  }

  private set shops(value: CarShopModel[]) {
    this.shopsBSubject.next(value);
 }

  constructor() {
  }

  public addCarToShop(car: CarModel, shop: CarShopModel): void {
    this.shops = this.shops.map(currentShop => {
      if(currentShop.id === shop.id) {
        return {
          ...currentShop,
          cars: [...currentShop.cars, car]
        }
      }
      return currentShop;
    });
    this.removeCarFromList(car);
  }

  public removeCarFromShop(targetCar: CarModel, shop: CarShopModel): void {
    this.shops = this.shops.map(currentShop => {
      if (currentShop.id === shop.id) {
        return {
          ...currentShop,
          cars: currentShop.cars.filter(c => c.id !== targetCar.id)
        }
      }
      return currentShop;
    });
    this.addCarToList(targetCar);
  }

  private removeCarFromList(targetCar: CarModel): void {
    this.cars = this.cars.filter(car => car.id !== targetCar.id);
  }

  private addCarToList(targetCar: CarModel): void {
    this.cars = [...this.cars, targetCar];
  }
}
