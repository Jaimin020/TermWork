import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HotelComponent } from './hotel/hotel.component';
import { LoginComponent } from './login/login.component';
import { LocationComponent } from './location/location.component';
import { TripComponent } from './trip/trip.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'hotel/:chart', component: HotelComponent},
  {path: 'location/:chart', component: LocationComponent},
  {path: '', component: TripComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
