
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { CommonHttpService } from 'src/app/service/common-http.service';
// import { AuthGuard } from 'src/app/services/auth-guard.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  opened?: boolean;
  @ViewChild(MatSidenavModule, { static: false }) sidenav!: MatSidenavModule;

  showFiller = false;
  constructor(private route: Router, httpService: CommonHttpService) { }
  ngOnInit() {
  }
  logOut() {
    this.route.navigate(['/login']);
  }
}