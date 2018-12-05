import { Component } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Time Table Scheduler';
  loginid : string;
  password : string;
  overall: object;
  loginurl : string = "http://localhost:8080/com_sss_majorproject_war/Login";
  signupurl : string = "http://localhost:8080/com_sss_majorproject_war/Signup";

  constructor(private http: HttpClient) { }

  doPostLogin() {
	  console.log("POST");
	  const data =  {

	  loginid : this.loginid,
	  password : this.password

	  }
	  this.http.post(this.loginurl,data);
	  
	}	
}

