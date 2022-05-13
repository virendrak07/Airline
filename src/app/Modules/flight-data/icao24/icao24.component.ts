import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CommonHttpService } from 'src/app/service/common-http.service';
import { environment } from 'src/environments/environment';
interface Terminal {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-icao24',
  templateUrl: './icao24.component.html',
  styleUrls: ['./icao24.component.scss']
})
export class Icao24Component implements OnInit {
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

  displayedColumns = ['_id', 'arrivalDateTimestamp', 'departureDateTimestamp', 'terminal', 'difference', 'hr', 'vr'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private router: Router, private httpService: CommonHttpService) {
    this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    this.getFlightData()
  }
  // ---*******FlightData API
  // auth: Virendra Kadam.*****------

  getFlightData() {
    this.httpService.getSecure(`${environment.getIcao24}/${this.selectedTerminal}`).subscribe((data: any) => {
      if (!data.error) {
        this.indexList = data;
        this.ELEMENT_DATA = data;
        this.dataSource = new MatTableDataSource(this.indexList);
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
        for(let i=0; i<this.ELEMENT_DATA.length; i++){
          var value = this.ELEMENT_DATA[i];
          let differance = this.timeDifference(value[`arrivalTimestamp`], value[`departureTimestamp`])
          value['difference']=differance
          console.log(value)
        }
      }
    }, error => {
      console.log("API error", error);
    });
  }

  //Flight Halts 
  timeDifference(date1: any, date2: any) {
    date1 = new Date(date1 );
    date2 = new Date(date2 );
    var difference = date2.getTime() - date1.getTime();

    var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
    difference -= daysDifference * 1000 * 60 * 60 * 24

    var hoursDifference = Math.floor(difference / 1000 / 60 / 60);
    difference -= hoursDifference * 1000 * 60 * 60

    var minutesDifference = Math.floor(difference / 1000 / 60);
    difference -= minutesDifference * 1000 * 60;


    const calculateDiff = daysDifference + ' day ' +
      hoursDifference + ' hour ' +
      minutesDifference + ' minute '
      return(calculateDiff)
  }
  //   timeDifferance:any;
  // selectTime(){
  // this.timeDifferance = this.ELEMENT_DATA.departureDateTimestamp - this.ELEMENT_DATA.arrivalDateTimestamp
  // }

  onDateChange() {
    this.timeStamp = this.dateValue * 1000;
    console.log(this.timeStamp);
  }
  ngOnInit(): void {
  }

}
