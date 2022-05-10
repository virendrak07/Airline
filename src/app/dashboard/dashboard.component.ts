import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonHttpService } from '../service/common-http.service';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  ELEMENT_DATA: any[] = [];
  indexList: any;

  dataSource = new MatTableDataSource();
  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  // applyFilter(filterValue: string) {
  //   filterValue = filterValue.trim(); // Remove whitespace
  //   filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  //   this.dataSource.filter = filterValue;
  // }
  displayedColumns = ['_id', 'name', 'arrivalDateTimestamp', 'departureDateTimestamp', 'terminal'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private router: Router, private httpService: CommonHttpService) {
    this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    this.getFlightData()
  }
  
  getFlightData() {
    this.httpService.getSecure(environment.getFlightData).subscribe((data: any) => {
      if (!data.error) {
      this.indexList = data.airportData;
        this.ELEMENT_DATA = data.airportData;
      this.dataSource = new MatTableDataSource(this.indexList);
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
      }
    }, error => {
      console.log("API error", error);
    });
  }
  
  ngOnInit(): void {
  }

}
