import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from './material.module';
import {DirectiveModule} from './directive/directive.module';
import {FormsModule} from '@angular/forms';
import {CarShopModule} from './car-shop/car-shop.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DirectiveModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    CarShopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
