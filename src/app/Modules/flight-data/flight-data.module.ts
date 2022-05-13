import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightDataRoutingModule } from './flight-data-routing.module';
import { Icao24Component } from './icao24/icao24.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    Icao24Component
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlightDataRoutingModule
  ]
})
export class FlightDataModule { }
