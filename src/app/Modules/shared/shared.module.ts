import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing';
import { MaterialModule } from 'src/app/material.module';
import { SidenavComponent } from './sidenav/sidenav.component';


@NgModule({
  declarations: [
    SidenavComponent  
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
