import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: any;
  password: any;
  loginForm = new FormGroup({
    //   userName: new FormControl('',[Validators.required, Validators.email]),
    email_id: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required])
  });
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
  
        this.router.navigate(['sidenav/']);
     
  }
}
// getFlightData() {
//   this.httpService.getSecure(`${environment.getFlightData}/?date=${this.dateValue}`).subscribe(data => {
//     if (!data.error) {
//       this.ELEMENT_DATA = data.airportData;
//       this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
//       this.dataSource.paginator = this.paginator;
//     }
//   }, error => {
//     console.log("API error", error);
//   });
// }
// onDateChange(){
// this.getFlightData();
// }