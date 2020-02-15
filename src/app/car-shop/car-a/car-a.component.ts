import {Component} from '@angular/core';
import {CarService} from '../car.service';

@Component({
  selector: 'app-car-a',
  templateUrl: './car-a.component.html',
  styleUrls: ['./car-a.component.css']
})
export class CarAComponent {
  constructor(public service: CarService) {
  }
}
