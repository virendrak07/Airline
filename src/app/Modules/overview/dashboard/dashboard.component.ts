import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonHttpService } from '../../../service/common-http.service';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

interface Terminal {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  ELEMENT_DATA: any[] = [];
  indexList: any;
  dateValue: any;
  timeStamp: any;
  dataSource = new MatTableDataSource();
  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // TerminalDropdown
  selectedTerminal: string = 'T1';
  terminals: Terminal[] = [
    { value: 'T1', viewValue: 'T1' },
    { value: 'T2', viewValue: 'T2' },
  ];
  selectChangeHandler(event: any) {
    this.selectedTerminal = event.target.value;
    console.log(this.selectedTerminal);
    this.getFlightData();
  }

  displayedColumns = ['_id', 'arrivalDateTimestamp', 'departureDateTimestamp', 'terminal'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private router: Router, private httpService: CommonHttpService) {
    this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    this.getFlightData()
  }

  // FlightData API
  // auth: Virendra Kadam.
  
  getFlightData() {
    this.httpService.getSecure(`${environment.getFlightData}/${this.selectedTerminal}`).subscribe((data: any) => {
      if (!data.error) {
        console.log(data)
        this.indexList = data;
        this.ELEMENT_DATA = data;
        this.dataSource = new MatTableDataSource(this.indexList);
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
      }
    }, error => {
      console.log("API error", error);
    });
  }
  onDateChange() {
    this.timeStamp = this.dateValue * 1000;
    console.log(this.timeStamp);
  }
  ngOnInit(): void {
  }

}
