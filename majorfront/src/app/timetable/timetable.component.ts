import { Component, OnInit } from '@angular/core';
import { TimetabledataService } from '../timetabledata.service';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {

  timetableMessage : string;
  getFirstYearTTURL = "http://localhost:8080/Time_Table_Scheduler_war/batch";

  val00 = false;
  val01 = false;
  val02 = false;
  val03 = false;
  val04 = false;
  val05 = false;
  val06 = false;
  val07 = false;
  val08 = false;
  val09 = false;

  val10 = false;
  val11 = false;
  val12 = false;
  val13 = false;
  val14 = false;
  val15 = false;
  val16 = false;
  val17 = false;
  val18 = false;
  val19 = false;

  val20 = false;
  val21 = false;
  val22 = false;
  val23 = false;
  val24 = false;
  val25 = false;
  val26 = false;
  val27 = false;
  val28 = false;
  val29 = false;

  val30 = false;
  val31 = false;
  val32 = false;
  val33 = false;
  val34 = false;
  val35 = false;
  val36 = false;
  val37 = false;
  val38 = false;
  val39 = false;

  val40 = false;
  val41 = false;
  val42 = false;
  val43 = false;
  val44 = false;
  val45 = false;
  val46 = false;
  val47 = false;
  val48 = false;
  val49 = false;

  constructor(private timetabledataService: TimetabledataService , private router: Router , private http: HttpClient) { }

  ngOnInit() {
   	this.timetabledataService.currentMessage.subscribe(timetableMessage => this.timetableMessage = timetableMessage);
    console.log("timetableMessage in timetable component " + this.timetableMessage);
    if(this.timetableMessage == "default message"){
    	this.router.navigate(['']);
    }

    this.http.post(this.getFirstYearTTURL,this.timetableMessage)
        .subscribe(
            (data : any ) => {
                console.log("POST Request for getting tt is successful ", data);
                console.log(data);
            },
            error => {
                console.log("Error", error);
            }
        ); 
  }

  onUpdateClick(){
  	console.log("update clicked");
  	this.timetabledataService.changeMessage("updateOnBatchTimeTable");
  	this.router.navigate(['admin']);
  }
}
