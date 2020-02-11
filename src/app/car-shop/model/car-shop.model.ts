import {CarModel} from './car.model';

export class CarShopModel {
  id: number;
  address: string;
  cars: CarModel[];

  constructor(id: number, address: string, cars?: CarModel[]) {
    this.id = id;
    this.address = address;
    this.cars = cars;
  }

}
