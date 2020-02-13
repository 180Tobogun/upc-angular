import {Component, OnInit} from '@angular/core';
import {CarService} from '../car.service';
import {CarModel} from '../model/car.model';

@Component({
  selector: 'app-car-a',
  templateUrl: './car-a.component.html',
  styleUrls: ['./car-a.component.css']
})
export class CarAComponent {
  constructor(public service: CarService) {
  }
}
