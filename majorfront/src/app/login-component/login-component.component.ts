import { Component,OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LogincredentialsService } from '../logincredentials.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  message: string;
  ngOnInit(){
    this.logincredentialsService.currentMessage.subscribe(message => this.message = message);
    console.log("message in login " + this.message);
  }

  title = 'Time Table Scheduler';
  loginUrl = "http://localhost:8080/Time_Table_Scheduler_war/Login";
  signUpUrl = "http://localhost:8080/Time_Table_Scheduler_war/Signup";
  loginid_signin = "";
  password_signin = "";
  loginid_signup = "";
  password_signup = "";

  constructor(private http: HttpClient,private router: Router, private logincredentialsService: LogincredentialsService) { }

  onLoginClick(){
  console.log(this.loginid_signin + this.password_signin);
  this.http.post(this.loginUrl,
        {
            "loginid": this.loginid_signin,
            "password": this.password_signin
        })
        .subscribe(
            (data : any ) => {
                console.log("POST Request is successful ", data);
                if(data.facultyResponse.facultyid=="null"){
                  alert("Invalid UserId or Password!");
                }else{
                  this.logincredentialsService.changeMessage(this.loginid_signin);
                  this.router.navigate(['profile']);
                }
                
            },
            error => {
                console.log("Error", error);
            }
        ); 
  }

  onSignUpClick(){
  console.log(this.loginid_signup + this.password_signup);
  this.http.post(this.signUpUrl,
        {
            "loginid": this.loginid_signup,
            "password": this.password_signup
        })
        .subscribe(
            (data : any ) => {
                console.log("POST Request is successful ", data);
                if(data.facultyResponse.facultyid=="null"){
                  alert("User Already Exists!");
                }else{
                  this.logincredentialsService.changeMessage(this.loginid_signup);
                  this.router.navigate(['profile']);
                }
            },
            error => {
                console.log("Error", error);
            }
        );
  }


}
