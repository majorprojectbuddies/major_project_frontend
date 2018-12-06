import { Component, OnInit } from '@angular/core';
import { LogincredentialsService } from '../logincredentials.service';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  message:string;
  facultyName: string;
  dataToSend : any ;
  fetchDataUrl = "http://localhost:8080/Time_Table_Scheduler_war/profile";
  timeTable : any [];

  hours = [
    { value : 6 },
    { value : 8 },
    { value : 10 },
    { value : 12 },
    { value : 14 },
    { value : 16 },
  ];

  designations = [
    { id: 'Professor', text: 'Professor' },
    { id: 'Associate Professor', text: 'Associate Professor' },
    { id: 'Assistant Professor', text: 'Assistant Professor' },
    { id: 'Research Scholar', text: 'Research Scholar' },
    { id: 'Guest Faculty' , text: 'Guest Faculty' },
    { id: 'UGC Prof', text: 'UGC Prof' }
  ];

  courseList: any [];

  selectedDesignation = null;
  selectedHours = 0;
  selectedCourse1 = null;
  selectedCourse2 = null;
  selectedCourse3 = null;


  constructor( private logincredentialsService: LogincredentialsService , private router: Router , private http: HttpClient) { }

  ngOnInit() {
    this.logincredentialsService.currentMessage.subscribe(message => this.message = message);
    console.log("message in profile " + this.message);
    if(this.message == "default message"){
    	this.router.navigate(['']);
    }

    this.http.post(this.fetchDataUrl,
        {
            "loginid": this.message,
        })
        .subscribe(
            ( data : any ) => {
                console.log("POST Request is successful ", data);
                this.dataToSend = data;
                this.courseList = data.courseResponse.courseList;
                this.timeTable = data.facultyResponse.timeTable.timetable;
            },
            error => {
                console.log("Error", error);
            }
        ); 

  }

  onUpdateClick(){
    console.log("update clicked");
    console.log(this.dataToSend);
    this.dataToSend.facultyResponse.designation = this.selectedDesignation;
    this.dataToSend.facultyResponse.noOfHours = this.selectedHours;
    this.dataToSend.facultyResponse.subject1 = this.selectedCourse1;
    this.dataToSend.facultyResponse.subject2 = this.selectedCourse2;
    this.dataToSend.facultyResponse.subject3 = this.selectedCourse3;
    this.dataToSend.facultyResponse.name = this.facultyName;
  }

}
