import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Icao24Component } from './icao24/icao24.component';

const routes: Routes = [
  { path: '', component: Icao24Component }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightDataRoutingModule { }
