import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
// import { AuthGuard } from 'src/app/services/auth-guard.service';


export const sidenavRoutes: Routes = [
  {
    path: '', component: SidenavComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../Modules/overview/overview.module').then(m => m.OverviewModule),
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
