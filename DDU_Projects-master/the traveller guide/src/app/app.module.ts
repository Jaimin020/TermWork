import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DbCrudService } from './db-crud.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { LocationComponent } from './location/location.component';
import { TripComponent } from './trip/trip.component';
@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    HomeComponent,
    LoginComponent,
    LocationComponent,
    TripComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [DbCrudService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
