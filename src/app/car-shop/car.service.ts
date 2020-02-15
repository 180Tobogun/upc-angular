import {Injectable} from '@angular/core';
import {CarModel} from './model/car.model';
import {CarShopModel} from './model/car-shop.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {SHOPS} from './model/shopData';
import {CARS} from './model/carData';
import {HistoryModel} from './model/history.model';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  private shopsBSubject: BehaviorSubject<CarShopModel[]> = new BehaviorSubject(SHOPS);
  private carsBSubject: BehaviorSubject<CarModel[]> = new BehaviorSubject(CARS);
  private historyBSubject: BehaviorSubject<HistoryModel[]> = new BehaviorSubject<HistoryModel[]>([]);
  private readonly stashTable = 'stashTable';

  get history$(): Observable<HistoryModel[]> {
    return this.historyBSubject.asObservable();
  }

  private set history(value: HistoryModel[]) {
    this.historyBSubject.next(value);
  }

  private get history(): HistoryModel[] {
    return this.historyBSubject.getValue();
  }

  get cars$(): Observable<CarModel[]> {
    return this.carsBSubject.asObservable();
  }

  get shops$(): Observable<CarShopModel[]> {
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

  // closure
  public getAllowedShops(currentShop: CarShopModel): Observable<CarShopModel[]> {
    return this.shops$.pipe(
      map(shops => shops.filter(s => s.id !== currentShop.id))
    );
  }

  public moveCarFromShopToShop(fromShop: CarShopModel, toShop: CarShopModel, car: CarModel) {
    this.removeCarFromShop(car, fromShop);
    this.addCarToShop(car, toShop);
    this.addItemToHistory(fromShop.address, toShop.address);
  }


  private addItemToHistory(from: string, to: string): void {
    this.history = [...this.history, {from, to, date: this.getCurrentDate()}];
  }

  private getCurrentDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();

    return mm + '/' + dd + '/' + yyyy;
  }

  private addCarToShop(car: CarModel, shop: CarShopModel) {
    this.shops = this.shops.map(currentShop => {
      if (currentShop.id === shop.id) {
        return {
          ...currentShop,
          cars: [...currentShop.cars, car]
        };
      }
      return currentShop;
    });
  }

  public addCarToShopFromStash(car: CarModel, shop: CarShopModel): void {
    this.addCarToShop(car, shop);
    this.removeCarFromList(car);
    this.addItemToHistory(this.stashTable, shop.address);
  }

  private removeCarFromShop(targetCar: CarModel, shop: CarShopModel) {
    this.shops = this.shops.map(currentShop => {
      if (currentShop.id === shop.id) {
        return {
          ...currentShop,
          cars: currentShop.cars.filter(c => c.id !== targetCar.id)
        };
      }
      return currentShop;
    });
  }

  public moveCarFromShopToStash(targetCar: CarModel, shop: CarShopModel): void {
    this.removeCarFromShop(targetCar, shop);
    this.addCarToList(targetCar);
    this.addItemToHistory(shop.address, this.stashTable);
  }

  private removeCarFromList(targetCar: CarModel): void {
    this.cars = this.cars.filter(car => car.id !== targetCar.id);
  }

  private addCarToList(targetCar: CarModel): void {
    this.cars = [...this.cars, targetCar];
  }
}
