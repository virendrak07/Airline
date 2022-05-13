import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
// import { AuthGuard } from 'src/app/services/auth-guard.service';


export const sidenavRoutes: Routes = [
  {
    path: '', component: SidenavComponent,
    children: [
      {
        path: 'overview',
        loadChildren: () => import('../../Modules/overview/overview.module').then(m => m.OverviewModule),
      },
      {
        path: 'icao24',
        loadChildren: () => import('../../Modules/flight-data/flight-data.module').then(m => m.FlightDataModule),
      },
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(sidenavRoutes)
  ],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
