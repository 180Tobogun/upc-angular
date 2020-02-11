import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../material.module';
import {CarAComponent} from './car-a/car-a.component';
import {CarBComponent} from './car-b/car-b.component';
import {CarShopComponent} from './car-shop/car-shop.component';

@NgModule({
  declarations: [
    CarAComponent,
    CarBComponent,
    CarShopComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    CarAComponent,
    CarBComponent,
    CarShopComponent
  ]
})
export class CarShopModule {
}
